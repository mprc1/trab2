webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_personal_personal_component__ = __webpack_require__("../../../../../src/app/admin/components/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_list_component__ = __webpack_require__("../../../../../src/app/admin/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_materiaprima_materiaprima_component__ = __webpack_require__("../../../../../src/app/admin/components/materiaprima/materiaprima.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_main_component__ = __webpack_require__("../../../../../src/app/admin/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_categoria_categoria_component__ = __webpack_require__("../../../../../src/app/admin/components/categoria/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_admin_guard__ = __webpack_require__("../../../../../src/app/services/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_iva_iva_component__ = __webpack_require__("../../../../../src/app/admin/components/iva/iva.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//components







//routes
var adminRoutes = [
    {
        path: 'admin-panel',
        component: __WEBPACK_IMPORTED_MODULE_5__components_main_main_component__["a" /* MainComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_admin_guard__["a" /* AdminGuard */]],
        children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full' },
            { path: 'listado', component: __WEBPACK_IMPORTED_MODULE_3__components_list_list_component__["a" /* ListComponent */] },
            { path: 'personal', component: __WEBPACK_IMPORTED_MODULE_2__components_personal_personal_component__["a" /* PersonalComponent */] },
            { path: 'materiaPrima', component: __WEBPACK_IMPORTED_MODULE_4__components_materiaprima_materiaprima_component__["a" /* MateriaprimaComponent */] },
            { path: 'categoria', component: __WEBPACK_IMPORTED_MODULE_6__components_categoria_categoria_component__["a" /* CategoriaComponent */] },
            { path: 'iva', component: __WEBPACK_IMPORTED_MODULE_8__components_iva_iva_component__["a" /* IvaComponent */] }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(adminRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password__ = __webpack_require__("../../../../primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__ = __webpack_require__("../../../../primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_toast__ = __webpack_require__("../../../../primeng/toast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_toast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_keyfilter__ = __webpack_require__("../../../../primeng/keyfilter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_keyfilter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_keyfilter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_table__ = __webpack_require__("../../../../primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_multiselect__ = __webpack_require__("../../../../primeng/multiselect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_main_main_component__ = __webpack_require__("../../../../../src/app/admin/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_personal_personal_component__ = __webpack_require__("../../../../../src/app/admin/components/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_list_list_component__ = __webpack_require__("../../../../../src/app/admin/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_materiaprima_materiaprima_component__ = __webpack_require__("../../../../../src/app/admin/components/materiaprima/materiaprima.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_categoria_categoria_component__ = __webpack_require__("../../../../../src/app/admin/components/categoria/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_iva_iva_component__ = __webpack_require__("../../../../../src/app/admin/components/iva/iva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_admin_guard__ = __webpack_require__("../../../../../src/app/services/admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Imports modulos





//modulos ngPRIME


















// Here
//prime icons fa fa-

//components






//Guards


//Decorar ngModule para cargar los componentes y la configuracion de los modulos
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_keyfilter__["KeyFilterModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_toast__["ToastModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_multiselect__["MultiSelectModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_personal_personal_component__["a" /* PersonalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_materiaprima_materiaprima_component__["a" /* MateriaprimaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_categoria_categoria_component__["a" /* CategoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_iva_iva_component__["a" /* IvaComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_personal_personal_component__["a" /* PersonalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_materiaprima_materiaprima_component__["a" /* MateriaprimaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_categoria_categoria_component__["a" /* CategoriaComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_20__services_admin_guard__["a" /* AdminGuard */],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/components/categoria/categoria.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO CATEGORIAS\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"nombre\" header=\"Nombre\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"descripcion\" header=\"Descripcion\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n<form #registerForm=\"ngForm\" >\r\n  <p-dialog header=\"Categoría Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n            [modal]=\"true\" width=\"1000\">\r\n\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\">\r\n      <div class=\"ui-grid-col-6\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"nombre\">Nombre: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"nombre\" id=\"nombre\" [(ngModel)]=\"actual.nombre\" placeholder=\"Requerido\"\r\n                   class=\"form-control\" required/>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"descripcion\">Descripcion: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"descripcion\" id=\"descripcion\" [(ngModel)]=\"actual.descripcion\"\r\n                   placeholder=\"Requerido\" class=\"form-control\" required/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p-footer>\r\n      <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\" [disabled]=\"!registerForm.form.valid\"></button>\r\n        <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\" class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n        <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n      </div>\r\n    </p-footer>\r\n\r\n  </p-dialog>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/components/categoria/categoria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_categoriaMaterial_service__ = __webpack_require__("../../../../../src/app/services/categoriaMaterial.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_categoria__ = __webpack_require__("../../../../../src/app/models/categoria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoriaComponent = (function () {
    function CategoriaComponent(_route, _router, _usuarioService, _categoriaService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._categoriaService = _categoriaService;
        this._uploadService = _uploadService;
        this.title = 'GESTION CATEGORIAS';
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_6__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
    }
    CategoriaComponent.prototype.ngOnInit = function () {
    };
    CategoriaComponent.prototype.getAll = function () {
        var _this = this;
        this._categoriaService.getAll().subscribe(function (response) {
            _this.listado = response.categorias;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    CategoriaComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.displayDialog = true;
    };
    CategoriaComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this._categoriaService.update(this.token, this.actual).subscribe(function (response) {
            if (response.categoria) {
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + JSON.stringify(response));
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.displayDialog = false;
    };
    CategoriaComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            this._categoriaService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
                    _this.getAll();
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this._categoriaService.update(this.token, this.actual).subscribe(function (response) {
                if (response.categoria) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
                    _this.getAll();
                }
                else {
                    console.log("OBJ _id: error" + JSON.stringify(response));
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.displayDialog = false;
        //this.listado = listado;
    };
    CategoriaComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    CategoriaComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.displayDialog = false;
    };
    CategoriaComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
    };
    CategoriaComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    CategoriaComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    CategoriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-edit',
            template: __webpack_require__("../../../../../src/app/admin/components/categoria/categoria.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_categoriaMaterial_service__["a" /* CategoriaMaterialService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_categoriaMaterial_service__["a" /* CategoriaMaterialService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]])
    ], CategoriaComponent);
    return CategoriaComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(nombre, descripcion, borrado) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.borrado = borrado;
    }
    return PrimeObj;
}());


/***/ }),

/***/ "../../../../../src/app/admin/components/iva/iva.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-4\">\r\n\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt >\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n\r\n\r\n          CONFIGURABLE IVA\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"nombre\" header=\"Nombre\" [sortable]=\"false\" [filter]=\"false\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"valor\" header=\"Porcentaje\" [sortable]=\"false\" [filter]=\"false\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n<form #registerForm=\"ngForm\" >\r\n  <p-dialog header=\"IVA Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n            [modal]=\"true\" width=\"1000\">\r\n\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\">\r\n      <div class=\"ui-grid-col-6\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"nombre\">Nombre: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"nombre\" id=\"nombre\" [(ngModel)]=\"actual.nombre\" placeholder=\"Requerido\"\r\n                   class=\"form-control\" required/>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"valor\">Porcentaje %: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"valor\" id=\"valor\" [(ngModel)]=\"actual.valor\"\r\n                   placeholder=\"Requerido\" class=\"form-control\" required/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p-footer>\r\n      <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\" [disabled]=\"!registerForm.form.valid\"></button>\r\n        <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\" class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n        <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n      </div>\r\n    </p-footer>\r\n\r\n  </p-dialog>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/components/iva/iva.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IvaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_iva_service__ = __webpack_require__("../../../../../src/app/services/iva.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_iva__ = __webpack_require__("../../../../../src/app/models/iva.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IvaComponent = (function () {
    function IvaComponent(_route, _router, _usuarioService, _ivaService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._ivaService = _ivaService;
        this._uploadService = _uploadService;
        this.title = 'GESTION IVA';
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_iva__["a" /* Iva */]('', 0, 0);
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_6__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
    }
    IvaComponent.prototype.ngOnInit = function () {
    };
    IvaComponent.prototype.getAll = function () {
        var _this = this;
        this._ivaService.getAll().subscribe(function (response) {
            _this.listado = response.ivas;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    IvaComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_iva__["a" /* Iva */]('', 0, 0);
        this.displayDialog = true;
    };
    IvaComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this._ivaService.update(this.token, this.actual).subscribe(function (response) {
            if (response.iva) {
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_iva__["a" /* Iva */]('', 0, 0);
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + JSON.stringify(response));
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_iva__["a" /* Iva */]('', 0, 0);
        this.displayDialog = false;
    };
    IvaComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            this._ivaService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_iva__["a" /* Iva */]('', 0, 0);
                    _this.getAll();
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this._ivaService.update(this.token, this.actual).subscribe(function (response) {
                if (response.iva) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_iva__["a" /* Iva */]('', 0, 0);
                    _this.getAll();
                }
                else {
                    console.log("OBJ _id: error" + JSON.stringify(response));
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_iva__["a" /* Iva */]('', 0, 0);
        this.displayDialog = false;
        //this.listado = listado;
    };
    IvaComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    IvaComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_iva__["a" /* Iva */]('', 0, 0);
        this.displayDialog = false;
    };
    IvaComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
    };
    IvaComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', 0, 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    IvaComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    IvaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-edit',
            template: __webpack_require__("../../../../../src/app/admin/components/iva/iva.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_iva_service__["a" /* IvaService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_iva_service__["a" /* IvaService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]])
    ], IvaComponent);
    return IvaComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(nombre, valor, borrado) {
        this.nombre = nombre;
        this.valor = valor;
        this.borrado = borrado;
    }
    return PrimeObj;
}());


/***/ }),

/***/ "../../../../../src/app/admin/components/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>USUARIOS</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO USUARIOS\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"surname\" header=\"Apellido\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"name\" header=\"Nombre\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"email\" header=\"Email\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"role\" header=\"Rol\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\" [style]=\"{ 'overflow': 'hidden',  'white-space': 'nowrap',  'text-overflow': 'ellipsis'}\"\r\n                filterMatchMode=\"contains\">\r\n\r\n\r\n      </p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n<form [formGroup]=\"frm\">\r\n\r\n  <p-dialog header=\"USUARIO Detalles\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n            [modal]=\"true\" width=\"1000\">\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\" ng-controller=\"formCtrl\">\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\"><label for=\"rol\">Rol *</label></div>\r\n        <div class=\"ui-grid-col-4\">\r\n\r\n          <p-multiSelect id=\"rol\" [options]=\"roles\" [(ngModel)]=\"actual.role\" [panelStyle]=\"{minWidth:'12em'}\"\r\n                         [filter]=\"false\" formControlName=\"rol\"></p-multiSelect>\r\n\r\n          <p>Selected Roles: {{actual.role}}</p>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\"><label for=\"apellido\">Apellido *</label></div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <input pInputText name=\"apellido\" id=\"apellido\" [(ngModel)]=\"actual.surname\"\r\n                 formControlName=\"apellido\" placeholder=\"Requerido\" required/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\"><label for=\"nombre\">Nombre *</label></div>\r\n        <div class=\"ui-grid-col-4\"><input pInputText id=\"nombre\" [(ngModel)]=\"actual.name\"\r\n                                          formControlName=\"nombre\" placeholder=\"Requerido\"/></div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\"><label for=\"email\">Email *</label></div>\r\n        <div class=\"ui-grid-col-4\"><input pInputText id=\"email\" [(ngModel)]=\"actual.email\" type=\"email\"\r\n                                          formControlName=\"email\" placeholder=\"Requerido\"/></div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\"><label for=\"password\">Password *</label></div>\r\n        <div class=\"ui-grid-col-4\"><input pInputText type=\"password\" id=\"password\" [(ngModel)]=\"actual.password\"\r\n                                          formControlName=\"password\" placeholder=\"Requerido - Min (4)\"/>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <p-footer>\r\n      <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\"\r\n                [disabled]=\"!frm.valid\"></button>\r\n        <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n                class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n        <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n      </div>\r\n    </p-footer>\r\n  </p-dialog>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api__ = __webpack_require__("../../../../primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListComponent = (function () {
    function ListComponent(_route, _router, _usuarioService, fb, messageService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this.fb = fb;
        this.messageService = messageService;
        this.title = 'Usuarios';
        this.numbers = new Array(10);
        this.selectedRoles = [];
        this.actual = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', 0);
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        //this.actual = this.identity;
        this.roles = [
            { label: "ROLE_ADMIN", value: "ROLE_ADMIN" },
            { label: "ROLE_VENDEDOR", value: "ROLE_VENDEDOR" },
            { label: "ROLE_FABRICACION", value: "ROLE_FABRICACION" },
            { label: "ROLE_COLOCACION", value: "ROLE_COLOCACION" },
            { label: "ROLE_INSTALACION", value: "ROLE_INSTALACION" }
        ];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.frm = this.fb.group({
            'rol': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])),
            'apellido': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(4)])),
            'nombre': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(4)])),
            'email': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].email])),
            'password': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(4)]))
        });
    };
    ListComponent.prototype.getAll = function () {
        var _this = this;
        this._usuarioService.getAll().subscribe(function (response) {
            _this.listado = response.users;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    ListComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', 0);
        this.displayDialog = true;
    };
    ListComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this._usuarioService.updateUserPassword(this.token, this.actual).subscribe(function (response) {
            if (response) {
                _this.status = "success";
                _this.getAll();
                //listado[this.findSelectedIndex()] = this.actual;
                _this.actual = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', 0);
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Información actualizada' });
            }
            else {
                console.log("OBJ _id: error" + JSON.stringify(response));
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', 0);
        this.displayDialog = false;
    };
    ListComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            this._usuarioService.register(this.actual).subscribe(function (response) {
                if (response) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', 0);
                    _this.getAll();
                    _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Información ingresada' });
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            console.log("to save: " + JSON.stringify(this.actual));
            this._usuarioService.updateUserPassword(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    _this.status = "success";
                    _this.getAll();
                    //listado[this.findSelectedIndex()] = this.actual;
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', 0);
                    _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Información actualizada' });
                }
                else {
                    console.log("OBJ _id: error" + JSON.stringify(response));
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', 0);
        this.displayDialog = false;
        //this.listado = listado;
    };
    ListComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    ListComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', 0);
        this.displayDialog = false;
    };
    ListComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.actual.password = "aaaa";
        this.displayDialog = true;
    };
    ListComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', '', '', '', '', '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    ListComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-list',
            template: __webpack_require__("../../../../../src/app/admin/components/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/components/list/list.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_api__["MessageService"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4_primeng_api__["MessageService"]])
    ], ListComponent);
    return ListComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(_id, name, surname, email, password, role, image, borrado) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
        this.borrado = borrado;
    }
    return PrimeObj;
}());


/***/ }),

/***/ "../../../../../src/app/admin/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-2\">\r\n  <h4>{{title}}</h4>\r\n  <div class=\"sidebar-admin\" data-example-id=\"sample-nav-stacked\">\r\n    <ul class=\"nav nav-pills nav-stacked nav-pill-stacked-example\">\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['listado']\">Usuarios</a>\r\n      </li>\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['personal']\">Personal</a>\r\n      </li>\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['materiaPrima']\">Materiales</a>\r\n      </li>\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['categoria']\">Categoría Material</a>\r\n      </li>\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['iva']\">Iva</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-lg-10\">\r\n\r\n<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Panel de Administración';
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-main',
            template: __webpack_require__("../../../../../src/app/admin/components/main/main.component.html")
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/components/materiaprima/materiaprima.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n\r\n\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"20\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt >\r\n\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO MATERIA PRIMA\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"descripcion\" header=\"Descripción\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"categoria.nombre\" header=\"Categoría\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"uMedida\" header=\"U. Medida\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"color\" header=\"Color\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"stock\" header=\"Stock\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n    </p-dataTable>>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-dialog header=\"Materia Prima Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"1000\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\" ng-controller=\"formCtrl\">\r\n\r\n    <div class=\"ui-grid-col-6\">\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"descripcion\">Descripción *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <input pInputText name=\"descripcion\" id=\"descripcion\" [(ngModel)]=\"actual.descripcion\" placeholder=\"Requerido\" required/>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"uMedida\">Categoría</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <p-autoComplete [(ngModel)]=\"categoria\" [suggestions]=\"filteredObjSingleCategoria\"\r\n                          (completeMethod)=\"filterSingleCategoria($event)\"\r\n                          field=\"nombre\" [size]=\"30\"\r\n                          placeholder=\"Categoría\" [minLength]=\"1\" [forceSelection]=\"true\">\r\n            <ng-template let-value pTemplate=\"item\">\r\n              <div>{{value.nombre }}</div>\r\n            </ng-template>\r\n          </p-autoComplete>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"uMedida\">U. Medida *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <p-dropdown id=\"uMedida\" [options]=\"unidades\" [(ngModel)]=\"actual.uMedida\"></p-dropdown>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"color\">Color *</label></div>\r\n        <div class=\"ui-grid-col-7\"><input pInputText id=\"color\" [(ngModel)]=\"actual.color\" placeholder=\"Requerido\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"stock\">Stock *</label></div>\r\n        <div class=\"ui-grid-col-7\"><input pInputText id=\"stock\" [(ngModel)]=\"actual.stock\"\r\n                                          pKeyFilter=\"num\" placeholder=\"Requerido\"/>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ui-grid-col-6\">\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-12\">\r\n          <div class=\"image_for_edit\" *ngIf=\"actual.imagen && actual.imagen!='null'\">\r\n            <img src=\"{{url + 'get-image-materiaPrima/' + actual.imagen}}\"/>\r\n          </div>\r\n          <p>\r\n            <label>Imagen:</label>\r\n            <input  type=\"file\" placeholder=\"Subir imagen\" (change)=\"fileChangeEvent($event)\"/>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n              class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/components/materiaprima/materiaprima.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaprimaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_materiaprima_service__ = __webpack_require__("../../../../../src/app/services/materiaprima.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__ = __webpack_require__("../../../../../src/app/models/materiaprima.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_categoriaMaterial_service__ = __webpack_require__("../../../../../src/app/services/categoriaMaterial.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MateriaprimaComponent = (function () {
    function MateriaprimaComponent(_route, _router, _usuarioService, _materiaprimaService, _uploadService, _categoriaMaterialService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._materiaprimaService = _materiaprimaService;
        this._uploadService = _uploadService;
        this._categoriaMaterialService = _categoriaMaterialService;
        this.title = 'GESTION MATERIA PRIMA';
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_7__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
        this.unidades = [
            { label: "Metro", value: "Metro" },
            { label: "Unidad", value: "Unidad" }
        ];
    }
    MateriaprimaComponent.prototype.ngOnInit = function () {
    };
    MateriaprimaComponent.prototype.updateRowGroupMetaData = function () {
        this.rowGroupMetadata = {};
        if (this.listado) {
            for (var i = 0; i < this.listado.length; i++) {
                var rowData = this.listado[i];
                var categoria = rowData.categoria.nombre;
                if (i == 0) {
                    this.rowGroupMetadata[categoria] = { index: 0, size: 1 };
                }
                else {
                    var previousRowData = this.listado[i - 1];
                    var previousRowGroup = previousRowData.categoria.nombre;
                    if (categoria === previousRowGroup)
                        this.rowGroupMetadata[categoria].size++;
                    else
                        this.rowGroupMetadata[categoria] = { index: i, size: 1 };
                }
            }
        }
    };
    MateriaprimaComponent.prototype.onSort = function () {
        this.updateRowGroupMetaData();
    };
    MateriaprimaComponent.prototype.getAll = function () {
        var _this = this;
        this._materiaprimaService.getAll().subscribe(function (response) {
            _this.listado = response.materiaPrimas;
            _this.updateRowGroupMetaData();
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    MateriaprimaComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
        this.displayDialog = true;
    };
    MateriaprimaComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this._materiaprimaService.update(this.token, this.actual).subscribe(function (response) {
            if (response.materiaPrima) {
                _this.status = "success";
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + JSON.stringify(response));
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
        this.displayDialog = false;
    };
    MateriaprimaComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        this.actual.categoria = this.categoria._id;
        if (this.newObj) {
            // funcion save
            if (this.actual.uMedida == '') {
                this.actual.uMedida = 'Metro';
            }
            this._materiaprimaService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    if (_this.filesToUpload.length > 0) {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-materiaPrima/' + response.materiaPrima._id, [], _this.filesToUpload, _this.token, 'imagen')
                            .then(function (result) {
                            _this.status = "success";
                            _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
                            _this.getAll();
                            _this.filesToUpload = new Array();
                        });
                    }
                    else {
                        _this.status = "success";
                        _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
                        _this.getAll();
                    }
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this._materiaprimaService.update(this.token, this.actual).subscribe(function (response) {
                if (response.materiaPrima) {
                    _this.status = "success";
                    if (_this.filesToUpload) {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-materiaPrima/' + response.materiaPrima._id, [], _this.filesToUpload, _this.token, 'imagen')
                            .then(function (result) {
                            _this.getAll();
                            _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
                            _this.filesToUpload = null;
                        });
                    }
                    else {
                        _this.status = "success";
                        _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
                        _this.getAll();
                    }
                }
                else {
                    console.log("OBJ _id: error" + JSON.stringify(response));
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
        this.displayDialog = false;
        //this.listado = listado;
    };
    MateriaprimaComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    MateriaprimaComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_materiaprima__["a" /* Materiaprima */]('', '', '', 0, '', 0, '');
        this.displayDialog = false;
    };
    MateriaprimaComponent.prototype.filterSingleCategoria = function (event) {
        var _this = this;
        var query = event.query;
        this._categoriaMaterialService.getAll().subscribe(function (objs) {
            _this.filteredObjSingleCategoria = _this.filterCategoria(query, objs.categorias);
        });
    };
    MateriaprimaComponent.prototype.filterCategoria = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.nombre.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    //FIN AUTOCOMPLETAR CATEGORIA ******************************************************************************************
    MateriaprimaComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
        this.categoria = this.actual.categoria;
    };
    MateriaprimaComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', '', 0, '', 0, '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    MateriaprimaComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    MateriaprimaComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    MateriaprimaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-edit',
            template: __webpack_require__("../../../../../src/app/admin/components/materiaprima/materiaprima.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_materiaprima_service__["a" /* MateriaprimaService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_6__services_categoriaMaterial_service__["a" /* CategoriaMaterialService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_materiaprima_service__["a" /* MateriaprimaService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_6__services_categoriaMaterial_service__["a" /* CategoriaMaterialService */]])
    ], MateriaprimaComponent);
    return MateriaprimaComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(descripcion, uMedida, color, stock, imagen, borrado, categoria) {
        this.descripcion = descripcion;
        this.uMedida = uMedida;
        this.color = color;
        this.stock = stock;
        this.imagen = imagen;
        this.borrado = borrado;
        this.categoria = categoria;
    }
    return PrimeObj;
}());


/***/ }),

/***/ "../../../../../src/app/admin/components/personal/personal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO USUARIOS\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"ci\" header=\"Ci\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"apellido\" header=\"Apellido\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"nombre\" header=\"Nombre\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"telefono\" header=\"Teléfono\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n<p-toast [style]=\"{marginTop: '80px'}\" ></p-toast>\r\n\r\n<form [formGroup]=\"frm\">\r\n  <p-dialog header=\"Personal Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n            [modal]=\"true\" width=\"1000\">\r\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\" ng-controller=\"formCtrl\">\r\n      <div class=\"ui-grid-col-6\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"ci\">C.I.: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"apellido\" id=\"ci\" [(ngModel)]=\"actual.ci\"\r\n                   formControlName=\"ci\" pKeyFilter=\"num\" placeholder=\"Requerido - Min(10)\" required/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"apellido\">Apellido *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"apellido\" id=\"apellido\" [(ngModel)]=\"actual.apellido\"\r\n                   formControlName=\"apellido\" placeholder=\"Requerido\" required/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"nombre\">Nombre *</label></div>\r\n          <div class=\"ui-grid-col-7\"><input pInputText id=\"nombre\" [(ngModel)]=\"actual.nombre\"\r\n                                            formControlName=\"nombre\" placeholder=\"Requerido\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"email\">Email *</label></div>\r\n          <div class=\"ui-grid-col-7\"><input pInputText id=\"email\" [(ngModel)]=\"actual.email\" pKeyFilter=\"email\" required\r\n                                            formControlName=\"email\" placeholder=\"Requerido @correo\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"fono\">Telefono *</label></div>\r\n          <div class=\"ui-grid-col-7\"><input pInputText id=\"fono\" [(ngModel)]=\"actual.telefono\"\r\n                                            formControlName=\"fono\" pKeyFilter=\"num\" placeholder=\"Requerido - Min(9)\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-col-6\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-12\">\r\n            <div class=\"image_for_edit\" *ngIf=\"actual.imagen && actual.imagen!='null'\">\r\n              <img src=\"{{url + 'get-image-personal/' + actual.imagen}}\"/>\r\n            </div>\r\n            <p>\r\n              <label>Fotografía:</label>\r\n              <input type=\"file\" placeholder=\"Subir imagen\" (change)=\"fileChangeEvent($event)\"/>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <p-footer>\r\n      <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n        <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\"\r\n                [disabled]=\"!frm.valid\"></button>\r\n        <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n                class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n        <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n      </div>\r\n    </p-footer>\r\n\r\n  </p-dialog>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/components/personal/personal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_personal_service__ = __webpack_require__("../../../../../src/app/services/personal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_personal__ = __webpack_require__("../../../../../src/app/models/personal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api__ = __webpack_require__("../../../../primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PersonalComponent = (function () {
    function PersonalComponent(_route, _router, _usuarioService, _personalService, _uploadService, fb, messageService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._personalService = _personalService;
        this._uploadService = _uploadService;
        this.fb = fb;
        this.messageService = messageService;
        this.title = 'GESTION PERSONAL';
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_7__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.frm = this.fb.group({
            'ci': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].minLength(10)])),
            'apellido': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].minLength(6)])),
            'nombre': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].minLength(6)])),
            'email': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].email])),
            'fono': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].minLength(9)]))
        });
    };
    PersonalComponent.prototype.getAll = function () {
        var _this = this;
        this._personalService.getAll().subscribe(function (response) {
            _this.listado = response.personals;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    PersonalComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
        this.displayDialog = true;
    };
    PersonalComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this._personalService.update(this.token, this.actual).subscribe(function (response) {
            if (response.personal) {
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
                _this.getAll();
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Información actualizada' });
            }
            else {
                console.log("OBJ _id: error" + JSON.stringify(response));
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
        this.displayDialog = false;
    };
    PersonalComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            this._personalService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    if (_this.filesToUpload.length > 0) {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-personal/' + response.personal._id, [], _this.filesToUpload, _this.token, 'imagen')
                            .then(function (result) {
                            _this.status = "success";
                            _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
                            _this.getAll();
                            _this.filesToUpload = new Array();
                        });
                    }
                    else {
                        _this.status = "success";
                        _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
                        _this.getAll();
                        _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Información ingresada' });
                    }
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this._personalService.update(this.token, this.actual).subscribe(function (response) {
                if (response.personal) {
                    _this.status = "success";
                    if (_this.filesToUpload) {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-personal/' + response.personal._id, [], _this.filesToUpload, _this.token, 'imagen')
                            .then(function (result) {
                            _this.getAll();
                            _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
                            _this.filesToUpload = null;
                        });
                    }
                    else {
                        _this.status = "success";
                        _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
                        _this.getAll();
                        _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Información actualizada' });
                    }
                }
                else {
                    console.log("OBJ _id: error" + JSON.stringify(response));
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
        this.displayDialog = false;
        //this.listado = listado;
    };
    PersonalComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    PersonalComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_personal__["a" /* Personal */]('', '', '', '', '', '', '', 0);
        this.displayDialog = false;
    };
    PersonalComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
    };
    PersonalComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', '', '', '', '', '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    PersonalComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    PersonalComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    PersonalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-edit',
            template: __webpack_require__("../../../../../src/app/admin/components/personal/personal.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_personal_service__["a" /* PersonalService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_5_primeng_api__["MessageService"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_personal_service__["a" /* PersonalService */],
            __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5_primeng_api__["MessageService"]])
    ], PersonalComponent);
    return PersonalComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(ci, apellido, nombre, direccion, telefono, email, imagen, borrado) {
        this.ci = ci;
        this.apellido = apellido;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.imagen = imagen;
        this.borrado = borrado;
    }
    return PrimeObj;
}());


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"navigation col-lg-12\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-header\">\n        <a [routerLink]=\"['/home']\" class=\"navbar-brand \">{{title}}</a>\n      </div>\n\n      <div class=\"nav navbar-nav \">\n\n        <li>\n\n          <a [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\" >\n            <span class=\"glyphicon glyphicon-home\"></span>\n            Inicio\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/vendedor-panel']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n            Vendedor\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/fabricacion-panel']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-wrench\"></span>\n            Fabricación\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/colocacion-panel']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-share\"></span>\n            Colocación\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/instalacion-panel']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-check\"></span>\n            Instalación\n          </a>\n        </li>\n\n        <li>\n          <a [routerLink]=\"['/usuario-panel']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-signal\"></span>\n            Usuarios\n          </a>\n        </li>\n\n        <li class=\"hidden\">\n          <span *ngIf=\"emailContacto\">\n            <strong>Email de Contato:</strong> {{emailContacto}}\n            <button (click)=\"borrarEmail()\">Eliminar mailContacto</button>\n          </span>\n        </li>\n\n      </div>\n\n      <div class=\"nav navbar-nav navbar-right\" *ngIf=\"!identity\">\n        <li>\n          <a [routerLink]=\"['/registro']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n            Registro\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-log-in\"></span>\n            Login\n          </a>\n        </li>\n      </div>\n\n      <div class=\"nav navbar-nav navbar-right\" *ngIf=\"identity\">\n        <li class=\"avatar\">\n          <img src=\"{{url + 'get-image-file/' + identity.image}}\" />\n        </li>\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n            {{identity.name}} <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li *ngIf=\"identity && checkAdmin\">\n              <a [routerLink] = \"['/admin-panel']\">\n                <span class=\"glyphicon glyphicon-tasks\"></span>\n                Administración\n              </a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/mis-datos']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n                Mis datos\n              </a>\n            </li>\n            <li>\n              <a class=\"pointer\" (click)=\"logout()\">\n                <span class=\"glyphicon glyphicon-log-out\"></span>\n                Salir\n              </a>\n            </li>\n\n          </ul>\n        </li>\n      </div>\n\n    </div>\n  </nav>\n\n</div>\n\n\n<div class=\"col-lg-11\">\n  <router-outlet></router-outlet>\n</div>\n\n\n<!--\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n-->\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_userService, _route, _router) {
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this.title = 'SGLASS';
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.checkAdmin = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        if (this.identity != null) {
            var listaRol = [];
            var cont = void 0;
            listaRol = this.identity.role;
            this.checkAdmin = false;
            for (var i = 0; i < listaRol.length; i++) {
                if (this.identity && listaRol[i] == 'ROLE_ADMIN') {
                    this.checkAdmin = true;
                }
            }
        }
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        if (this.identity != null) {
            var listaRol = [];
            var cont = void 0;
            listaRol = this.identity.role;
            this.checkAdmin = false;
            for (var i = 0; i < listaRol.length; i++) {
                if (this.identity && listaRol[i] == 'ROLE_ADMIN') {
                    this.checkAdmin = true;
                }
            }
        }
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.identity = null;
        this.token = null;
        this.checkAdmin = false;
        this._router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__moduloemail_moduloemail_module__ = __webpack_require__("../../../../../src/app/moduloemail/moduloemail.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vendedor_vendedor_module__ = __webpack_require__("../../../../../src/app/vendedor/vendedor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fabricacion_fabricacion_module__ = __webpack_require__("../../../../../src/app/fabricacion/fabricacion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__colocacion_colocacion_module__ = __webpack_require__("../../../../../src/app/colocacion/colocacion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__instalacion_instalacion_module__ = __webpack_require__("../../../../../src/app/instalacion/instalacion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__usuario_usuario_module__ = __webpack_require__("../../../../../src/app/usuario/usuario.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_simple_tiny_simple_tiny_component__ = __webpack_require__("../../../../../src/app/components/simple-tiny/simple-tiny.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_tienda_tienda_component__ = __webpack_require__("../../../../../src/app/components/tienda/tienda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_parques_parques_component__ = __webpack_require__("../../../../../src/app/components/parques/parques.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_animals_animals_component__ = __webpack_require__("../../../../../src/app/components/animals/animals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_keepers_keepers_component__ = __webpack_require__("../../../../../src/app/components/keepers/keepers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/components/user-edit/user-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//modulos ngPRIME










//importar nuestro nuevo modulo







//Componentes











// Servicios
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_tienda_tienda_component__["a" /* TiendaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_parques_parques_component__["a" /* ParquesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_animals_animals_component__["a" /* AnimalsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_keepers_keepers_component__["a" /* KeepersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_simple_tiny_simple_tiny_component__["a" /* SimpleTinyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_user_edit_user_edit_component__["a" /* UserEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7__moduloemail_moduloemail_module__["a" /* ModuloEmailModule */],
                __WEBPACK_IMPORTED_MODULE_8__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__vendedor_vendedor_module__["a" /* VendedorModule */],
                __WEBPACK_IMPORTED_MODULE_10__fabricacion_fabricacion_module__["a" /* FabricacionModule */],
                __WEBPACK_IMPORTED_MODULE_11__colocacion_colocacion_module__["a" /* ColocacionModule */],
                __WEBPACK_IMPORTED_MODULE_12__instalacion_instalacion_module__["a" /* InstalacionModule */],
                __WEBPACK_IMPORTED_MODULE_13__usuario_usuario_module__["a" /* UsuarioModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TabViewModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* appRoutingProviders */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tienda_tienda_component__ = __webpack_require__("../../../../../src/app/components/tienda/tienda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_animals_animals_component__ = __webpack_require__("../../../../../src/app/components/animals/animals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_keepers_keepers_component__ = __webpack_require__("../../../../../src/app/components/keepers/keepers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/components/user-edit/user-edit.component.ts");

// Components








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'tienda', component: __WEBPACK_IMPORTED_MODULE_1__components_tienda_tienda_component__["a" /* TiendaComponent */] },
    { path: 'animals', component: __WEBPACK_IMPORTED_MODULE_2__components_animals_animals_component__["a" /* AnimalsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'keepers', component: __WEBPACK_IMPORTED_MODULE_5__components_keepers_keepers_component__["a" /* KeepersComponent */] },
    { path: 'registro', component: __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'mis-datos', component: __WEBPACK_IMPORTED_MODULE_8__components_user_edit_user_edit_component__["a" /* UserEditComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] } //aplicacion falle
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/colocacion/colocacion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColocacionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_colocador_guard__ = __webpack_require__("../../../../../src/app/services/colocador.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__ = __webpack_require__("../../../../../src/app/colocacion/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_colocar_colocar_component__ = __webpack_require__("../../../../../src/app/colocacion/components/colocar/colocar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//components


//routes
var colocacionRoutes = [
    {
        path: 'colocacion-panel',
        component: __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__["a" /* MainComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_colocador_guard__["a" /* ColocadorGuard */]],
        children: [
            { path: '', redirectTo: 'colocar', pathMatch: 'full' },
            { path: 'colocar', component: __WEBPACK_IMPORTED_MODULE_4__components_colocar_colocar_component__["a" /* ColocarComponent */] }
        ]
    }
];
var ColocacionRoutingModule = (function () {
    function ColocacionRoutingModule() {
    }
    ColocacionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(colocacionRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], ColocacionRoutingModule);
    return ColocacionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/colocacion/colocacion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColocacionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__colocacion_routing_module__ = __webpack_require__("../../../../../src/app/colocacion/colocacion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password__ = __webpack_require__("../../../../primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__ = __webpack_require__("../../../../primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_main_main_component__ = __webpack_require__("../../../../../src/app/colocacion/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_colocar_colocar_component__ = __webpack_require__("../../../../../src/app/colocacion/components/colocar/colocar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_colocador_guard__ = __webpack_require__("../../../../../src/app/services/colocador.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Imports modulos





//modulos ngPRIME













//prime icons fa fa-

//components


//Guards


//Decorar ngModule para cargar los componentes y la configuracion de los modulos
var ColocacionModule = (function () {
    function ColocacionModule() {
    }
    ColocacionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__colocacion_routing_module__["a" /* ColocacionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["AutoCompleteModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_colocar_colocar_component__["a" /* ColocarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_colocar_colocar_component__["a" /* ColocarComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_12__services_colocador_guard__["a" /* ColocadorGuard */]
            ]
        })
    ], ColocacionModule);
    return ColocacionModule;
}());



/***/ }),

/***/ "../../../../../src/app/colocacion/components/colocar/colocar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO PROCESOS COLOCACION\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"pedido.pedido.pedido.cliente.apellido\"  header=\"Cliente\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n      </p-column>\r\n      <p-column field=\"pedido.pedido.pedido.cliente.nombre\"  header=\"Cliente\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n      </p-column>\r\n      <p-column field=\"pedido.pedido.pedido.descripcion\" header=\"Pedido\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"pedido.pedido.modelo.nombre\" header=\"Modelo\" [sortable]=\"true\" [filter]=\"true\"\r\n                filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"pedido.pedido.cantidad\" header=\"Cant.\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n      <p-column field=\"estadoGeneral\" header=\"Estado\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-dialog header=\"Fabricar Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"1000\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\" ng-controller=\"formCtrl\">\r\n\r\n    <div class=\"6\">\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"></div>\r\n        <div class=\"ui-grid-col-7\" style=\"text-align: left\" align=\"left\">\r\n          (Orden: {{fabricacion ? fabricacion.pedido.pedido.descripcion||fabricacion : ''}})\r\n          (Model.: {{fabricacion ? fabricacion.pedido.modelo.nombre||fabricacion : ''}})\r\n          <br/>\r\n          (Cant.: {{fabricacion ? fabricacion.pedido.cantidad||fabricacion : ''}})\r\n          (Dim.: {{fabricacion ? fabricacion.pedido.ancho||fabricacion : ''}} x {{fabricacion ? fabricacion.pedido.alto||fabricacion : ''}} m.)\r\n          <br/>\r\n          (Clie.: {{fabricacion ? fabricacion.pedido.pedido.cliente.apellido||fabricacion : ''}} {{fabricacion ? fabricacion.pedido.pedido.cliente.nombre||fabricacion : ''}})\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label>Pedido: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <p-autoComplete [(ngModel)]=\"fabricacion\" [suggestions]=\"filteredObjSinglePedido\"\r\n                          (completeMethod)=\"filterSinglePedido($event)\"\r\n                          field=\"pedido.pedido.descripcion\" [size]=\"30\"\r\n                          placeholder=\"Pedido\" [minLength]=\"1\" [forceSelection]=\"true\">\r\n            <ng-template let-value pTemplate=\"item\">\r\n              <div>{{value.pedido.pedido.descripcion }} -- {{value.pedido.modelo.nombre }}\r\n                ({{value.pedido.ancho }} x {{value.pedido.alto}} m.) Cant.: {{value.pedido.cantidad }} -- {{value.pedido.pedido.cliente.apellido }} {{value.pedido.pedido.cliente.nombre }}\r\n              </div>\r\n            </ng-template>\r\n          </p-autoComplete>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label>Responsable: *</label></div>\r\n        <div class=\"ui-grid-col-7\" style=\"text-align: left\" >{{responsable ? responsable.surname||responsable :\r\n          ''}}\r\n          {{responsable ?\r\n          responsable.name||responsable : ''}}\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label>Estado General: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <p-dropdown id=\"estado\" [options]=\"estadoGeneral\" [(ngModel)]=\"actual.estadoGeneral\"></p-dropdown>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <hr/>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-5\" style=\"padding-right: 10px\">\r\n        <p-dataTable [value]=\"listadoEstado\" selectionMode=\"single\" [(selection)]=\"selectedEstado\"\r\n                     (onRowSelect)=\"onRowSelectEstado($event)\" [paginator]=\"true\" rows=\"5\" [responsive]=\"true\"\r\n                     sortField=\"fecha\" [sortOrder]=\"-1\">\r\n          <p-header>\r\n            Estados\r\n            <div class=\"ui-helper-clearfix\" style=\"width:25%\">\r\n              <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAddEstado()\"\r\n                      label=\"Nuevo\"></button>\r\n            </div>\r\n          </p-header>\r\n\r\n          <p-column field=\"fecha\" header=\"Fecha (d/m/y)\" [sortable]=\"true\">\r\n            <ng-template let-row=\"rowData\" pTemplate=\"body\">\r\n              {{row.fecha | date:'dd/MM/yy'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"descripcion\" header=\"Estado\" [sortable]=\"true\"></p-column>\r\n        </p-dataTable>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n              class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<p-dialog header=\"Estado Detalle\" [(visible)]=\"displayDialogEstado\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"500\" height=\"400\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"estados\">\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-3\"><label for=\"descripcionEstado\">Estado</label></div>\r\n      <div class=\"ui-grid-col-9\"><input pInputText id=\"descripcionEstado\" [(ngModel)]=\"estados.descripcion\"/></div>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-row\" style=\"height: 250px\">\r\n      <div class=\"ui-grid-col-3\"><label>Fecha: *</label></div>\r\n      <div class=\"ui-grid-col-9\">\r\n        <p-calendar [(ngModel)]=\"estados.fecha\" [showIcon]=\"true\" [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\" yearRange=\"1940:2070\" [locale]=\"es\" dateFormat=\"mm/dd/yy\"></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"deleteEstado()\" label=\"Eliminar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveEstado()\" label=\"Guardar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/colocacion/components/colocar/colocar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColocarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_colocar_service__ = __webpack_require__("../../../../../src/app/services/colocar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_colocar__ = __webpack_require__("../../../../../src/app/models/colocar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_datePipe__ = __webpack_require__("../../../../../src/app/pipes/datePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_pedido_service__ = __webpack_require__("../../../../../src/app/services/pedido.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_personal_service__ = __webpack_require__("../../../../../src/app/services/personal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_materiaprima_service__ = __webpack_require__("../../../../../src/app/services/materiaprima.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_pedidoDetalle_service__ = __webpack_require__("../../../../../src/app/services/pedidoDetalle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_fabricar_service__ = __webpack_require__("../../../../../src/app/services/fabricar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ColocarComponent = (function () {
    function ColocarComponent(_route, _router, _usuarioService, _colocarService, _uploadService, _pedidoService, _personalService, _fabricarService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._colocarService = _colocarService;
        this._uploadService = _uploadService;
        this._pedidoService = _pedidoService;
        this._personalService = _personalService;
        this._fabricarService = _fabricarService;
        this.title = 'GESTION COLOCAR';
        this.listadoEstado = [];
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_colocar__["a" /* Colocar */]('', '', '', [], 0, '');
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_6__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
        this.estadoGeneral = [
            { label: "Proceso", value: "Proceso" },
            { label: "Finalizado", value: "Finalizado" },
            { label: "Paralizado", value: "Paralizado" }
        ];
    }
    ColocarComponent.prototype.ngOnInit = function () {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            today: 'Hoy',
            clear: 'Borrar',
            dateFormat: 'mm/dd/yy'
        };
    };
    ColocarComponent.prototype.getAll = function () {
        var _this = this;
        this._colocarService.getAll().subscribe(function (response) {
            _this.listado = response.colocacions;
            console.log("colocacions: " + JSON.stringify(_this.listado));
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    ColocarComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_colocar__["a" /* Colocar */]('', '', '', [], 0, '');
        this.displayDialog = true;
        this.fabricacion = null;
        this.responsable = this.identity;
        this.listadoEstado = [];
    };
    ColocarComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this.actual.pedido = this.fabricacion._id;
        this.actual.responsable = this.responsable._id;
        this.actual.estado = this.listadoEstado;
        this._colocarService.update(this.token, this.actual).subscribe(function (response) {
            if (response.colocacion) {
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_colocar__["a" /* Colocar */]('', '', '', [], 0, '');
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + _this.actual);
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_colocar__["a" /* Colocar */]('', '', '', [], 0, '');
        this.displayDialog = false;
    };
    ColocarComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            if (this.actual.estadoGeneral == '') {
                this.actual.estadoGeneral = "Proceso";
            }
            this.actual.pedido = this.fabricacion._id;
            this.actual.responsable = this.responsable._id;
            this.actual.estado = this.listadoEstado;
            this._colocarService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_colocar__["a" /* Colocar */]('', '', '', [], 0, '');
                    _this.getAll();
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this.actual.pedido = this.fabricacion._id;
            this.actual.responsable = this.responsable._id;
            this.actual.estado = this.listadoEstado;
            this._colocarService.update(this.token, this.actual).subscribe(function (response) {
                if (response.colocacion) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_colocar__["a" /* Colocar */]('', '', '', [], 0, '');
                    _this.getAll();
                }
                else {
                    console.log("OBJ _id: error" + _this.actual);
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_colocar__["a" /* Colocar */]('', '', '', [], 0, '');
        this.displayDialog = false;
        //this.listado = listado;
    };
    ColocarComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    ColocarComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_colocar__["a" /* Colocar */]('', '', '', [], 0, '');
        this.displayDialog = false;
    };
    ColocarComponent.prototype.filterSinglePedido = function (event) {
        var _this = this;
        var query = event.query;
        this._fabricarService.getAllFinalizado().subscribe(function (objs) {
            _this.filteredObjSinglePedido = _this.filterPedido(query, objs.fabricacions);
        });
    };
    ColocarComponent.prototype.filterPedido = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.pedido.pedido.descripcion.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    ColocarComponent.prototype.filterSingleResponsable = function (event) {
        var _this = this;
        var query = event.query;
        this._personalService.getAll().subscribe(function (objs) {
            _this.filteredObjSingleResponsable = _this.filterResponsable(query, objs.personals);
        });
    };
    ColocarComponent.prototype.filterResponsable = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.apellido.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    //FIN AUTOCOMPLETAR RESPONSABLE **************************************************************************************
    //FUNCIONES para ESTADOS**********************************************************************************************
    ColocarComponent.prototype.showDialogToAddEstado = function () {
        this.newObjEstado = true;
        this.estados = new EstadoObj('', '');
        this.displayDialogEstado = true;
    };
    ColocarComponent.prototype.saveEstado = function () {
        var listadoEstado = this.listadoEstado.slice();
        if (this.newObjEstado)
            listadoEstado.push(this.estados);
        else
            listadoEstado[this.findSelectedIndexEstado()] = this.estados;
        this.listadoEstado = listadoEstado;
        this.estados = new EstadoObj('', '');
        this.displayDialogEstado = false;
    };
    ColocarComponent.prototype.deleteEstado = function () {
        var index = this.findSelectedIndexEstado();
        this.listadoEstado = this.listadoEstado.filter(function (val, i) { return i != index; });
        this.estados = null;
        this.displayDialogEstado = false;
    };
    ColocarComponent.prototype.onRowSelectEstado = function (event) {
        this.newObjEstado = false;
        var datePipe = new __WEBPACK_IMPORTED_MODULE_7__pipes_datePipe__["a" /* dateFormatPipe */]();
        event.data['fecha'] = datePipe.transform(event.data['fecha']);
        this.estados = this.cloneObjEstado(event.data);
        this.displayDialogEstado = true;
    };
    ColocarComponent.prototype.cloneObjEstado = function (obj) {
        var actual = new EstadoObj('', '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    ColocarComponent.prototype.findSelectedIndexEstado = function () {
        return this.listadoEstado.indexOf(this.selectedEstado);
    };
    //FIN FUNCIONES ESTADOS***********************************************************************************************
    ColocarComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
        this.fabricacion = this.actual.pedido;
        this.responsable = this.actual.responsable;
        this.listadoEstado = this.actual.estado;
    };
    ColocarComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', '', [], 0, '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    ColocarComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    ColocarComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    ColocarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'colocacion-edit',
            template: __webpack_require__("../../../../../src/app/colocacion/components/colocar/colocar.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_colocar_service__["a" /* ColocarService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_8__services_pedido_service__["a" /* PedidoService */],
                __WEBPACK_IMPORTED_MODULE_9__services_personal_service__["a" /* PersonalService */],
                __WEBPACK_IMPORTED_MODULE_10__services_materiaprima_service__["a" /* MateriaprimaService */],
                __WEBPACK_IMPORTED_MODULE_11__services_pedidoDetalle_service__["a" /* PedidoDetalleService */],
                __WEBPACK_IMPORTED_MODULE_12__services_fabricar_service__["a" /* FabricarService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_colocar_service__["a" /* ColocarService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_8__services_pedido_service__["a" /* PedidoService */],
            __WEBPACK_IMPORTED_MODULE_9__services_personal_service__["a" /* PersonalService */],
            __WEBPACK_IMPORTED_MODULE_12__services_fabricar_service__["a" /* FabricarService */]])
    ], ColocarComponent);
    return ColocarComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(pedido, responsable, estadoGeneral, estado, borrado, _id) {
        this.pedido = pedido;
        this.responsable = responsable;
        this.estadoGeneral = estadoGeneral;
        this.estado = estado;
        this.borrado = borrado;
        this._id = _id;
    }
    return PrimeObj;
}());
var EstadoObj = (function () {
    function EstadoObj(descripcion, fecha) {
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    return EstadoObj;
}());


/***/ }),

/***/ "../../../../../src/app/colocacion/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-2\">\r\n  <h4>{{title}}</h4>\r\n  <div class=\"sidebar-admin\" data-example-id=\"sample-nav-stacked\">\r\n    <ul class=\"nav nav-pills nav-stacked nav-pill-stacked-example\">\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['colocar']\">Colocar</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-lg-9\">\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/colocacion/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Gestión Zona Colocación';
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'colocacion-main',
            template: __webpack_require__("../../../../../src/app/colocacion/components/main/main.component.html")
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/animals/animals.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-lg-12\" [@fadeIn]>\r\n  <h1>{{title}}</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/animals/animals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("../../../../../src/app/components/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AnimalsComponent = (function () {
    function AnimalsComponent() {
        this.title = 'Animals';
    }
    AnimalsComponent.prototype.ngOnInit = function () {
        console.log('animals.component CARGADO !!');
    };
    AnimalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'animals',
            template: __webpack_require__("../../../../../src/app/components/animals/animals.component.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_1__animation__["a" /* fadeIn */]]
        })
    ], AnimalsComponent);
    return AnimalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var fadeIn = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('fadeIn', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            opacity: 0
            //transform:'translateY(-10%)'
            //transform:' rotate(150deg)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('500ms linear', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            opacity: 1
            //transform:'translateY(0%)'
            //transform:'rotate(0deg)'
        }))
    ])
]);


/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" [@fadeIn]>\r\n  <h1>{{title}}</h1>\r\n\r\n  <main_email></main_email>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("../../../../../src/app/components/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactComponent = (function () {
    function ContactComponent() {
        this.title = 'Contact';
    }
    ContactComponent.prototype.ngOnInit = function () {
        console.log('contact.component CARGADO !!');
    };
    ContactComponent.prototype.guardarEmail = function () {
        localStorage.setItem('emailContacto', this.emailContacto);
        //console.log(localStorage.getItem('emailContacto'));
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_1__animation__["a" /* fadeIn */]]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8 col-lg-offset-2\" [@fadeIn]>\r\n  <div class=\"jumbotron\">\r\n    <p>\r\n      BIENVENIDO\r\n    </p>\r\n    <p align=\"center\">\r\n      <img src=\"assets/images/logo_vidreria.png\"/>\r\n    </p>\r\n    <br/>\r\n    <p align=\"center\">\r\n      <a class=\"btn btn-primary btn-sm\" role=\"button\" [routerLink]=\"['/vendedor-panel']\">ZONA VENDEDOR</a>\r\n      <a class=\"btn btn-info btn-sm\" role=\"button\" [routerLink]=\"['/fabricacion-panel']\">ZONA FABRICACION</a>\r\n      <a class=\"btn btn-warning btn-sm\" role=\"button\" [routerLink]=\"['/colocacion-panel']\">ZONA COLOCACION</a>\r\n      <a class=\"btn btn-success btn-sm\" role=\"button\" [routerLink]=\"['/instalacion-panel']\">ZONA INSTALACION</a>\r\n      <a class=\"btn btn-danger btn-sm\" role=\"button\" [routerLink]=\"['/usuario-panel']\">ZONA USUARIOS</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("../../../../../src/app/components/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'BIENVENIDO a Vidrierieria Ambato';
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('home.component CARGADO !!');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_1__animation__["a" /* fadeIn */]]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/keepers/keepers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" [@fadeIn]>\r\n  <h1>{{title}}</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/keepers/keepers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeepersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("../../../../../src/app/components/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KeepersComponent = (function () {
    function KeepersComponent() {
        this.title = 'Keepers';
    }
    KeepersComponent.prototype.ngOnInit = function () {
        console.log('keepers.component CARGADO !!');
    };
    KeepersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'keepers',
            template: __webpack_require__("../../../../../src/app/components/keepers/keepers.component.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_1__animation__["a" /* fadeIn */]]
        })
    ], KeepersComponent);
    return KeepersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\r\n\r\n  <h3>{{title}}</h3>\r\n\r\n\r\n  <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n    Login correcto !!\r\n  </div>\r\n  <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n    No te has identificado correctamente\r\n  </div>\r\n\r\n\r\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-7\">\r\n    <p>\r\n      <label>Email</label>\r\n      <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" class=\"form-control\" required/>\r\n      <span *ngIf=\"!email.valid && email.touched\">\r\n        Email es obligatorio\r\n      </span>\r\n    </p>\r\n    <p>\r\n      <label>Password</label>\r\n      <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\"\r\n             required/>\r\n      <span *ngIf=\"!password.valid && password.touched\">\r\n        Password es obligatorio\r\n      </span>\r\n    </p>\r\n\r\n    <input type=\"submit\" value=\"Entrar\" class=\"btn btn-success\"/>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by VICTOR OQUENDO on 12/1/2017.
 */




var LoginComponent = (function () {
    function LoginComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Login';
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', ['ROLE_ADMIN'], '', 0);
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login.component CARGADO ....');
        console.log(this._userService.getIdentity());
        console.log(this._userService.getToken());
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // Loguear al usuario cy conseguir el objeto
        this._userService.signup(this.user).subscribe(function (response) {
            _this.identity = response.user;
            if (!_this.identity || !_this.identity._id) {
                alert("Usuario no se ha logueando correctamente");
            }
            else {
                _this.identity.password = '';
                localStorage.setItem('identity', JSON.stringify(_this.identity));
                // Conseguir el token
                _this._userService.signup(_this.user, 'true').subscribe(function (response) {
                    _this.token = response.token;
                    if (_this.token.length <= 0) {
                        alert("Token no generado");
                    }
                    else {
                        localStorage.setItem('token', JSON.stringify(_this.token));
                        _this.status = 'success';
                        _this._router.navigate(['/']);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.status = 'error';
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/parques/parques.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{nombre}}</h2>\r\n<ul>\r\n  <li>Metros:  {{metros}}</li>\r\n  <li>Vegetación: {{vegetacion}}</li>\r\n  <li>\r\n    <span *ngIf=\"abierto==true\">Abierto</span>\r\n    <span *ngIf=\"abierto!=true\">Cerrado</span>\r\n  </li>\r\n</ul>\r\n\r\n<button (click) =\"emitirEvento()\">Mostrar en Padre</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/parques/parques.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParquesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParquesComponent = (function () {
    function ParquesComponent() {
        this.pasameLosDatos = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nombre = 'Parque natural reserva';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = false;
    }
    ParquesComponent.prototype.ngOnChanges = function (changes) {
        //console.log(changes);
        console.log("Existen cambios en las propiedades");
    };
    ParquesComponent.prototype.ngOnInit = function () {
        console.log("Metodo OnInit lanzado");
    };
    ParquesComponent.prototype.ngOnDestroy = function () {
        console.log("Metodo OnDestroy ON");
    };
    ParquesComponent.prototype.emitirEvento = function () {
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ParquesComponent.prototype, "nombre", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('metrosCuadrados'),
        __metadata("design:type", Number)
    ], ParquesComponent.prototype, "metros", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ParquesComponent.prototype, "pasameLosDatos", void 0);
    ParquesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'parques',
            template: __webpack_require__("../../../../../src/app/components/parques/parques.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ParquesComponent);
    return ParquesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\r\n  <h1>{{title}}</h1>\r\n\r\n  <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n    Registro completado correctamente,<a [routerLink]=\"['/login']\">identificate aqui.</a>\r\n  </div>\r\n  <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n    No te has registrado correctamente\r\n  </div>\r\n\r\n\r\n  <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\" class=\"col-lg-10\">\r\n    <p>\r\n      <label>Nombre</label>\r\n      <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" required/>\r\n      <span *ngIf=\"!name.valid && name.touched\">\r\n        El nombre es obligatorio\r\n      </span>\r\n    </p>\r\n\r\n    <p>\r\n      <label>Apellidos</label>\r\n      <input type=\"text\" name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"user.surname\" class=\"form-control\" required/>\r\n      <span *ngIf=\"!surname.valid && surname.touched\">\r\n        Los apellidos son obligatorios\r\n      </span>\r\n    </p>\r\n\r\n    <p>\r\n      <label>Email</label>\r\n      <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" class=\"form-control\" required/>\r\n      <span *ngIf=\"!email.valid && email.touched\">\r\n        El email no es correcto\r\n      </span>\r\n    </p>\r\n\r\n    <p>\r\n      <label>Password</label>\r\n      <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\"\r\n             required/>\r\n      <span *ngIf=\"!password.valid && password.touched\">\r\n        El password no es correcta\r\n      </span>\r\n    </p>\r\n    <input type=\"submit\" value=\"{{title}}\" class=\"btn btn-primary\" [disabled]=\"!registerForm.form.valid\"/>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by VICTOR OQUENDO on 12/1/2017.
 */




var RegisterComponent = (function () {
    function RegisterComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Registro';
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '', 0);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log('register.component CARGADO ....');
    };
    RegisterComponent.prototype.onSubmit = function (registerForm) {
        var _this = this;
        this._userService.register(this.user).subscribe(function (response) {
            if (response.user && response.user._id) {
                console.log("success: " + response.user._id);
                console.log("respones: " + JSON.stringify(response));
                _this.status = "success";
                _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '', 0);
                registerForm.reset();
            }
            else {
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/simple-tiny/simple-tiny.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleTinyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleTinyComponent = (function () {
    function SimpleTinyComponent() {
        this.onEditorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SimpleTinyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyup.emit(content);
                });
            },
        });
    };
    SimpleTinyComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SimpleTinyComponent.prototype, "elementId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SimpleTinyComponent.prototype, "onEditorKeyup", void 0);
    SimpleTinyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'simple-tiny',
            template: "<textarea id=\"{{elementId}}\"></textarea>"
        })
    ], SimpleTinyComponent);
    return SimpleTinyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tienda/tienda.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  color:blue\r\n}\r\nul{\r\n  background: cornflowerblue;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tienda/tienda.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" [@fadeIn]>\r\n  <a class=\"boton_activo btn btn-success\"\r\n     [@marcar]=\"status\" (click)=\"cambiarEstado(status)\">\r\n    <span *ngIf=\"status == 'inactive'\">Boton inactivo</span>\r\n    <span *ngIf=\"status == 'active'\">Boton activado</span>\r\n  </a>\r\n\r\n  <hr/>\r\n  <h4>Animaciones CSS#</h4>\r\n  <a class=\"boton_transiciones\">Transiciones</a>\r\n\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"caja_animada\">\r\n  </div>\r\n\r\n\r\n  <hr/>\r\n  <h4>Utilizar Jquery dentro de angular</h4>\r\n  <button id=\"botonjq\">Mostrar Texto</button>\r\n  <p id=\"textojq\" class=\"alert alert-warning\">\r\n    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or\r\n    information.\r\n  </p>\r\n\r\n  <div id=\"caja\" style=\"border:1px solid black; width: 150px; height: 50px;\">\r\n    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or\r\n    information.\r\n\r\n  </div>\r\n\r\n  <simple-tiny\r\n    [elementId]=\"'descripcionTienda'\"\r\n    (onEditorKeyup)=\"textoRichEditor($event)\"\r\n    >\r\n  </simple-tiny>\r\n\r\n  <hr/>\r\n  PADRE:\r\n  <h1>{{titulo}}</h1>\r\n  <ul>\r\n    <li>Camiseta roja</li>\r\n    <li>Gorra negra</li>\r\n  </ul>\r\n\r\n  <hr/>\r\n  <p>\r\n    Nombre Parque:\r\n    <input type=\"text\" [(ngModel)]=\"nombreParque\" (keyup)=\"mostrarNombre()\"/>\r\n  </p>\r\n\r\n  <p>\r\n    Result: {{nombreParque}}\r\n  </p>\r\n\r\n  <div *ngIf=\"miParque\">\r\n    <h4>Datos desde el Hijo</h4>\r\n    <ol>\r\n      <li>{{miParque.nombre}}</li>\r\n      <li>{{miParque.metros}}</li>\r\n      <li>{{miParque.vegetacion}}</li>\r\n      <li>{{miParque.abierto}}</li>\r\n    </ol>\r\n  </div>\r\n  <hr/>\r\n\r\n  <parques [nombre]=\"'defecto nombre'\"\r\n           [metrosCuadrados]=\"456\"\r\n           (pasameLosDatos)=\"verDatosParque($event)\"\r\n    ></parques>\r\n  <p *ngIf=\"nombreParque\">\r\n    HIJO:\r\n\r\n    <parques [nombre]=\"nombreParque\"\r\n             [metrosCuadrados]=\"558\"\r\n             (pasameLosDatos)=\"verDatosParque($event)\"\r\n      ></parques>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tienda/tienda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiendaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation__ = __webpack_require__("../../../../../src/app/components/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TiendaComponent = (function () {
    function TiendaComponent() {
        this.titulo = 'Esta es la tienda';
        this.status = 'inactive';
    }
    TiendaComponent.prototype.mostrarNombre = function () {
        //console.log(this.nombreParque);
    };
    TiendaComponent.prototype.verDatosParque = function (event) {
        console.log(event);
        this.miParque = event;
    };
    TiendaComponent.prototype.ngOnInit = function () {
        $('#textojq').hide();
        $('#botonjq').click(function () {
            $('#textojq').slideToggle();
        });
        $('#caja').dotdotdot({});
    };
    TiendaComponent.prototype.textoRichEditor = function (content) {
        console.log(content);
    };
    TiendaComponent.prototype.cambiarEstado = function (status) {
        if (this.status == 'inactive') {
            this.status = 'active';
        }
        else {
            this.status = 'inactive';
        }
    };
    TiendaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tienda',
            template: __webpack_require__("../../../../../src/app/components/tienda/tienda.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tienda/tienda.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('marcar', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        border: '5px solid #ccc'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        border: '5px solid yellow',
                        background: 'red',
                        borderRadius: '50px',
                        transform: 'scale(1.2)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('3s linear')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('3s linear'))
                ]),
                __WEBPACK_IMPORTED_MODULE_2__animation__["a" /* fadeIn */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TiendaComponent);
    return TiendaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\r\n    <h1>{{title}}</h1>\r\n\r\n\r\n    <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n        Has actualizado tu infomación correctamente\r\n    </div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n        No has actualizado tus datos\r\n    </div>\r\n\r\n\r\n    <form #userEditForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-10\">\r\n        <p>\r\n            <label>Nombres</label>\r\n            <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" required/>\r\n      <span *ngIf=\"!name.valid && name.touched\">\r\n        El nombre es obligatorio\r\n      </span>\r\n        </p>\r\n\r\n        <p>\r\n            <label>Apellidos</label>\r\n            <input type=\"text\" name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"user.surname\" class=\"form-control\"\r\n                   required/>\r\n      <span *ngIf=\"!surname.valid && surname.touched\">\r\n        Los apellidos son obligatorios\r\n      </span>\r\n        </p>\r\n\r\n        <p>\r\n            <label>Email</label>\r\n            <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" class=\"form-control\" required/>\r\n      <span *ngIf=\"!email.valid && email.touched\">\r\n        El email no es correcto\r\n      </span>\r\n        </p>\r\n\r\n        <div class=\"image_for_edit\" *ngIf=\"user.image && user.image!='null'\">\r\n            <img src=\"{{url + 'get-image-file/' + user.image}}\"/>\r\n        </div>\r\n\r\n        <p>\r\n            <label>Fotografía:</label>\r\n            <input type=\"file\" placeholder=\"Subir imagen\" (change)=\"fileChangeEvent($event)\"/>\r\n        </p>\r\n\r\n        <input type=\"submit\" value=\"{{title}}\" class=\"btn btn-primary\" [disabled]=\"!userEditForm.form.valid\"/>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by VICTOR OQUENDO on 1/21/2018.
 */




var UserEditComponent = (function () {
    function UserEditComponent(_userService, _uploadService) {
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.title = 'Actualizar mis datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = __WEBPACK_IMPORTED_MODULE_1__services_global__["a" /* GLOBAL */].url;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        console.log('user-edit.component.ts CARGADO !');
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.updateUser(this.user).subscribe(function (response) {
            if (!response.user) {
                _this.status = 'error';
            }
            else {
                _this.status = 'success';
                localStorage.setItem('identity', JSON.stringify(_this.user));
                //Subida de imagen
                _this._uploadService.makeFileRequest(_this.url + 'upload-image-user/' + _this.user._id, [], _this.filesToUpload, _this.token, 'image')
                    .then(function (result) {
                    _this.user.image = result.image;
                    localStorage.setItem('identity', JSON.stringify(_this.user));
                    console.log(_this.user);
                });
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    UserEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-edit',
            template: __webpack_require__("../../../../../src/app/components/user-edit/user-edit.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fabricacion/components/fabricar/fabricar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO PROCESOS FABRICACION\r\n        </div>\r\n      </p-header>\r\n\r\n\r\n      <p-column field=\"pedido.pedido.cliente.apellido\"  header=\"Cliente\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n      </p-column>\r\n      <p-column field=\"pedido.pedido.cliente.nombre\"  header=\"Cliente\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n      </p-column>\r\n      <p-column field=\"pedido.pedido.descripcion\" header=\"Pedido\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"pedido.modelo.nombre\" header=\"Modelo\" [sortable]=\"true\" [filter]=\"true\"\r\n                filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"pedido.cantidad\" header=\"Cant.\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"pedido\" header=\"Dimensión\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n        <ng-template let-col let-obj=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{obj[col.field].ancho}} x {{obj[col.field].alto}} [m]</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"estadoGeneral\" header=\"Estado\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-dialog header=\"Fabricar Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"1000\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\" ng-controller=\"formCtrl\">\r\n\r\n    <div class=\"6\">\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"></div>\r\n        <div class=\"ui-grid-col-7\" style=\"text-align: left\" align=\"right\">\r\n          (Orden: {{pedidoDetalle ? pedidoDetalle.pedido.descripcion||pedidoDetalle : ''}})\r\n          (Model.: {{pedidoDetalle ? pedidoDetalle.modelo.nombre||pedidoDetalle : ''}})\r\n          <br/>\r\n          (Cant.: {{pedidoDetalle ? pedidoDetalle.cantidad||pedidoDetalle : ''}})\r\n          (Dim.: {{pedidoDetalle ? pedidoDetalle.ancho||pedidoDetalle : ''}} x {{pedidoDetalle ? pedidoDetalle.alto||pedidoDetalle : ''}} m.)\r\n          <br/>\r\n          (Clie.: {{pedidoDetalle ? pedidoDetalle.pedido.cliente.apellido||pedidoDetalle : ''}} {{pedidoDetalle ? pedidoDetalle.pedido.cliente.nombre||pedidoDetalle : ''}})\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label>Pedido: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n\r\n          <p-autoComplete [(ngModel)]=\"pedidoDetalle\" [suggestions]=\"filteredObjSinglePedido\"\r\n                          (completeMethod)=\"filterSinglePedido($event)\"\r\n                          field=\"pedido.descripcion\" [size]=\"30\"\r\n                          placeholder=\"Pedido\" [minLength]=\"1\" [forceSelection]=\"true\">\r\n            <ng-template let-value pTemplate=\"item\">\r\n              <div>{{value.pedido.descripcion }} -- {{value.modelo.nombre }}\r\n                ({{value.ancho }} x {{value.alto}} m.) Cant.: {{value.cantidad }} -- {{value.pedido.cliente.apellido }} {{value.pedido.cliente.nombre }}\r\n              </div>\r\n            </ng-template>\r\n          </p-autoComplete>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label>Responsable: *</label></div>\r\n        <div class=\"ui-grid-col-7\" style=\"text-align: left\" >{{responsable ? responsable.surname||responsable :\r\n          ''}}\r\n          {{responsable ?\r\n          responsable.name||responsable : ''}}\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"estadoGeneral\">Estado General: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <p-dropdown id=\"estadoGeneral\" [options]=\"estados_escoger\" [(ngModel)]=\"actual.estadoGeneral\"></p-dropdown>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <hr/>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-5\" style=\"padding-right: 10px\">\r\n        <p-dataTable [value]=\"listadoEstado\" selectionMode=\"single\" [(selection)]=\"selectedEstado\"\r\n                     (onRowSelect)=\"onRowSelectEstado($event)\" [paginator]=\"true\" rows=\"5\" [responsive]=\"true\"\r\n                     sortField=\"fecha\" [sortOrder]=\"-1\">\r\n          <p-header>\r\n            Estados\r\n            <div class=\"ui-helper-clearfix\" style=\"width:25%\">\r\n              <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAddEstado()\"\r\n                      label=\"Nuevo\"></button>\r\n            </div>\r\n          </p-header>\r\n\r\n          <p-column field=\"fecha\" header=\"Fecha (d/m/y)\" [sortable]=\"true\">\r\n            <ng-template let-row=\"rowData\" pTemplate=\"body\">\r\n              {{row.fecha | date:'dd/MM/yy'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"descripcion\" header=\"Estado\" [sortable]=\"true\"></p-column>\r\n        </p-dataTable>\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-col-7\">\r\n        <p-dataTable [value]=\"listadoMaterial\" selectionMode=\"single\" [(selection)]=\"selectedMaterial\"\r\n                     (onRowSelect)=\"onRowSelectMaterial($event)\" [paginator]=\"true\" rows=\"5\" [responsive]=\"true\"\r\n                     sortField=\"fecha\" [sortOrder]=\"-1\">\r\n          <p-header>\r\n            Materiales\r\n            <div class=\"ui-helper-clearfix\" style=\"width:25%\">\r\n              <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAddMaterial()\"\r\n                      label=\"Nuevo\"></button>\r\n            </div>\r\n          </p-header>\r\n          <p-column field=\"materiaPrima.descripcion\" header=\"Material\" [sortable]=\"true\"></p-column>\r\n          <p-column field=\"cantidad\" header=\"Cant.\" [sortable]=\"true\"></p-column>\r\n          <p-column field=\"materiaPrima.uMedida\" header=\"Unid\" [sortable]=\"true\"></p-column>\r\n          <p-column field=\"estado\" header=\"Estado\" [sortable]=\"true\"></p-column>\r\n        </p-dataTable>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n              class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<p-dialog header=\"Estado Detalle\" [(visible)]=\"displayDialogEstado\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"500\" height=\"400\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"estados\">\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-3\"><label for=\"descripcionEstado\">Estado</label></div>\r\n      <div class=\"ui-grid-col-9\"><input pInputText id=\"descripcionEstado\" [(ngModel)]=\"estados.descripcion\"/></div>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-row\" style=\"height: 250px\">\r\n      <div class=\"ui-grid-col-3\"><label>Fecha: *</label></div>\r\n      <div class=\"ui-grid-col-9\">\r\n        <p-calendar [(ngModel)]=\"estados.fecha\" [showIcon]=\"true\" [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\" yearRange=\"1940:2070\" [locale]=\"es\" dateFormat=\"mm/dd/yy\"></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"deleteEstado()\" label=\"Eliminar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveEstado()\" label=\"Guardar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Material Detalle\" [(visible)]=\"displayDialogMaterial\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"500\" >\r\n\r\n\r\n\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"material\">\r\n    <p-messages [(value)]=\"msgs\"></p-messages>\r\n\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-3\"></div>\r\n      <div class=\"ui-grid-col-7\" style=\"text-align: right\" align=\"right\">\r\n        {{materiaPrima ? materiaPrima.descripcion||materiaPrima : ''}}\r\n        ({{materiaPrima ? materiaPrima.color||materiaPrima : ''}})\r\n        (Stock: {{materiaPrima ? materiaPrima.stock||materiaPrima : ''}})\r\n        (img {{materiaPrima ? materiaPrima.imagen||materiaPrima : ''}})\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-3\"><label>Material: *</label></div>\r\n      <div class=\"ui-grid-col-7\">\r\n        <p-autoComplete [(ngModel)]=\"materiaPrima\" [suggestions]=\"filteredObjSingleMateriaPrima\"\r\n                        (completeMethod)=\"filterSingleMateriaPrima($event)\"\r\n                        field=\"descripcion\" [size]=\"30\"\r\n                        placeholder=\"Material\" [minLength]=\"1\" [forceSelection]=\"true\" >\r\n          <ng-template let-value pTemplate=\"item\">\r\n            <div>{{value.descripcion }} {{value.stock }}</div>\r\n          </ng-template>\r\n        </p-autoComplete>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-grid-col-8\">\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"cantMaterial\">Cant.:</label></div>\r\n        <div class=\"ui-grid-col-9\"><input pInputText id=\"cantMaterial\" [(ngModel)]=\"material.cantidad\" pKeyFilter=\"num\"/></div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"estadoMaterial\">Estado.:</label></div>\r\n        <div class=\"ui-grid-col-9\">\r\n          <p-dropdown id=\"estadoMaterial\" [options]=\"estados_materia\" [(ngModel)]=\"material.estado\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-col-4\" style=\"padding-left: 20px\">\r\n      <div class=\"image_for_edit\" *ngIf=\"materiaPrima && materiaPrima.imagen!='null'\">\r\n        <img src=\"{{url + 'get-image-materiaPrima/' + materiaPrima.imagen}}\"/>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"deleteMaterial()\" label=\"Eliminar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveMaterial()\" label=\"Guardar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "../../../../../src/app/fabricacion/components/fabricar/fabricar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabricarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_fabricar_service__ = __webpack_require__("../../../../../src/app/services/fabricar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_fabricar__ = __webpack_require__("../../../../../src/app/models/fabricar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api__ = __webpack_require__("../../../../primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_datePipe__ = __webpack_require__("../../../../../src/app/pipes/datePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_pedido_service__ = __webpack_require__("../../../../../src/app/services/pedido.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_pedidoDetalle_service__ = __webpack_require__("../../../../../src/app/services/pedidoDetalle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_personal_service__ = __webpack_require__("../../../../../src/app/services/personal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_materiaprima_service__ = __webpack_require__("../../../../../src/app/services/materiaprima.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//import {MessageService} from 'primeng/components/common/messageservice';
var FabricarComponent = (function () {
    function FabricarComponent(_route, _router, _usuarioService, _fabricarService, _uploadService, _pedidoService, _personalService, _materiaprimaService, _pedidoDetalleService, messageService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._fabricarService = _fabricarService;
        this._uploadService = _uploadService;
        this._pedidoService = _pedidoService;
        this._personalService = _personalService;
        this._materiaprimaService = _materiaprimaService;
        this._pedidoDetalleService = _pedidoDetalleService;
        this.messageService = messageService;
        this.title = 'GESTION FABRICAR';
        this.listadoEstado = [];
        this.listadoMaterial = [];
        this.listadoMaterialBorrado = [];
        this.msgs = [];
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_fabricar__["a" /* Fabricar */]('', '', 'Proceso', [], [], 0, '');
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_7__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
        this.estados_escoger = [
            { label: "Proceso", value: "Proceso" },
            { label: "Finalizado", value: "Finalizado" },
            { label: "Paralizado", value: "Paralizado" }
        ];
        this.estados_materia = [
            { label: "Suficiente", value: "Suficiente" },
            { label: "Insuficiente", value: "Insuficiente" }
        ];
    }
    FabricarComponent.prototype.ngOnInit = function () {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            today: 'Hoy',
            clear: 'Borrar',
            dateFormat: 'mm/dd/yy'
        };
    };
    FabricarComponent.prototype.getAll = function () {
        var _this = this;
        this._fabricarService.getAll().subscribe(function (response) {
            _this.listado = response.fabricacions;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    FabricarComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_fabricar__["a" /* Fabricar */]('', '', '', [], [], 0, '');
        this.displayDialog = true;
        this.pedidoDetalle = null;
        this.responsable = this.identity;
        this.listadoEstado = [];
        this.listadoMaterial = [];
        this.listadoMaterialBorrado = [];
    };
    FabricarComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this.actual.pedido = this.pedidoDetalle._id;
        this.actual.responsable = this.responsable._id;
        this.actual.estado = this.listadoEstado;
        this.actual.materiales = this.listadoMaterial;
        this._fabricarService.update(this.token, this.actual).subscribe(function (response) {
            if (response.fabricacion) {
                for (var i = 0; i < _this.listadoMaterial.length; i++) {
                    _this.updateStockMateriaPrima(_this.listadoMaterialBorrado[i].materiaPrima, _this.listadoMaterialBorrado[i].cantidad, 1);
                }
                for (var i = 0; i < _this.listadoMaterialBorrado.length; i++) {
                    _this.updateStockMateriaPrima(_this.listadoMaterialBorrado[i].materiaPrima, _this.listadoMaterialBorrado[i].cantidad, 1);
                }
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_fabricar__["a" /* Fabricar */]('', '', '', [], [], 0, '');
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + _this.actual);
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_fabricar__["a" /* Fabricar */]('', '', '', [], [], 0, '');
        this.displayDialog = false;
    };
    FabricarComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            this.actual.estadoGeneral = 'Proceso';
            this.actual.pedido = this.pedidoDetalle._id;
            this.actual.responsable = this.responsable._id;
            this.actual.estado = this.listadoEstado;
            this.actual.materiales = this.listadoMaterial;
            this._fabricarService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    for (var i = 0; i < _this.listadoMaterial.length; i++) {
                        _this.updateStockMateriaPrima(_this.listadoMaterial[i].materiaPrima, _this.listadoMaterial[i].cantidad, 0);
                    }
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_fabricar__["a" /* Fabricar */]('', '', '', [], [], 0, '');
                    _this.getAll();
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this.actual.pedido = this.pedidoDetalle._id;
            this.actual.responsable = this.responsable._id;
            this.actual.estado = this.listadoEstado;
            var listadoMaterialAntiguo_1 = this.actual.materiales;
            this.actual.materiales = this.listadoMaterial;
            this._fabricarService.update(this.token, this.actual).subscribe(function (response) {
                if (response.fabricacion) {
                    for (var i = 0; i < _this.listadoMaterial.length; i++) {
                        var checkObj = _this.checkCambiosStockMaterial(listadoMaterialAntiguo_1, _this.listadoMaterial[i]);
                        console.log('CHEQUEO ' + i + ": " + JSON.stringify(checkObj));
                        //0: material nuevo-- 1: material sin variacion cant-- 2: material con variacion cant
                        if (checkObj.estado == 0) {
                            _this.updateStockMateriaPrima(_this.listadoMaterial[i].materiaPrima, _this.listadoMaterial[i].cantidad, 0);
                        }
                        else if (checkObj.estado == 2) {
                            _this.updateStockMateriaPrima(_this.listadoMaterial[i].materiaPrima, checkObj.dif, 0);
                        }
                    }
                    for (var i = 0; i < _this.listadoMaterialBorrado.length; i++) {
                        _this.updateStockMateriaPrima(_this.listadoMaterialBorrado[i].materiaPrima, _this.listadoMaterialBorrado[i].cantidad, 1);
                    }
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_fabricar__["a" /* Fabricar */]('', '', '', [], [], 0, '');
                    _this.getAll();
                }
                else {
                    console.log("OBJ _id: error" + _this.actual);
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_fabricar__["a" /* Fabricar */]('', '', '', [], [], 0, '');
        this.displayDialog = false;
        //this.listado = listado;
    };
    FabricarComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    FabricarComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_fabricar__["a" /* Fabricar */]('', '', '', [], [], 0, '');
        this.displayDialog = false;
    };
    FabricarComponent.prototype.checkCambiosStockMaterial = function (listM, objM) {
        var res = { estado: "", dif: 0 };
        var estado = 0; //0 material nuevo -- 1 material sin variacion cantidad -- 2 material con variacion cantidad
        var dif = 0;
        for (var i = 0; i < listM.length; i++) {
            if (listM[i].materiaPrima == objM.materiaPrima) {
                if (listM[i].cantidad == objM.cantidad) {
                    estado = 1;
                }
                else {
                    estado = 2;
                    dif = objM.cantidad - listM[i].cantidad;
                }
            }
        }
        res.estado = estado;
        res.dif = dif;
        return res;
    };
    FabricarComponent.prototype.updateStockMateriaPrima = function (idMat, cant, op) {
        //op 0: menorar stock -- op 1: aumentar stock
        var _this = this;
        this._materiaprimaService.get(idMat).subscribe(function (response) {
            if (response.materiaPrima) {
                var objM = response.materiaPrima;
                if (op == 0) {
                    objM.stock = objM.stock - cant;
                }
                else {
                    objM.stock = objM.stock + cant;
                }
                //updatestock ************************************************************
                _this._materiaprimaService.update(_this.token, objM).subscribe(function (response) {
                    if (response.materiaPrima) {
                        _this.status = "success";
                    }
                    else {
                        console.log("OBJ _id: error" + _this.actual);
                        _this.status = "error";
                    }
                }, function (error) {
                    console.log(error);
                });
                //fin ********************************************************************
                _this.status = "success";
            }
            else {
                console.log("OBJ _id: error" + _this.actual);
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
    };
    FabricarComponent.prototype.filterSinglePedido = function (event) {
        var _this = this;
        var query = event.query;
        this._pedidoDetalleService.getAll().subscribe(function (objs) {
            _this.filteredObjSinglePedido = _this.filterPedido(query, objs.pedidoDetalles);
        });
    };
    FabricarComponent.prototype.filterPedido = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.pedido.descripcion.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    FabricarComponent.prototype.filterSingleResponsable = function (event) {
        var _this = this;
        var query = event.query;
        this._personalService.getAll().subscribe(function (objs) {
            _this.filteredObjSingleResponsable = _this.filterResponsable(query, objs.personals);
        });
    };
    FabricarComponent.prototype.filterResponsable = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.apellido.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    FabricarComponent.prototype.filterSingleMateriaPrima = function (event) {
        var _this = this;
        var query = event.query;
        this._materiaprimaService.getAll().subscribe(function (objs) {
            _this.filteredObjSingleMateriaPrima = _this.filterMateriaPrima(query, objs.materiaPrimas);
        });
    };
    FabricarComponent.prototype.filterMateriaPrima = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.descripcion.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    //FIN AUTOCOMPLETAR MATERIA PRIMA ************************************************************************************
    //FUNCIONES para ESTADOS**********************************************************************************************
    FabricarComponent.prototype.showDialogToAddEstado = function () {
        this.newObjEstado = true;
        this.estados = new EstadoObj('', '');
        this.displayDialogEstado = true;
    };
    FabricarComponent.prototype.saveEstado = function () {
        var listadoEstado = this.listadoEstado.slice();
        if (this.newObjEstado)
            listadoEstado.push(this.estados);
        else
            listadoEstado[this.findSelectedIndexEstado()] = this.estados;
        this.listadoEstado = listadoEstado;
        this.estados = new EstadoObj('', '');
        this.displayDialogEstado = false;
    };
    FabricarComponent.prototype.deleteEstado = function () {
        var index = this.findSelectedIndexEstado();
        this.listadoEstado = this.listadoEstado.filter(function (val, i) { return i != index; });
        this.estados = null;
        this.displayDialogEstado = false;
    };
    FabricarComponent.prototype.onRowSelectEstado = function (event) {
        this.newObjEstado = false;
        var datePipe = new __WEBPACK_IMPORTED_MODULE_8__pipes_datePipe__["a" /* dateFormatPipe */]();
        event.data['fecha'] = datePipe.transform(event.data['fecha']);
        this.estados = this.cloneObjEstado(event.data);
        this.displayDialogEstado = true;
    };
    FabricarComponent.prototype.cloneObjEstado = function (obj) {
        var actual = new EstadoObj('', '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    FabricarComponent.prototype.findSelectedIndexEstado = function () {
        return this.listadoEstado.indexOf(this.selectedEstado);
    };
    //FIN FUNCIONES ESTADOS***********************************************************************************************
    //FUNCIONES para MATERIALES*******************************************************************************************
    FabricarComponent.prototype.showDialogToAddMaterial = function () {
        this.newObjMaterial = true;
        this.material = new MaterialObj('', '', '', '');
        this.displayDialogMaterial = true;
        this.materiaPrima = null;
    };
    FabricarComponent.prototype.controlStock = function () {
        if (this.materiaPrima.stock >= this.material.cantidad) {
            return true;
        }
        return false;
    };
    FabricarComponent.prototype.saveMaterial = function () {
        if (this.controlStock()) {
            var listadoMaterial = this.listadoMaterial.slice();
            if (this.newObjMaterial) {
                this.material.materiaPrima = this.materiaPrima;
                this.material.estado = 'Suficiente';
                listadoMaterial.push(this.material);
            }
            else {
                this.material.materiaPrima = this.materiaPrima;
                listadoMaterial[this.findSelectedIndexMaterial()] = this.material;
            }
            this.listadoMaterial = listadoMaterial;
            this.material = new MaterialObj('', '', '', '');
            this.displayDialogMaterial = false;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Advertencia', detail: 'STOCK insuficiente' });
        }
    };
    FabricarComponent.prototype.deleteMaterial = function () {
        var index = this.findSelectedIndexMaterial();
        this.listadoMaterialBorrado = this.selectedMaterial;
        this.listadoMaterial = this.listadoMaterial.filter(function (val, i) { return i != index; });
        this.material = null;
        this.displayDialogMaterial = false;
        console.log("matariales:" + JSON.stringify(this.listadoMaterial));
        console.log("matarialesBORRADOS:" + JSON.stringify(this.listadoMaterialBorrado));
    };
    FabricarComponent.prototype.onRowSelectMaterial = function (event) {
        this.newObjMaterial = false;
        this.material = this.cloneObjMaterial(event.data);
        this.displayDialogMaterial = true;
        this.materiaPrima = this.material.materiaPrima;
        console.log("maPrAux " + JSON.stringify(this.materiaPrima));
    };
    FabricarComponent.prototype.cloneObjMaterial = function (obj) {
        var actual = new MaterialObj('', '', '', '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    FabricarComponent.prototype.findSelectedIndexMaterial = function () {
        return this.listadoMaterial.indexOf(this.selectedMaterial);
    };
    //FIN FUNCIONES MATERIALES********************************************************************************************
    FabricarComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
        this.pedidoDetalle = this.actual.pedido;
        this.responsable = this.actual.responsable;
        this.listadoEstado = this.actual.estado;
        this.listadoMaterial = this.actual.materiales;
        this.listadoMaterialBorrado = [];
    };
    FabricarComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', '', [], [], 0, '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    FabricarComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    FabricarComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    FabricarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fabricacion-edit',
            template: __webpack_require__("../../../../../src/app/fabricacion/components/fabricar/fabricar.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_fabricar_service__["a" /* FabricarService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_9__services_pedido_service__["a" /* PedidoService */],
                __WEBPACK_IMPORTED_MODULE_11__services_personal_service__["a" /* PersonalService */],
                __WEBPACK_IMPORTED_MODULE_12__services_materiaprima_service__["a" /* MateriaprimaService */],
                __WEBPACK_IMPORTED_MODULE_10__services_pedidoDetalle_service__["a" /* PedidoDetalleService */],
                __WEBPACK_IMPORTED_MODULE_5_primeng_api__["MessageService"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_fabricar_service__["a" /* FabricarService */],
            __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_9__services_pedido_service__["a" /* PedidoService */],
            __WEBPACK_IMPORTED_MODULE_11__services_personal_service__["a" /* PersonalService */],
            __WEBPACK_IMPORTED_MODULE_12__services_materiaprima_service__["a" /* MateriaprimaService */],
            __WEBPACK_IMPORTED_MODULE_10__services_pedidoDetalle_service__["a" /* PedidoDetalleService */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_api__["MessageService"]])
    ], FabricarComponent);
    return FabricarComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(pedido, responsable, estadoGeneral, estado, materiales, borrado, _id) {
        this.pedido = pedido;
        this.responsable = responsable;
        this.estadoGeneral = estadoGeneral;
        this.estado = estado;
        this.materiales = materiales;
        this.borrado = borrado;
        this._id = _id;
    }
    return PrimeObj;
}());
var EstadoObj = (function () {
    function EstadoObj(descripcion, fecha) {
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    return EstadoObj;
}());
var MaterialObj = (function () {
    function MaterialObj(materiaPrima, cantidad, uMedida, estado) {
        this.materiaPrima = materiaPrima;
        this.cantidad = cantidad;
        this.uMedida = uMedida;
        this.estado = estado;
    }
    return MaterialObj;
}());


/***/ }),

/***/ "../../../../../src/app/fabricacion/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-2\">\r\n  <h4>{{title}}</h4>\r\n  <div class=\"sidebar-admin\" data-example-id=\"sample-nav-stacked\">\r\n    <ul class=\"nav nav-pills nav-stacked nav-pill-stacked-example\">\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['fabricar']\">Fabricar</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-lg-9\">\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/fabricacion/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Gestión Zona Fabricación';
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fabricacion-main',
            template: __webpack_require__("../../../../../src/app/fabricacion/components/main/main.component.html")
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fabricacion/fabricacion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabricacionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fabricador_guard__ = __webpack_require__("../../../../../src/app/services/fabricador.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__ = __webpack_require__("../../../../../src/app/fabricacion/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fabricar_fabricar_component__ = __webpack_require__("../../../../../src/app/fabricacion/components/fabricar/fabricar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//components


//routes
var fabricacionRoutes = [
    {
        path: 'fabricacion-panel',
        component: __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__["a" /* MainComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_fabricador_guard__["a" /* FabricadorGuard */]],
        children: [
            { path: '', redirectTo: 'fabricar', pathMatch: 'full' },
            { path: 'fabricar', component: __WEBPACK_IMPORTED_MODULE_4__components_fabricar_fabricar_component__["a" /* FabricarComponent */] }
        ]
    }
];
var FabricacionRoutingModule = (function () {
    function FabricacionRoutingModule() {
    }
    FabricacionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(fabricacionRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], FabricacionRoutingModule);
    return FabricacionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/fabricacion/fabricacion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabricacionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fabricacion_routing_module__ = __webpack_require__("../../../../../src/app/fabricacion/fabricacion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password__ = __webpack_require__("../../../../primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__ = __webpack_require__("../../../../primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__ = __webpack_require__("../../../../primeng/keyfilter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__ = __webpack_require__("../../../../../src/app/fabricacion/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_fabricar_fabricar_component__ = __webpack_require__("../../../../../src/app/fabricacion/components/fabricar/fabricar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_fabricador_guard__ = __webpack_require__("../../../../../src/app/services/fabricador.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Imports modulos





//modulos ngPRIME















//prime icons fa fa-

//components


//Guards


//Decorar ngModule para cargar los componentes y la configuracion de los modulos
var FabricacionModule = (function () {
    function FabricacionModule() {
    }
    FabricacionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__fabricacion_routing_module__["a" /* FabricacionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__["KeyFilterModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MessagesModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_fabricar_fabricar_component__["a" /* FabricarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_fabricar_fabricar_component__["a" /* FabricarComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_13__services_fabricador_guard__["a" /* FabricadorGuard */]
            ]
        })
    ], FabricacionModule);
    return FabricacionModule;
}());



/***/ }),

/***/ "../../../../../src/app/instalacion/components/instalar/instalar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO PROCESOS INSTALACION\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"pedido.pedido.pedido.pedido.cliente.apellido\"  header=\"Cliente\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n      </p-column>\r\n      <p-column field=\"pedido.pedido.pedido.pedido.cliente.nombre\"  header=\"Cliente\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n      </p-column>\r\n      <p-column field=\"pedido.pedido.pedido.pedido.descripcion\" header=\"Pedido\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"pedido.pedido.pedido.modelo.nombre\" header=\"Modelo\" [sortable]=\"true\" [filter]=\"true\"\r\n                filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"pedido.pedido.pedido.cantidad\" header=\"Cant.\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n      <p-column field=\"estadoGeneral\" header=\"Estado\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-dialog header=\"Fabricar Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"1000\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\" ng-controller=\"formCtrl\">\r\n\r\n    <div class=\"6\">\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"></div>\r\n        <div class=\"ui-grid-col-7\" style=\"text-align: right\" align=\"right\">\r\n          (Orden: {{colocacion ? colocacion.pedido.pedido.pedido.descripcion||colocacion : ''}})\r\n          (Model.: {{colocacion ? colocacion.pedido.pedido.modelo.nombre||colocacion : ''}})\r\n          <br/>\r\n          (Cant.: {{colocacion ? colocacion.pedido.pedido.cantidad||colocacion : ''}})\r\n          (Dim.: {{colocacion ? colocacion.pedido.pedido.ancho||colocacion : ''}} x {{colocacion ? colocacion.pedido.pedido.alto||colocacion : ''}} m.)\r\n          <br/>\r\n          (Clie.: {{colocacion ? colocacion.pedido.pedido.pedido.cliente.apellido||colocacion : ''}} {{colocacion ? colocacion.pedido.pedido.pedido.cliente.nombre||colocacion : ''}})\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label>Pedido: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n\r\n          <p-autoComplete [(ngModel)]=\"colocacion\" [suggestions]=\"filteredObjSinglePedido\"\r\n                          (completeMethod)=\"filterSinglePedido($event)\"\r\n                          field=\"pedido.pedido.pedido.descripcion\" [size]=\"30\"\r\n                          placeholder=\"Pedido\" [minLength]=\"1\" [forceSelection]=\"true\">\r\n            <ng-template let-value pTemplate=\"item\">\r\n              <div>{{value.pedido.pedido.pedido.descripcion }} -- {{value.pedido.pedido.modelo.nombre }}\r\n                ({{value.pedido.pedido.ancho }} x {{value.pedido.pedido.alto}} m.) Cant.: {{value.pedido.pedido.cantidad }} -- {{value.pedido.pedido.pedido.cliente.apellido }} {{value.pedido.pedido.pedido.cliente.nombre }}\r\n              </div>\r\n            </ng-template>\r\n          </p-autoComplete>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label>Responsable: *</label></div>\r\n        <div class=\"ui-grid-col-7\" style=\"text-align: left\" >{{responsable ? responsable.surname||responsable :\r\n          ''}}\r\n          {{responsable ?\r\n          responsable.name||responsable : ''}}\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label >Estado General: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <p-dropdown id=\"estado\" [options]=\"estadoGeneral\" [(ngModel)]=\"actual.estadoGeneral\"></p-dropdown>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <hr/>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-6\" style=\"padding-right: 10px\">\r\n        <p-dataTable [value]=\"listadoEstado\" selectionMode=\"single\" [(selection)]=\"selectedEstado\"\r\n                     (onRowSelect)=\"onRowSelectEstado($event)\" [paginator]=\"true\" rows=\"5\" [responsive]=\"true\"\r\n                     sortField=\"fecha\" [sortOrder]=\"-1\">\r\n          <p-header>\r\n            Estados\r\n            <div class=\"ui-helper-clearfix\" style=\"width:25%\">\r\n              <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAddEstado()\"\r\n                      label=\"Nuevo\"></button>\r\n            </div>\r\n          </p-header>\r\n\r\n          <p-column field=\"fecha\" header=\"Fecha (d/m/y)\" [sortable]=\"true\">\r\n            <ng-template let-row=\"rowData\" pTemplate=\"body\">\r\n              {{row.fecha | date:'dd/MM/yy'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"descripcion\" header=\"Estado\" [sortable]=\"true\"></p-column>\r\n        </p-dataTable>\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-col-6\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-12\">\r\n            <div class=\"image_for_edit\" *ngIf=\"actual.imagen && actual.imagen!='null'\">\r\n              <img src=\"{{url + 'get-image-instalacion/' + actual.imagen}}\"/>\r\n            </div>\r\n            <p>\r\n              <label>Imagen:</label>\r\n              <input  type=\"file\" placeholder=\"Subir imagen\" (change)=\"fileChangeEvent($event)\"/>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n              class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<p-dialog header=\"Estado Detalle\" [(visible)]=\"displayDialogEstado\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"500\" height=\"400\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"estados\">\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-3\"><label for=\"descripcionEstado\">Estado</label></div>\r\n      <div class=\"ui-grid-col-9\"><input pInputText id=\"descripcionEstado\" [(ngModel)]=\"estados.descripcion\"/></div>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-row\" style=\"height: 250px\">\r\n      <div class=\"ui-grid-col-3\"><label>Fecha: *</label></div>\r\n      <div class=\"ui-grid-col-9\">\r\n        <p-calendar [(ngModel)]=\"estados.fecha\" [showIcon]=\"true\" [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\" yearRange=\"1940:2070\" [locale]=\"es\" dateFormat=\"mm/dd/yy\"></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"deleteEstado()\" label=\"Eliminar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveEstado()\" label=\"Guardar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/instalacion/components/instalar/instalar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstalarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_instalar_service__ = __webpack_require__("../../../../../src/app/services/instalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_instalar__ = __webpack_require__("../../../../../src/app/models/instalar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_datePipe__ = __webpack_require__("../../../../../src/app/pipes/datePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_pedido_service__ = __webpack_require__("../../../../../src/app/services/pedido.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_personal_service__ = __webpack_require__("../../../../../src/app/services/personal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_materiaprima_service__ = __webpack_require__("../../../../../src/app/services/materiaprima.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_pedidoDetalle_service__ = __webpack_require__("../../../../../src/app/services/pedidoDetalle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_colocar_service__ = __webpack_require__("../../../../../src/app/services/colocar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var InstalarComponent = (function () {
    function InstalarComponent(_route, _router, _usuarioService, _instalarService, _uploadService, _pedidoService, _personalService, _colocarService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._instalarService = _instalarService;
        this._uploadService = _uploadService;
        this._pedidoService = _pedidoService;
        this._personalService = _personalService;
        this._colocarService = _colocarService;
        this.title = 'GESTION FABRICAR';
        this.listadoEstado = [];
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_6__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
        this.estadoGeneral = [
            { label: "Proceso", value: "Proceso" },
            { label: "Finalizado", value: "Finalizado" },
            { label: "Paralizado", value: "Paralizado" }
        ];
    }
    InstalarComponent.prototype.ngOnInit = function () {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            today: 'Hoy',
            clear: 'Borrar',
            dateFormat: 'mm/dd/yy'
        };
    };
    InstalarComponent.prototype.getAll = function () {
        var _this = this;
        this._instalarService.getAll().subscribe(function (response) {
            _this.listado = response.instalacions;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    InstalarComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
        this.displayDialog = true;
        this.colocacion = null;
        this.responsable = this.identity;
        this.listadoEstado = [];
    };
    InstalarComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this.actual.pedido = this.colocacion._id;
        this.actual.responsable = this.responsable._id;
        this.actual.estado = this.listadoEstado;
        this._instalarService.update(this.token, this.actual).subscribe(function (response) {
            if (response.instalacion) {
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + _this.actual);
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
        this.displayDialog = false;
    };
    InstalarComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            if (this.actual.estadoGeneral == '') {
                this.actual.estadoGeneral = "Proceso";
            }
            this.actual.pedido = this.colocacion._id;
            this.actual.responsable = this.responsable._id;
            this.actual.estado = this.listadoEstado;
            this._instalarService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    if (_this.filesToUpload.length > 0) {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-instalacion/' + response.instalacion._id, [], _this.filesToUpload, _this.token, 'imagen')
                            .then(function (result) {
                            _this.status = "success";
                            _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
                            _this.getAll();
                            _this.filesToUpload = new Array();
                        });
                    }
                    else {
                        _this.status = "success";
                        _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
                        _this.getAll();
                    }
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this.actual.pedido = this.colocacion._id;
            this.actual.responsable = this.responsable._id;
            this.actual.estado = this.listadoEstado;
            this._instalarService.update(this.token, this.actual).subscribe(function (response) {
                if (response.instalacion) {
                    _this.status = "success";
                    if (_this.filesToUpload.length > 0) {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-instalacion/' + response.instalacion._id, [], _this.filesToUpload, _this.token, 'imagen')
                            .then(function (result) {
                            _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
                            _this.getAll();
                            _this.filesToUpload = null;
                        });
                    }
                    else {
                        _this.status = "success";
                        _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
                        _this.getAll();
                    }
                }
                else {
                    console.log("OBJ _id: error" + _this.actual);
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
        this.displayDialog = false;
        //this.listado = listado;
    };
    InstalarComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    InstalarComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_instalar__["a" /* Instalar */]('', '', '', '', [], 0, '', '');
        this.displayDialog = false;
    };
    InstalarComponent.prototype.filterSinglePedido = function (event) {
        var _this = this;
        var query = event.query;
        this._colocarService.getAllFinalizado().subscribe(function (objs) {
            _this.filteredObjSinglePedido = _this.filterPedido(query, objs.colocacions);
        });
    };
    InstalarComponent.prototype.filterPedido = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.pedido.pedido.pedido.descripcion.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    InstalarComponent.prototype.filterSingleResponsable = function (event) {
        var _this = this;
        var query = event.query;
        this._personalService.getAll().subscribe(function (objs) {
            _this.filteredObjSingleResponsable = _this.filterResponsable(query, objs.personals);
        });
    };
    InstalarComponent.prototype.filterResponsable = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.apellido.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    //FIN AUTOCOMPLETAR RESPONSABLE **************************************************************************************
    //FUNCIONES para ESTADOS**********************************************************************************************
    InstalarComponent.prototype.showDialogToAddEstado = function () {
        this.newObjEstado = true;
        this.estados = new EstadoObj('', '');
        this.displayDialogEstado = true;
    };
    InstalarComponent.prototype.saveEstado = function () {
        var listadoEstado = this.listadoEstado.slice();
        if (this.newObjEstado)
            listadoEstado.push(this.estados);
        else
            listadoEstado[this.findSelectedIndexEstado()] = this.estados;
        this.listadoEstado = listadoEstado;
        this.estados = new EstadoObj('', '');
        this.displayDialogEstado = false;
    };
    InstalarComponent.prototype.deleteEstado = function () {
        var index = this.findSelectedIndexEstado();
        this.listadoEstado = this.listadoEstado.filter(function (val, i) { return i != index; });
        this.estados = null;
        this.displayDialogEstado = false;
    };
    InstalarComponent.prototype.onRowSelectEstado = function (event) {
        this.newObjEstado = false;
        var datePipe = new __WEBPACK_IMPORTED_MODULE_7__pipes_datePipe__["a" /* dateFormatPipe */]();
        event.data['fecha'] = datePipe.transform(event.data['fecha']);
        this.estados = this.cloneObjEstado(event.data);
        this.displayDialogEstado = true;
    };
    InstalarComponent.prototype.cloneObjEstado = function (obj) {
        var actual = new EstadoObj('', '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    InstalarComponent.prototype.findSelectedIndexEstado = function () {
        return this.listadoEstado.indexOf(this.selectedEstado);
    };
    //FIN FUNCIONES ESTADOS***********************************************************************************************
    InstalarComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
        this.colocacion = this.actual.pedido;
        this.responsable = this.actual.responsable;
        this.listadoEstado = this.actual.estado;
    };
    InstalarComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', '', '', [], 0, '', '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    InstalarComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    InstalarComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    InstalarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'instalacion-edit',
            template: __webpack_require__("../../../../../src/app/instalacion/components/instalar/instalar.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_instalar_service__["a" /* InstalarService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_8__services_pedido_service__["a" /* PedidoService */],
                __WEBPACK_IMPORTED_MODULE_9__services_personal_service__["a" /* PersonalService */],
                __WEBPACK_IMPORTED_MODULE_10__services_materiaprima_service__["a" /* MateriaprimaService */],
                __WEBPACK_IMPORTED_MODULE_11__services_pedidoDetalle_service__["a" /* PedidoDetalleService */],
                __WEBPACK_IMPORTED_MODULE_12__services_colocar_service__["a" /* ColocarService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_instalar_service__["a" /* InstalarService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_8__services_pedido_service__["a" /* PedidoService */],
            __WEBPACK_IMPORTED_MODULE_9__services_personal_service__["a" /* PersonalService */],
            __WEBPACK_IMPORTED_MODULE_12__services_colocar_service__["a" /* ColocarService */]])
    ], InstalarComponent);
    return InstalarComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(pedido, responsable, estadoGeneral, direccion, estado, borrado, imagen, _id) {
        this.pedido = pedido;
        this.responsable = responsable;
        this.estadoGeneral = estadoGeneral;
        this.direccion = direccion;
        this.estado = estado;
        this.borrado = borrado;
        this.imagen = imagen;
        this._id = _id;
    }
    return PrimeObj;
}());
var EstadoObj = (function () {
    function EstadoObj(descripcion, fecha) {
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    return EstadoObj;
}());


/***/ }),

/***/ "../../../../../src/app/instalacion/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-2\">\r\n  <h4>{{title}}</h4>\r\n  <div class=\"sidebar-admin\" data-example-id=\"sample-nav-stacked\">\r\n    <ul class=\"nav nav-pills nav-stacked nav-pill-stacked-example\">\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['instalar']\">Instalar</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-lg-9\">\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/instalacion/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Gestión Zona Instalación';
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'instalacion-main',
            template: __webpack_require__("../../../../../src/app/instalacion/components/main/main.component.html")
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/instalacion/instalacion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstalacionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_instalador_guard__ = __webpack_require__("../../../../../src/app/services/instalador.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__ = __webpack_require__("../../../../../src/app/instalacion/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_instalar_instalar_component__ = __webpack_require__("../../../../../src/app/instalacion/components/instalar/instalar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//components


//routes
var instalacionRoutes = [
    {
        path: 'instalacion-panel',
        component: __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__["a" /* MainComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_instalador_guard__["a" /* InstaladorGuard */]],
        children: [
            { path: '', redirectTo: 'instalar', pathMatch: 'full' },
            { path: 'instalar', component: __WEBPACK_IMPORTED_MODULE_4__components_instalar_instalar_component__["a" /* InstalarComponent */] }
        ]
    }
];
var InstalacionRoutingModule = (function () {
    function InstalacionRoutingModule() {
    }
    InstalacionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(instalacionRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], InstalacionRoutingModule);
    return InstalacionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/instalacion/instalacion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstalacionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instalacion_routing_module__ = __webpack_require__("../../../../../src/app/instalacion/instalacion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password__ = __webpack_require__("../../../../primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__ = __webpack_require__("../../../../primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_main_main_component__ = __webpack_require__("../../../../../src/app/instalacion/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_instalar_instalar_component__ = __webpack_require__("../../../../../src/app/instalacion/components/instalar/instalar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_instalador_guard__ = __webpack_require__("../../../../../src/app/services/instalador.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Imports modulos





//modulos ngPRIME













//prime icons fa fa-

//components


//Guards


//Decorar ngModule para cargar los componentes y la configuracion de los modulos
var InstalacionModule = (function () {
    function InstalacionModule() {
    }
    InstalacionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__instalacion_routing_module__["a" /* InstalacionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["AutoCompleteModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_instalar_instalar_component__["a" /* InstalarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_instalar_instalar_component__["a" /* InstalarComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_12__services_instalador_guard__["a" /* InstaladorGuard */]
            ]
        })
    ], InstalacionModule);
    return InstalacionModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/categoria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categoria; });
var Categoria = (function () {
    function Categoria(nombre, descripcion, borrado) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.borrado = borrado;
    }
    return Categoria;
}());



/***/ }),

/***/ "../../../../../src/app/models/cliente.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = (function () {
    function Cliente(ci, apellido, nombre, ciudad, direccion, telefono, email, borrado) {
        this.ci = ci;
        this.apellido = apellido;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.borrado = borrado;
    }
    return Cliente;
}());



/***/ }),

/***/ "../../../../../src/app/models/colocar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colocar; });
var Colocar = (function () {
    function Colocar(pedido, responsable, estadoGeneral, estado, borrado, _id) {
        this.pedido = pedido;
        this.responsable = responsable;
        this.estadoGeneral = estadoGeneral;
        this.estado = estado;
        this.borrado = borrado;
        this._id = _id;
    }
    return Colocar;
}());



/***/ }),

/***/ "../../../../../src/app/models/fabricar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fabricar; });
var Fabricar = (function () {
    function Fabricar(pedido, responsable, estadoGeneral, estado, materiales, borrado, _id) {
        this.pedido = pedido;
        this.responsable = responsable;
        this.estadoGeneral = estadoGeneral;
        this.estado = estado;
        this.materiales = materiales;
        this.borrado = borrado;
        this._id = _id;
    }
    return Fabricar;
}());



/***/ }),

/***/ "../../../../../src/app/models/instalar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Instalar; });
var Instalar = (function () {
    function Instalar(pedido, responsable, estadoGeneral, direccion, estado, borrado, imagen, _id) {
        this.pedido = pedido;
        this.responsable = responsable;
        this.estadoGeneral = estadoGeneral;
        this.direccion = direccion;
        this.estado = estado;
        this.borrado = borrado;
        this.imagen = imagen;
        this._id = _id;
    }
    return Instalar;
}());



/***/ }),

/***/ "../../../../../src/app/models/iva.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iva; });
var Iva = (function () {
    function Iva(nombre, valor, borrado) {
        this.nombre = nombre;
        this.valor = valor;
        this.borrado = borrado;
    }
    return Iva;
}());



/***/ }),

/***/ "../../../../../src/app/models/materiaprima.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Materiaprima; });
var Materiaprima = (function () {
    function Materiaprima(descripcion, uMedida, color, stock, imagen, borrado, categoria) {
        this.descripcion = descripcion;
        this.uMedida = uMedida;
        this.color = color;
        this.stock = stock;
        this.imagen = imagen;
        this.borrado = borrado;
        this.categoria = categoria;
    }
    return Materiaprima;
}());



/***/ }),

/***/ "../../../../../src/app/models/modelo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modelo; });
var Modelo = (function () {
    function Modelo(categoria, nombre, descripcion, precio, imagen, borrado) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.borrado = borrado;
    }
    return Modelo;
}());



/***/ }),

/***/ "../../../../../src/app/models/pedido.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pedido; });
var Pedido = (function () {
    function Pedido(cliente, responsable, total, descripcion, fecha, fecha_fin, estado, borrado) {
        this.cliente = cliente;
        this.responsable = responsable;
        this.total = total;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.fecha_fin = fecha_fin;
        this.estado = estado;
        this.borrado = borrado;
    }
    return Pedido;
}());



/***/ }),

/***/ "../../../../../src/app/models/pedidoDetalle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoDetalle; });
var PedidoDetalle = (function () {
    function PedidoDetalle(ancho, alto, cantidad, pvp, descuento, iva, total, descripcion, estado, pedido, modelo, borrado) {
        this.ancho = ancho;
        this.alto = alto;
        this.cantidad = cantidad;
        this.pvp = pvp;
        this.descuento = descuento;
        this.iva = iva;
        this.total = total;
        this.descripcion = descripcion;
        this.estado = estado;
        this.pedido = pedido;
        this.modelo = modelo;
        this.borrado = borrado;
    }
    return PedidoDetalle;
}());



/***/ }),

/***/ "../../../../../src/app/models/personal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Personal; });
var Personal = (function () {
    function Personal(ci, apellido, nombre, direccion, telefono, email, imagen, borrado) {
        this.ci = ci;
        this.apellido = apellido;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.imagen = imagen;
        this.borrado = borrado;
    }
    return Personal;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * Created by VICTOR OQUENDO on 12/1/2017.
 */
var User = (function () {
    function User(_id, name, surname, email, password, role, image, borrado) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
        this.borrado = borrado;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/moduloemail/components/guardar_email/guardar_email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardarEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GuardarEmailComponent = (function () {
    function GuardarEmailComponent() {
        this.title = 'Guardar email';
    }
    GuardarEmailComponent.prototype.guardarEmail = function () {
        localStorage.setItem('emailContacto', this.emailContacto);
        //console.log(localStorage.getItem('emailContacto'));
    };
    GuardarEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'guardar_email',
            template: "\n    <h4>{{title}}</h4>\n    <input type=\"text\" [(ngModel)] = \"emailContacto\"/>\n    <button (click)=\"guardarEmail()\">SaveEmail</button>\n  "
        })
    ], GuardarEmailComponent);
    return GuardarEmailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/moduloemail/components/main_email/main_email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainEmailComponent = (function () {
    function MainEmailComponent() {
        this.title = 'Modulo de email';
    }
    MainEmailComponent.prototype.ngOnInit = function () {
        console.log("Componente Principal del modulo cargado");
    };
    MainEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main_email',
            template: "\n    <div class=\"panel panel-default\">\n      <h2>{{title}}</h2>\n      <hr/>\n      <mostrar_email></mostrar_email>\n      <guardar_email></guardar_email>\n    </div>\n\n  "
        })
    ], MainEmailComponent);
    return MainEmailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/moduloemail/components/mostrar_email/mostrar_email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostrarEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MostrarEmailComponent = (function () {
    function MostrarEmailComponent() {
        this.title = 'Mostrar email';
    }
    MostrarEmailComponent.prototype.ngOnInit = function () {
        this.emailContacto = localStorage.getItem('emailContacto');
    };
    MostrarEmailComponent.prototype.ngDoCheck = function () {
        this.emailContacto = localStorage.getItem('emailContacto');
    };
    MostrarEmailComponent.prototype.borrarEmail = function () {
        localStorage.removeItem('emailContacto');
        localStorage.clear();
        this.emailContacto = null;
    };
    MostrarEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mostrar_email',
            template: "\n\n\n    <div *ngIf=\"emailContacto\">\n    <h4>{{title}}</h4>\n      <strong>Email de Contato:</strong> {{emailContacto}}\n      <button (click)=\"borrarEmail()\">Eliminar mailContacto</button>\n    </div>\n\n  "
        })
    ], MostrarEmailComponent);
    return MostrarEmailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/moduloemail/moduloemail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloEmailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_guardar_email_guardar_email_component__ = __webpack_require__("../../../../../src/app/moduloemail/components/guardar_email/guardar_email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mostrar_email_mostrar_email_component__ = __webpack_require__("../../../../../src/app/moduloemail/components/mostrar_email/mostrar_email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_email_main_email_component__ = __webpack_require__("../../../../../src/app/moduloemail/components/main_email/main_email.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Importar modulos necesarios para crear modulos



//importar componentes



//Decorar ngModule para cargar los componentes y la configuracion de los modulos
var ModuloEmailModule = (function () {
    function ModuloEmailModule() {
    }
    ModuloEmailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_guardar_email_guardar_email_component__["a" /* GuardarEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_mostrar_email_mostrar_email_component__["a" /* MostrarEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_main_email_main_email_component__["a" /* MainEmailComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__components_main_email_main_email_component__["a" /* MainEmailComponent */]]
        })
    ], ModuloEmailModule);
    return ModuloEmailModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/datePipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var dateFormatPipe = (function () {
    function dateFormatPipe() {
    }
    dateFormatPipe.prototype.transform = function (date, args) {
        var d = new Date(date);
        return __WEBPACK_IMPORTED_MODULE_1_moment__(d).format('MM/DD/YYYY');
    };
    dateFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatPipe',
        })
    ], dateFormatPipe);
    return dateFormatPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AdminGuard.prototype.canActivate = function () {
        var identity = this._userService.getIdentity();
        var listaRol = [];
        var cont;
        listaRol = identity.role;
        for (var i = 0; i < listaRol.length; i++) {
            if (identity && listaRol[i] == 'ROLE_ADMIN') {
                return true;
            }
        }
        this._router.navigate(['/']);
        return false;
        /*if(identity && identity.role=='ROLE_ADMIN'){
          return true;
        }else{
          this._router.navigate(['/']);
          return false;
        }*/
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/categoria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaService = (function () {
    function CategoriaService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    CategoriaService.prototype.getAll = function () {
        return this._http.get(this.url + 'categorias')
            .map(function (res) { return res.json(); });
    };
    CategoriaService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'categoria', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriaService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-categoria/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriaService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'categoria/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "../../../../../src/app/services/categoriaMaterial.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaMaterialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaMaterialService = (function () {
    function CategoriaMaterialService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    CategoriaMaterialService.prototype.getAll = function () {
        return this._http.get(this.url + 'categoriaMaterials')
            .map(function (res) { return res.json(); });
    };
    CategoriaMaterialService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'categoriaMaterial', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriaMaterialService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-categoriaMaterial/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriaMaterialService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'categoriaMaterial/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriaMaterialService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoriaMaterialService);
    return CategoriaMaterialService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cliente.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClienteService = (function () {
    function ClienteService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    ClienteService.prototype.getAll = function () {
        return this._http.get(this.url + 'clientes')
            .map(function (res) { return res.json(); });
    };
    ClienteService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'cliente', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClienteService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-cliente/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClienteService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'cliente/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClienteService.prototype.getCI = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'clienteCi/' + obj_to_search.ci, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClienteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/colocador.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColocadorGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColocadorGuard = (function () {
    function ColocadorGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    ColocadorGuard.prototype.canActivate = function () {
        var identity = this._userService.getIdentity();
        var listaRol = [];
        var cont;
        listaRol = identity.role;
        for (var i = 0; i < listaRol.length; i++) {
            if (identity && listaRol[i] == 'ROLE_COLOCACION') {
                return true;
            }
        }
        /*if(identity && identity.role=='ROLE_COLOCACION'){
          return true;
        }else{
          this._router.navigate(['/']);
          return false;
        }*/
    };
    ColocadorGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], ColocadorGuard);
    return ColocadorGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/colocar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColocarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColocarService = (function () {
    function ColocarService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    ColocarService.prototype.getAll = function () {
        return this._http.get(this.url + 'colocacions')
            .map(function (res) { return res.json(); });
    };
    ColocarService.prototype.getAllFinalizado = function () {
        return this._http.get(this.url + 'colocacionsFinalizado')
            .map(function (res) { return res.json(); });
    };
    ColocarService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'colocacion', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ColocarService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-colocacion/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ColocarService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'colocacion/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ColocarService.prototype.getFabricacion = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'colocacionFabricacion/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ColocarService.prototype.updateSubEstadoAdd = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-colocacionEstado/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ColocarService.prototype.updateSubEstadoUpdateById = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-colocacionEstadoUpdate/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ColocarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ColocarService);
    return ColocarService;
}());



/***/ }),

/***/ "../../../../../src/app/services/fabricador.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabricadorGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FabricadorGuard = (function () {
    function FabricadorGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    FabricadorGuard.prototype.canActivate = function () {
        var identity = this._userService.getIdentity();
        var listaRol = [];
        var cont;
        listaRol = identity.role;
        for (var i = 0; i < listaRol.length; i++) {
            if (identity && listaRol[i] == 'ROLE_FABRICACION') {
                return true;
            }
        }
    };
    FabricadorGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], FabricadorGuard);
    return FabricadorGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/fabricar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabricarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FabricarService = (function () {
    function FabricarService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    FabricarService.prototype.getAll = function () {
        return this._http.get(this.url + 'fabricacions')
            .map(function (res) { return res.json(); });
    };
    FabricarService.prototype.getAllFinalizado = function () {
        return this._http.get(this.url + 'fabricacionsFinalizado')
            .map(function (res) { return res.json(); });
    };
    FabricarService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'fabricacion', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FabricarService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-fabricacion/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FabricarService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'fabricacion/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FabricarService.prototype.getPedidoDetalle = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'fabricacionPedidoDetalle/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FabricarService.prototype.updateSubEstadoAdd = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-fabricacionEstado/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FabricarService.prototype.updateSubMaterialAdd = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-fabricacionMaterial/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FabricarService.prototype.updateSubEstadoUpdateById = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-fabricacionEstadoUpdate/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FabricarService.prototype.updateSubMaterialUpdateById = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-fabricacionMaterialUpdate/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FabricarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FabricarService);
    return FabricarService;
}());



/***/ }),

/***/ "../../../../../src/app/services/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
/**
 * Created by VICTOR OQUENDO on 12/1/2017.
 */
var GLOBAL = {
    url: 'http://198.211.109.102:3789/api/'
};


/***/ }),

/***/ "../../../../../src/app/services/instalador.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstaladorGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstaladorGuard = (function () {
    function InstaladorGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    InstaladorGuard.prototype.canActivate = function () {
        var identity = this._userService.getIdentity();
        var listaRol = [];
        var cont;
        listaRol = identity.role;
        for (var i = 0; i < listaRol.length; i++) {
            if (identity && listaRol[i] == 'ROLE_INSTALACION') {
                return true;
            }
        }
    };
    InstaladorGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], InstaladorGuard);
    return InstaladorGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/instalar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstalarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstalarService = (function () {
    function InstalarService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    InstalarService.prototype.getAll = function () {
        return this._http.get(this.url + 'instalacions')
            .map(function (res) { return res.json(); });
    };
    InstalarService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'instalacion', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InstalarService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-instalacion/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InstalarService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'instalacion/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InstalarService.prototype.getColocacion = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'instalacionColocacion/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InstalarService.prototype.updateSubEstadoAdd = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-instalacionEstado/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InstalarService.prototype.updateSubEstadoUpdateById = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-instalacionEstadoUpdate/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InstalarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], InstalarService);
    return InstalarService;
}());



/***/ }),

/***/ "../../../../../src/app/services/iva.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IvaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IvaService = (function () {
    function IvaService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    IvaService.prototype.getAll = function () {
        return this._http.get(this.url + 'ivas')
            .map(function (res) { return res.json(); });
    };
    IvaService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'iva', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IvaService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-iva/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IvaService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'iva/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IvaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], IvaService);
    return IvaService;
}());



/***/ }),

/***/ "../../../../../src/app/services/materiaprima.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaprimaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MateriaprimaService = (function () {
    function MateriaprimaService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    MateriaprimaService.prototype.getAll = function () {
        return this._http.get(this.url + 'materiaPrimas')
            .map(function (res) { return res.json(); });
    };
    MateriaprimaService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'materiaPrima', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MateriaprimaService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-materiaPrima/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MateriaprimaService.prototype.updateStock = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-materiaPrimaStock/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MateriaprimaService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'materiaPrima/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MateriaprimaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MateriaprimaService);
    return MateriaprimaService;
}());



/***/ }),

/***/ "../../../../../src/app/services/modelo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeloService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModeloService = (function () {
    function ModeloService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    ModeloService.prototype.getAll = function () {
        return this._http.get(this.url + 'modelos')
            .map(function (res) { return res.json(); });
    };
    ModeloService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'modelo', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ModeloService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-modelo/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ModeloService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'modelo/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ModeloService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ModeloService);
    return ModeloService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pedido.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidoService = (function () {
    function PedidoService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    PedidoService.prototype.getAll = function () {
        return this._http.get(this.url + 'pedidos')
            .map(function (res) { return res.json(); });
    };
    PedidoService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'pedido', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PedidoService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-pedido/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PedidoService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'pedido/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PedidoService.prototype.getCliente = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'pedidoCliente/' + obj_to_search.cliente, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PedidoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PedidoService);
    return PedidoService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pedidoDetalle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoDetalleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidoDetalleService = (function () {
    function PedidoDetalleService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    PedidoDetalleService.prototype.getAll = function () {
        return this._http.get(this.url + 'pedidoDetalles')
            .map(function (res) { return res.json(); });
    };
    PedidoDetalleService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'pedidoDetalle', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PedidoDetalleService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-pedidoDetalle/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PedidoDetalleService.prototype.delete = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'delete-pedidoDetalle/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PedidoDetalleService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'pedidoDetalle/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PedidoDetalleService.prototype.getAllByPedido = function (id_pedido) {
        //let params = JSON.stringify(id_pedido);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'pedidoDetalleByPedido/' + id_pedido, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PedidoDetalleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PedidoDetalleService);
    return PedidoDetalleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/personal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalService = (function () {
    function PersonalService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    PersonalService.prototype.getAll = function () {
        return this._http.get(this.url + 'personals')
            .map(function (res) { return res.json(); });
    };
    PersonalService.prototype.save = function (token, obj_to_register) {
        var params = JSON.stringify(obj_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'personal', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PersonalService.prototype.update = function (token, obj_to_update) {
        var params = JSON.stringify(obj_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-personal/' + obj_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PersonalService.prototype.get = function (obj_to_search) {
        var params = JSON.stringify(obj_to_search);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'personal/' + obj_to_search._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PersonalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PersonalService);
    return PersonalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by VICTOR OQUENDO on 1/21/2018.
 */




var UploadService = (function () {
    function UploadService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    UploadService.prototype.makeFileRequest = function (url, params, files, token, name) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            var n = files.length;
            for (var i = 0; i < n; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by VICTOR OQUENDO on 12/1/2017.
 */




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    UserService.prototype.register = function (user_to_register) {
        var params = JSON.stringify(user_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'register', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.signup = function (user_to_login, gettoken) {
        if (gettoken === void 0) { gettoken = null; }
        if (gettoken != null) {
            user_to_login.gettoken = gettoken;
        }
        var params = JSON.stringify(user_to_login);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (user_to_update) {
        var params = JSON.stringify(user_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.put(this.url + 'update-user/' + user_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUserPassword = function (token, user_to_update) {
        var params = JSON.stringify(user_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-userpassword/' + user_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getAll = function () {
        return this._http.get(this.url + 'users')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != 'undefined') {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    UserService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != 'undefined') {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/vendedor.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendedorGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendedorGuard = (function () {
    function VendedorGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    VendedorGuard.prototype.canActivate = function () {
        var identity = this._userService.getIdentity();
        var listaRol = [];
        var cont;
        listaRol = identity.role;
        for (var i = 0; i < listaRol.length; i++) {
            if (identity && listaRol[i] == 'ROLE_VENDEDOR') {
                return true;
            }
        }
        this._router.navigate(['/']);
        return false;
        /*if(identity && identity.role=='ROLE_VENDEDOR'){
          return true;
        }else{
          this._router.navigate(['/']);
          return false;
        }*/
    };
    VendedorGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], VendedorGuard);
    return VendedorGuard;
}());



/***/ }),

/***/ "../../../../../src/app/usuario/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-3\">\r\n  <h4>{{title}}</h4>\r\n  <div class=\"sidebar-admin\" data-example-id=\"sample-nav-stacked\">\r\n    <ul class=\"nav nav-pills nav-stacked nav-pill-stacked-example\">\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['seguimiento']\">Seguimiento</a>\r\n      </li>\r\n\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-lg-9\">\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/usuario/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Panel de Seguimiento';
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'usuario-main',
            template: __webpack_require__("../../../../../src/app/usuario/components/main/main.component.html")
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usuario/components/seguimiento/seguimiento.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-grid-col-1\">\r\n      <label>C.I.:</label>\r\n    </div>\r\n    <div class=\"ui-grid-col-6\">\r\n      <input pInputText name=\"buscarCI\" id=\"buscarCI\" [(ngModel)]=\"buscarCI\" style=\"width: 100%\"/>\r\n    </div>\r\n    <div class=\"ui-grid-col-5\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"findByCI()\" label=\"Buscar\"></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n\r\n    <p-dataTable [value]=\"listadoPedidos\" selectionMode=\"single\" [(selection)]=\"selected\"\r\n                 (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n\r\n      <p-column field=\"pedido.descripcion\" header=\"Pedido\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"modelo.nombre\" header=\"Modelo\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n      <p-column field=\"pedido\" header=\"Cliente\" [sortable]=\"true\">\r\n        <ng-template let-col let-obj=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <span>({{obj[col.field].cliente.ci}}) {{obj[col.field].cliente.apellido}} {{obj[col.field].cliente.nombre}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n\r\n      <p-column field=\"total\" header=\"Total $\" [sortable]=\"true\"></p-column>\r\n      <p-column field=\"pedido.fecha\" header=\"Fecha (d/m/y)\" [sortable]=\"true\">\r\n        <ng-template let-row=\"rowData\" pTemplate=\"body\">\r\n          {{row.pedido.fecha | date:'dd/MM/yy'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"estado\" header=\"Estado\" [sortable]=\"true\"></p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-dialog header=\"SEGUIMIENTO Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"1000\">\r\n\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\">\r\n\r\n    <div class=\"ui-grid-col-6\">\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\" style=\"font-weight: bold;\">Pedido:</div>\r\n        <div class=\"ui-grid-col-9\">{{objPedido ? objPedido.pedido.descripcion||objPedido : ''}}</div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\" style=\"font-weight: bold;\">Modelo:</div>\r\n        <div class=\"ui-grid-col-9\">{{objPedido ? objPedido.modelo.nombre||objPedido : ''}}</div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\" style=\"font-weight: bold;\">Total: $</div>\r\n        <div class=\"ui-grid-col-9\">{{objPedido ? objPedido.total||objPedido : ''}}</div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\" style=\"font-weight: bold;\">Fecha (m/d/y):</div>\r\n        <div class=\"ui-grid-col-9\">{{objPedido ? objPedido.pedido.fecha||objPedido : ''}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-col-6\">\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\" style=\"font-weight: bold;\">Cliente:</div>\r\n        <div class=\"ui-grid-col-9\">{{objPedido ? objPedido.pedido.cliente.apellido||objPedido : ''}}\r\n          {{objPedido ? objPedido.pedido.cliente.nombre||objPedido : ''}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\" style=\"font-weight: bold;\">C.I.:</div>\r\n        <div class=\"ui-grid-col-9\">{{objPedido ? objPedido.pedido.cliente.ci||objPedido : ''}}</div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\">\r\n    <div class=\"ui-grid-col-4\" style=\"padding-right: 10px\">\r\n      <p-progressBar [value]=\"porcentajeFabricacion\"></p-progressBar>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-col-4\" style=\"padding-right: 10px\">\r\n      <p-progressBar [value]=\"porcentajeColocacion\"></p-progressBar>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-col-4\" style=\"padding-right: 10px\">\r\n      <p-progressBar [value]=\"porcentajeInstalacion\"></p-progressBar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\">\r\n    <div class=\"ui-grid-col-4\" style=\"padding-right: 10px\">\r\n      <p-dataTable [value]=\"listadoEstadoFabricacion\"  [paginator]=\"true\" rows=\"5\" [responsive]=\"true\"\r\n                   sortField=\"fecha\" [sortOrder]=\"-1\">\r\n        <p-header>\r\n          FABRICACION\r\n        </p-header>\r\n\r\n        <p-column field=\"fecha\" header=\"Fecha (d/m/y)\" [sortable]=\"true\">\r\n          <ng-template let-row=\"rowData\" pTemplate=\"body\">\r\n            {{row.fecha | date:'dd/MM/yy'}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"descripcion\" header=\"Estado\" [sortable]=\"true\"></p-column>\r\n      </p-dataTable>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-col-4\" style=\"padding-right: 10px\">\r\n      <p-dataTable [value]=\"listadoEstadoColocacion\"  [paginator]=\"true\" rows=\"5\" [responsive]=\"true\"\r\n                   sortField=\"fecha\" [sortOrder]=\"-1\">\r\n        <p-header>\r\n          COLOCACION\r\n        </p-header>\r\n\r\n        <p-column field=\"fecha\" header=\"Fecha (d/m/y)\" [sortable]=\"true\">\r\n          <ng-template let-row=\"rowData\" pTemplate=\"body\">\r\n            {{row.fecha | date:'dd/MM/yy'}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"descripcion\" header=\"Estado\" [sortable]=\"true\"></p-column>\r\n      </p-dataTable>\r\n    </div>\r\n\r\n    <div class=\"ui-grid-col-4\" style=\"padding-right: 10px\">\r\n      <p-dataTable [value]=\"listadoEstadoInstalacion\"  [paginator]=\"true\" rows=\"5\" [responsive]=\"true\"\r\n                   sortField=\"fecha\" [sortOrder]=\"-1\">\r\n        <p-header>\r\n          INSTALACION\r\n        </p-header>\r\n\r\n        <p-column field=\"fecha\" header=\"Fecha (d/m/y)\" [sortable]=\"true\">\r\n          <ng-template let-row=\"rowData\" pTemplate=\"body\">\r\n            {{row.fecha | date:'dd/MM/yy'}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"descripcion\" header=\"Estado\" [sortable]=\"true\"></p-column>\r\n      </p-dataTable>\r\n\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-12\">\r\n          <div class=\"image_for_edit\" *ngIf=\"imagenFinal &&imagenFinal!='null'\">\r\n            <img src=\"{{url + 'get-image-instalacion/' + imagenFinal}}\" width=\"100%\" height=\"200px\"/>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/usuario/components/seguimiento/seguimiento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pedido_service__ = __webpack_require__("../../../../../src/app/services/pedido.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pedidoDetalle_service__ = __webpack_require__("../../../../../src/app/services/pedidoDetalle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_fabricar_service__ = __webpack_require__("../../../../../src/app/services/fabricar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_colocar_service__ = __webpack_require__("../../../../../src/app/services/colocar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_instalar_service__ = __webpack_require__("../../../../../src/app/services/instalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_datePipe__ = __webpack_require__("../../../../../src/app/pipes/datePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_cliente_service__ = __webpack_require__("../../../../../src/app/services/cliente.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SeguimientoComponent = (function () {
    function SeguimientoComponent(_route, _router, _usuarioService, _uploadService, _pedidoService, _fabricarService, _colocarService, _instalarService, _clienteService, _pedidoDetalleService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._uploadService = _uploadService;
        this._pedidoService = _pedidoService;
        this._fabricarService = _fabricarService;
        this._colocarService = _colocarService;
        this._instalarService = _instalarService;
        this._clienteService = _clienteService;
        this._pedidoDetalleService = _pedidoDetalleService;
        this.title = 'SEGUIMIENTO PEDIDOS';
        this.listadoPedidos = [];
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
        this.objFabricar = null;
        this.objColocar = null;
        this.objInstalar = null;
    }
    SeguimientoComponent.prototype.ngOnInit = function () {
    };
    SeguimientoComponent.prototype.findByCI = function () {
        var _this = this;
        var listado = [];
        this._pedidoDetalleService.getAll().subscribe(function (response) {
            listado = response.pedidoDetalles;
            var filtered = [];
            for (var i = 0; i < listado.length; i++) {
                var obj = listado[i];
                if (obj.pedido.cliente.ci.indexOf(_this.buscarCI) == 0) {
                    filtered.push(obj);
                }
            }
            _this.listadoPedidos = filtered;
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    SeguimientoComponent.prototype.onRowSelect = function (event) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_10__pipes_datePipe__["a" /* dateFormatPipe */]();
        event.data.pedido['fecha'] = datePipe.transform(event.data.pedido['fecha']);
        this.displayDialog = true;
        this.objPedido = this.cloneObjDetalle(event.data);
        this.fillEstadoFabricacion(event);
        //this.calcularBarrasPorcentajes();
        //console.log("objPedido: " + JSON.stringify(this.objPedido));
        //console.log("objCliente: " + JSON.stringify(this.objCliente));
    };
    SeguimientoComponent.prototype.fillEstadoFabricacion = function (event) {
        //this.objFabricar =JSON.stringify(event.data);
        var _this = this;
        this._fabricarService.getPedidoDetalle(event.data._id).subscribe(function (response) {
            _this.objFabricar = response.fabricacion;
            console.log("objFABRICAR: " + _this.objFabricar._id);
            _this.fillEstadoColocacion();
            //let listado: any[] = response.fabricacions;
            /* let filtered: any[] = [];
             for (let i = 0; i < listado.length; i++) {
               let obj = listado[i];
               if (obj.pedido._id.indexOf(event.data._id) == 0) {
                 filtered.push(obj);
               }
             }*/
            _this.estadoFabricacion = null;
            if (_this.objFabricar != null) {
                _this.listadoEstadoFabricacion = _this.objFabricar.estado;
                _this.estadoFabricacion = _this.objFabricar.estadoGeneral;
            }
            else {
                _this.listadoEstadoFabricacion = [];
            }
            if (_this.estadoFabricacion == 'Finalizado') {
                _this.porcentajeFabricacion = 100;
            }
            else {
                _this.porcentajeFabricacion = 10 * _this.listadoEstadoFabricacion.length;
                if (_this.porcentajeFabricacion > 100) {
                    _this.porcentajeFabricacion = 99;
                }
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    SeguimientoComponent.prototype.fillEstadoColocacion = function () {
        var _this = this;
        this._colocarService.getFabricacion(this.objFabricar._id).subscribe(function (response) {
            _this.objColocar = response.colocacion;
            console.log("objCOLOCACION: " + _this.objColocar._id);
            _this.fillEstadoInstalacion();
            _this.estadoColocacion = null;
            if (_this.objColocar != null) {
                _this.listadoEstadoColocacion = _this.objColocar.estado;
                _this.estadoColocacion = _this.objColocar.estadoGeneral;
            }
            else {
                _this.listadoEstadoColocacion = [];
            }
            if (_this.estadoColocacion == 'Finalizado') {
                _this.porcentajeColocacion = 100;
            }
            else {
                _this.porcentajeColocacion = 10 * _this.listadoEstadoColocacion.length;
                if (_this.porcentajeColocacion > 100) {
                    _this.porcentajeColocacion = 99;
                }
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    SeguimientoComponent.prototype.fillEstadoInstalacion = function () {
        var _this = this;
        this._instalarService.getColocacion(this.objColocar._id).subscribe(function (response) {
            _this.objInstalar = response.instalacion;
            _this.imagenFinal = _this.objInstalar.imagen;
            console.log("objINSTALACION: " + _this.imagenFinal);
            _this.estadoInstalacion = null;
            if (_this.objInstalar != null) {
                _this.listadoEstadoInstalacion = _this.objInstalar.estado;
                _this.estadoInstalacion = _this.objInstalar.estadoGeneral;
            }
            else {
                _this.listadoEstadoInstalacion = [];
            }
            if (_this.estadoInstalacion == 'Finalizado') {
                _this.porcentajeInstalacion = 100;
            }
            else {
                _this.porcentajeInstalacion = 10 * _this.listadoEstadoInstalacion.length;
                if (_this.porcentajeInstalacion > 100) {
                    _this.porcentajeInstalacion = 99;
                }
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    SeguimientoComponent.prototype.calcularBarrasPorcentajes = function () {
        if (this.estadoFabricacion == 'Finalizado') {
            this.porcentajeFabricacion = 100;
        }
        else {
            this.porcentajeFabricacion = 5 * this.listadoEstadoFabricacion.length;
        }
        if (this.estadoColocacion == 'Finalizado') {
            this.porcentajeColocacion = 100;
        }
        else {
            this.porcentajeColocacion = 5 * this.listadoEstadoColocacion.length;
        }
        if (this.estadoInstalacion == 'Finalizado') {
            this.porcentajeInstalacion = 100;
        }
        else {
            this.porcentajeInstalacion = 5 * this.listadoEstadoInstalacion.length;
        }
    };
    SeguimientoComponent.prototype.cloneObjPedido = function (obj) {
        var actual = new PrimeObjPedido('', '', '', 0, 0, 0, 0, 0, 0, 0, '', new Date(), new Date(), '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    SeguimientoComponent.prototype.cloneObjFabricar = function (obj) {
        var actual = new PrimeObjFabricar('', '', '', [], [], 0, '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    SeguimientoComponent.prototype.cloneObjColocar = function (obj) {
        var actual = new PrimeObjColocar('', '', '', [], 0, '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    SeguimientoComponent.prototype.cloneObjInstalar = function (obj) {
        var actual = new PrimeObjInstalar('', '', '', '', [], 0, '', '');
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    SeguimientoComponent.prototype.cloneObjCliente = function (obj) {
        var actual = new PrimeObjCliente('', '', '', '', '', '', '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    SeguimientoComponent.prototype.cloneObjDetalle = function (obj) {
        var actual = new PrimeObjDetalle(0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    SeguimientoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'usuario-edit',
            template: __webpack_require__("../../../../../src/app/usuario/components/seguimiento/seguimiento.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_5__services_pedido_service__["a" /* PedidoService */],
                __WEBPACK_IMPORTED_MODULE_7__services_fabricar_service__["a" /* FabricarService */],
                __WEBPACK_IMPORTED_MODULE_8__services_colocar_service__["a" /* ColocarService */],
                __WEBPACK_IMPORTED_MODULE_9__services_instalar_service__["a" /* InstalarService */],
                __WEBPACK_IMPORTED_MODULE_11__services_cliente_service__["a" /* ClienteService */],
                __WEBPACK_IMPORTED_MODULE_6__services_pedidoDetalle_service__["a" /* PedidoDetalleService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_5__services_pedido_service__["a" /* PedidoService */],
            __WEBPACK_IMPORTED_MODULE_7__services_fabricar_service__["a" /* FabricarService */],
            __WEBPACK_IMPORTED_MODULE_8__services_colocar_service__["a" /* ColocarService */],
            __WEBPACK_IMPORTED_MODULE_9__services_instalar_service__["a" /* InstalarService */],
            __WEBPACK_IMPORTED_MODULE_11__services_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_6__services_pedidoDetalle_service__["a" /* PedidoDetalleService */]])
    ], SeguimientoComponent);
    return SeguimientoComponent;
}());

var PrimeObjPedido = (function () {
    function PrimeObjPedido(cliente, modelo, responsable, ancho, alto, cantidad, pvp, descuento, iva, total, descripcion, fecha, fecha_fin, estado, borrado) {
        this.cliente = cliente;
        this.modelo = modelo;
        this.responsable = responsable;
        this.ancho = ancho;
        this.alto = alto;
        this.cantidad = cantidad;
        this.pvp = pvp;
        this.descuento = descuento;
        this.iva = iva;
        this.total = total;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.fecha_fin = fecha_fin;
        this.estado = estado;
        this.borrado = borrado;
    }
    return PrimeObjPedido;
}());
var PrimeObjFabricar = (function () {
    function PrimeObjFabricar(pedido, responsable, estadoGeneral, estado, materiales, borrado, _id) {
        this.pedido = pedido;
        this.responsable = responsable;
        this.estadoGeneral = estadoGeneral;
        this.estado = estado;
        this.materiales = materiales;
        this.borrado = borrado;
        this._id = _id;
    }
    return PrimeObjFabricar;
}());
var PrimeObjColocar = (function () {
    function PrimeObjColocar(pedido, responsable, estadoGeneral, estado, borrado, _id) {
        this.pedido = pedido;
        this.responsable = responsable;
        this.estadoGeneral = estadoGeneral;
        this.estado = estado;
        this.borrado = borrado;
        this._id = _id;
    }
    return PrimeObjColocar;
}());
var PrimeObjInstalar = (function () {
    function PrimeObjInstalar(pedido, responsable, estadoGeneral, direccion, estado, borrado, imagen, _id) {
        this.pedido = pedido;
        this.responsable = responsable;
        this.estadoGeneral = estadoGeneral;
        this.direccion = direccion;
        this.estado = estado;
        this.borrado = borrado;
        this.imagen = imagen;
        this._id = _id;
    }
    return PrimeObjInstalar;
}());
var PrimeObjCliente = (function () {
    function PrimeObjCliente(ci, apellido, nombre, ciudad, direccion, telefono, email, borrado) {
        this.ci = ci;
        this.apellido = apellido;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.borrado = borrado;
    }
    return PrimeObjCliente;
}());
var PrimeObjDetalle = (function () {
    function PrimeObjDetalle(ancho, alto, cantidad, pvp, descuento, iva, total, descripcion, estado, pedido, modelo, borrado) {
        this.ancho = ancho;
        this.alto = alto;
        this.cantidad = cantidad;
        this.pvp = pvp;
        this.descuento = descuento;
        this.iva = iva;
        this.total = total;
        this.descripcion = descripcion;
        this.estado = estado;
        this.pedido = pedido;
        this.modelo = modelo;
        this.borrado = borrado;
    }
    return PrimeObjDetalle;
}());


/***/ }),

/***/ "../../../../../src/app/usuario/usuario-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__ = __webpack_require__("../../../../../src/app/usuario/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_seguimiento_seguimiento_component__ = __webpack_require__("../../../../../src/app/usuario/components/seguimiento/seguimiento.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//components


//routes
var usuarioRoutes = [
    {
        path: 'usuario-panel',
        component: __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__["a" /* MainComponent */],
        children: [
            { path: '', redirectTo: 'seguimiento', pathMatch: 'full' },
            { path: 'seguimiento', component: __WEBPACK_IMPORTED_MODULE_3__components_seguimiento_seguimiento_component__["a" /* SeguimientoComponent */] }
        ]
    }
];
var UsuarioRoutingModule = (function () {
    function UsuarioRoutingModule() {
    }
    UsuarioRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(usuarioRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], UsuarioRoutingModule);
    return UsuarioRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/usuario/usuario.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_routing_module__ = __webpack_require__("../../../../../src/app/usuario/usuario-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password__ = __webpack_require__("../../../../primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__ = __webpack_require__("../../../../primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__ = __webpack_require__("../../../../primeng/keyfilter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_progressbar__ = __webpack_require__("../../../../primeng/progressbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_main_main_component__ = __webpack_require__("../../../../../src/app/usuario/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_seguimiento_seguimiento_component__ = __webpack_require__("../../../../../src/app/usuario/components/seguimiento/seguimiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_vendedor_guard__ = __webpack_require__("../../../../../src/app/services/vendedor.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Imports modulos





//modulos ngPRIME















//prime icons fa fa-

//components


//Guards


//Decorar ngModule para cargar los componentes y la configuracion de los modulos
var UsuarioModule = (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__usuario_routing_module__["a" /* UsuarioRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__["KeyFilterModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_progressbar__["ProgressBarModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_seguimiento_seguimiento_component__["a" /* SeguimientoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_seguimiento_seguimiento_component__["a" /* SeguimientoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__services_vendedor_guard__["a" /* VendedorGuard */]
            ]
        })
    ], UsuarioModule);
    return UsuarioModule;
}());



/***/ }),

/***/ "../../../../../src/app/vendedor/components/categoria/categoria.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO CATEGORIAS\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"nombre\" header=\"Nombre\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"descripcion\" header=\"Descripcion\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n<form #registerForm=\"ngForm\" >\r\n<p-dialog header=\"Categoría Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"1000\">\r\n\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\">\r\n      <div class=\"ui-grid-col-6\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"nombre\">Nombre: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"nombre\" id=\"nombre\" [(ngModel)]=\"actual.nombre\" placeholder=\"Requerido\"\r\n                   class=\"form-control\" required/>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"descripcion\">Descripcion: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"descripcion\" id=\"descripcion\" [(ngModel)]=\"actual.descripcion\"\r\n                   placeholder=\"Requerido\" class=\"form-control\" required/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\" [disabled]=\"!registerForm.form.valid\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n              class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n    </div>\r\n  </p-footer>\r\n\r\n</p-dialog>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/vendedor/components/categoria/categoria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_categoria_service__ = __webpack_require__("../../../../../src/app/services/categoria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_categoria__ = __webpack_require__("../../../../../src/app/models/categoria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoriaComponent = (function () {
    function CategoriaComponent(_route, _router, _usuarioService, _categoriaService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._categoriaService = _categoriaService;
        this._uploadService = _uploadService;
        this.title = 'GESTION CATEGORIAS';
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_6__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
    }
    CategoriaComponent.prototype.ngOnInit = function () {
    };
    CategoriaComponent.prototype.getAll = function () {
        var _this = this;
        this._categoriaService.getAll().subscribe(function (response) {
            _this.listado = response.categorias;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    CategoriaComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.displayDialog = true;
    };
    CategoriaComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this._categoriaService.update(this.token, this.actual).subscribe(function (response) {
            if (response.categoria) {
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + JSON.stringify(response));
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.displayDialog = false;
    };
    CategoriaComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            this._categoriaService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
                    _this.getAll();
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this._categoriaService.update(this.token, this.actual).subscribe(function (response) {
                if (response.categoria) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
                    _this.getAll();
                }
                else {
                    console.log("OBJ _id: error" + JSON.stringify(response));
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.displayDialog = false;
        //this.listado = listado;
    };
    CategoriaComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    CategoriaComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_categoria__["a" /* Categoria */]('', '', 0);
        this.displayDialog = false;
    };
    CategoriaComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
    };
    CategoriaComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    CategoriaComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    CategoriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vendedor-edit',
            template: __webpack_require__("../../../../../src/app/vendedor/components/categoria/categoria.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_categoria_service__["a" /* CategoriaService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_categoria_service__["a" /* CategoriaService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]])
    ], CategoriaComponent);
    return CategoriaComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(nombre, descripcion, borrado) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.borrado = borrado;
    }
    return PrimeObj;
}());


/***/ }),

/***/ "../../../../../src/app/vendedor/components/cliente/cliente.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  word-break:break-all;\r\n}\r\n\r\n.ui-table .ui-table-tbody > tr > td,\r\n.ui-table .ui-table-tbody > tr > td {\r\n  height: 24px !important;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  word-break:break-all;\r\n}\r\n\r\n\r\n.ui-datatable thead th, .ui-datatable tbody td, .ui-datatable tfoot td {\r\n  word-break: break-all !important;\r\n}\r\n\r\n.ngCellText {\r\n  white-space: normal;\r\n}\r\n\r\n.ngCellText {\r\n  white-space: normal;\r\n}\r\n\r\n.ngColumn{\r\n  white-space: normal;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendedor/components/cliente/cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable  [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO CLIENTES\r\n        </div>\r\n      </p-header>\r\n\r\n\r\n      <p-column field=\"ci\" header=\"C.I.\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"apellido\" header=\"Apellido\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n      </p-column>\r\n      <p-column field=\"nombre\" header=\"Nombre\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n      </p-column>\r\n      <p-column field=\"ciudad\" header=\"Ciudad\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\" ></p-column>\r\n      <p-column field=\"telefono\" header=\"Teléfono\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-dialog header=\"Personal Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"1000\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\" ng-controller=\"formCtrl\">\r\n\r\n    <div class=\"ui-grid-col-6\">\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"ci\">C.I.: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <input pInputText name=\"ci\" id=\"ci\" [(ngModel)]=\"actual.ci\" placeholder=\"Requerido\" pKeyFilter=\"num\"\r\n                 required maxlength=\"13\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"apellido\">Apellido: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <input pInputText name=\"apellido\" id=\"apellido\" [(ngModel)]=\"actual.apellido\" placeholder=\"Requerido\"\r\n                 required/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"nombre\">Nombre: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <input pInputText name=\"nombre\" id=\"nombre\" [(ngModel)]=\"actual.nombre\" placeholder=\"Requerido\" required/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"ciudad\">Ciudad *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <input pInputText name=\"ciudad\" id=\"ciudad\" [(ngModel)]=\"actual.ciudad\" placeholder=\"Requerido\"\r\n                 required/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"direccion\">Dirección *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <input pInputText name=\"direccion\" id=\"direccion\" [(ngModel)]=\"actual.direccion\" placeholder=\"Requerido\"\r\n                 required/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"telefono\">Teléfono *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <input pInputText name=\"telefono\" id=\"telefono\" [(ngModel)]=\"actual.telefono\" placeholder=\"Requerido\" pKeyFilter=\"num\"\r\n                 required/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"email\">Email *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <input pInputText name=\"email\" id=\"email\" [(ngModel)]=\"actual.email\" placeholder=\"Requerido\"\r\n                 required/>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n              class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/vendedor/components/cliente/cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__ = __webpack_require__("../../../../../src/app/services/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_cliente__ = __webpack_require__("../../../../../src/app/models/cliente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClienteComponent = (function () {
    function ClienteComponent(_route, _router, _usuarioService, _clienteService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._clienteService = _clienteService;
        this._uploadService = _uploadService;
        this.title = 'GESTION CLIENTES';
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', 0);
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_6__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
    }
    ClienteComponent.prototype.ngOnInit = function () {
    };
    ClienteComponent.prototype.getAll = function () {
        var _this = this;
        this._clienteService.getAll().subscribe(function (response) {
            _this.listado = response.clientes;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    ClienteComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', 0);
        this.displayDialog = true;
    };
    ClienteComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this._clienteService.update(this.token, this.actual).subscribe(function (response) {
            if (response.cliente) {
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', 0);
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + JSON.stringify(response));
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', 0);
        this.displayDialog = false;
    };
    ClienteComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            this._clienteService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', 0);
                    _this.getAll();
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this._clienteService.update(this.token, this.actual).subscribe(function (response) {
                if (response.cliente) {
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', 0);
                    _this.getAll();
                }
                else {
                    console.log("OBJ _id: error" + JSON.stringify(response));
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', 0);
        this.displayDialog = false;
        //this.listado = listado;
    };
    ClienteComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    ClienteComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', 0);
        this.displayDialog = false;
    };
    ClienteComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
    };
    ClienteComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', '', '', '', '', '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    ClienteComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    ClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vendedor-edit',
            template: __webpack_require__("../../../../../src/app/vendedor/components/cliente/cliente.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vendedor/components/cliente/cliente.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]])
    ], ClienteComponent);
    return ClienteComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(ci, apellido, nombre, ciudad, direccion, telefono, email, borrado) {
        this.ci = ci;
        this.apellido = apellido;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.borrado = borrado;
    }
    return PrimeObj;
}());


/***/ }),

/***/ "../../../../../src/app/vendedor/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-2\">\r\n  <h4>{{title}}</h4>\r\n  <div class=\"sidebar-admin\" data-example-id=\"sample-nav-stacked\">\r\n    <ul class=\"nav nav-pills nav-stacked nav-pill-stacked-example\">\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['pedido']\">Pedidos</a>\r\n      </li>\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['cliente']\">Clientes</a>\r\n      </li>\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['modelo']\">Modelos</a>\r\n      </li>\r\n      <li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['categoria']\">Categoría</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-lg-10\">\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vendedor/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Panel de Gestión';
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vendedor-main',
            template: __webpack_require__("../../../../../src/app/vendedor/components/main/main.component.html")
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vendedor/components/modelo/modelo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt >\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO MODELOS\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"imagen\" header=\"Imagen\">\r\n        <ng-template let-col let-obj=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <span>\r\n             <img src=\"{{url + 'get-image-modelo/' + obj[col.field]}}\" width=\"150px\" height=\"150px\"/>\r\n          </span>\r\n\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"categoria.nombre\" header=\"Categoría\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"nombre\" header=\"Nombre\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"precio\" header=\"$ (m2)\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\" [style]=\"{'width':'10%'}\"></p-column>\r\n      <p-column field=\"descripcion\" header=\"Descripcion\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\" [style]=\"{'text-align':'justify'}\"  ></p-column>\r\n\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-dialog header=\"Personal Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"1000\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\" ng-controller=\"formCtrl\">\r\n\r\n    <div class=\"ui-grid-col-6\">\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label>Categroría: *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <p-autoComplete [(ngModel)]=\"categoria\" [suggestions]=\"filteredObjSingleCategoria\"\r\n                          (completeMethod)=\"filterSingleCategoria($event)\"\r\n                          field=\"nombre\" [size]=\"30\"\r\n                          placeholder=\"Categoría\" [minLength]=\"1\" [forceSelection]=\"true\">\r\n            <ng-template let-value pTemplate=\"item\">\r\n              <div>{{value.nombre }}</div>\r\n            </ng-template>\r\n          </p-autoComplete>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"nombre\">Nombre *</label></div>\r\n        <div class=\"ui-grid-col-7\"><input pInputText id=\"nombre\" [(ngModel)]=\"actual.nombre\" placeholder=\"Requerido\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"precio\">Precio *</label></div>\r\n        <div class=\"ui-grid-col-7\"><input pInputText id=\"precio\" [(ngModel)]=\"actual.precio\" placeholder=\"Requerido\"\r\n                                          pKeyFilter=\"num\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-3\"><label for=\"descripcion\">Descripción *</label></div>\r\n        <div class=\"ui-grid-col-7\">\r\n          <input pInputText name=\"descripcion\" id=\"descripcion\" [(ngModel)]=\"actual.descripcion\" placeholder=\"Requerido\"\r\n                 required/>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ui-grid-col-6\">\r\n      <div class=\"ui-grid-row\">\r\n\r\n        <div class=\"ui-grid-col-12\">\r\n\r\n\r\n          <div class=\"ui-g-12 ui-md-3\" *ngIf=\"actual.imagen && actual.imagen!='null'\"\r\n               style=\"height: 300px; width: 200px\">\r\n            <img src=\"{{url + 'get-image-modelo/' + actual.imagen}}\" width=\"300px\" height=\"250px\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-12\">\r\n          <p>\r\n            <label>Imagen:</label>\r\n            <input type=\"file\" placeholder=\"Subir imagen\" (change)=\"fileChangeEvent($event)\"/>\r\n          </p>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n              class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/vendedor/components/modelo/modelo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modelo_service__ = __webpack_require__("../../../../../src/app/services/modelo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_modelo__ = __webpack_require__("../../../../../src/app/models/modelo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_categoria_service__ = __webpack_require__("../../../../../src/app/services/categoria.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModeloComponent = (function () {
    function ModeloComponent(_route, _router, _usuarioService, _modeloService, _uploadService, _categoriaService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._modeloService = _modeloService;
        this._uploadService = _uploadService;
        this._categoriaService = _categoriaService;
        this.title = 'GESTION MODELOS';
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
        this.listado = [];
        this.getAll();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_6__services_global__["a" /* GLOBAL */].url;
        //this.actual = this.identity;
    }
    ModeloComponent.prototype.ngOnInit = function () {
    };
    ModeloComponent.prototype.getAll = function () {
        var _this = this;
        this._modeloService.getAll().subscribe(function (response) {
            _this.listado = response.modelos;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    ModeloComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
        this.displayDialog = true;
        this.categoria = null;
    };
    ModeloComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion update
        this.actual.borrado = 1;
        this._modeloService.update(this.token, this.actual).subscribe(function (response) {
            if (response.modelo) {
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + JSON.stringify(response));
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
        this.displayDialog = false;
    };
    ModeloComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        this.actual.categoria = this.categoria._id;
        if (this.newObj) {
            // funcion save
            // console.log("before: " + this.newObj + "--" + JSON.stringify(this.actual));
            this._modeloService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    console.log("before_imagen: " + response);
                    if (_this.filesToUpload.length > 0) {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-modelo/' + response.modelo._id, [], _this.filesToUpload, _this.token, 'imagen')
                            .then(function (result) {
                            _this.status = "success";
                            _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
                            _this.getAll();
                            _this.filesToUpload = new Array();
                        });
                    }
                    else {
                        _this.status = "success";
                        _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
                        _this.getAll();
                    }
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log("buuuuu");
                console.log(error);
            });
        }
        else {
            //funcion update
            this._modeloService.update(this.token, this.actual).subscribe(function (response) {
                if (response.modelo) {
                    _this.status = "success";
                    if (_this.filesToUpload) {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-modelo/' + response.modelo._id, [], _this.filesToUpload, _this.token, 'imagen')
                            .then(function (result) {
                            _this.getAll();
                            _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
                            _this.filesToUpload = null;
                        });
                    }
                    else {
                        _this.status = "success";
                        _this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
                        _this.getAll();
                    }
                }
                else {
                    console.log("OBJ _id: error" + JSON.stringify(response));
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
        this.displayDialog = false;
        //this.listado = listado;
    };
    ModeloComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    ModeloComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_4__models_modelo__["a" /* Modelo */]('', '', '', 0, '', 0);
        this.displayDialog = false;
    };
    ModeloComponent.prototype.filterSingleCategoria = function (event) {
        var _this = this;
        var query = event.query;
        this._categoriaService.getAll().subscribe(function (objs) {
            _this.filteredObjSingleCategoria = _this.filterCategoria(query, objs.categorias);
        });
    };
    ModeloComponent.prototype.filterCategoria = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.nombre.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    //FIN AUTOCOMPLETAR CATEGORIA ******************************************************************************************
    ModeloComponent.prototype.onRowSelect = function (event) {
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
        this.categoria = this.actual.categoria;
    };
    ModeloComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', '', 0, '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    ModeloComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    ModeloComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    ModeloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vendedor-edit',
            template: __webpack_require__("../../../../../src/app/vendedor/components/modelo/modelo.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_modelo_service__["a" /* ModeloService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_7__services_categoria_service__["a" /* CategoriaService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_modelo_service__["a" /* ModeloService */],
            __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_7__services_categoria_service__["a" /* CategoriaService */]])
    ], ModeloComponent);
    return ModeloComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(categoria, nombre, descripcion, precio, imagen, borrado) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.borrado = borrado;
    }
    return PrimeObj;
}());


/***/ }),

/***/ "../../../../../src/app/vendedor/components/pedido/pedido.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"100%\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"listado\" selectionMode=\"single\" [(selection)]=\"selected\" (onRowSelect)=\"onRowSelect($event)\"\r\n                 [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [globalFilter]=\"gb\" #dt>\r\n      <p-header>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n          <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\r\n                  label=\"Nuevo\"></button>\r\n\r\n          LISTADO PEDIDOS\r\n        </div>\r\n      </p-header>\r\n\r\n      <p-column field=\"descripcion\" header=\"Identificador\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"cliente\" header=\"Cliente\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n        <ng-template let-col let-obj=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{obj[col.field].apellido}} {{obj[col.field].nombre}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"total\" header=\"Total $\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n      <p-column field=\"fecha\" header=\"Fecha (d/m/y)\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\">\r\n        <ng-template let-row=\"rowData\" pTemplate=\"body\">\r\n          {{row.fecha | date:'dd/MM/yy'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"estado\" header=\"Estado\" [sortable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\"\r\n                filterMatchMode=\"contains\"></p-column>\r\n\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-dialog header=\"Pedido Detalle\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"1200\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actual\" ng-controller=\"formCtrl\">\r\n\r\n    <div class=\"12\">\r\n\r\n      <div class=\"ui-grid-col-6\">\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"></div>\r\n          <div class=\"ui-grid-col-6\" style=\"text-align: right\" align=\"right\">{{cliente ? cliente.apellido||cliente :\r\n            ''}}\r\n            {{cliente ?\r\n            cliente.nombre||cliente : ''}}\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label>Cliente: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <p-autoComplete [(ngModel)]=\"cliente\" [suggestions]=\"filteredObjSingleCliente\"\r\n                            (completeMethod)=\"filterSingleCliente($event)\"\r\n                            field=\"apellido\" [size]=\"30\"\r\n                            placeholder=\"Cliente\" [minLength]=\"1\" [forceSelection]=\"true\">\r\n              <ng-template let-value pTemplate=\"item\">\r\n                <div>{{value.apellido }} {{value.nombre }}</div>\r\n              </ng-template>\r\n            </p-autoComplete>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"descripcion\">Identificación: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"descripcion\" id=\"descripcion\" [(ngModel)]=\"actual.descripcion\"\r\n                   placeholder=\"Requerido\"\r\n                   required/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label>Responsable: *</label></div>\r\n          <div class=\"ui-grid-col-7\" style=\"text-align: left\" >{{personal ? personal.surname||personal :\r\n            ''}}\r\n            {{personal ?\r\n            personal.name||personal : ''}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"total\">TOTAL $: </label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"total\" id=\"total\" [(ngModel)]=\"actual.total\"  readonly   required/>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-col-6\">\r\n\r\n\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label>Estado: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <p-dropdown id=\"estado\" [options]=\"estados\" [(ngModel)]=\"actual.estado\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label>Fecha: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <p-calendar id=\"fecha\" [(ngModel)]=\"actual.fecha\" [showIcon]=\"true\" [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\" yearRange=\"1940:2070\" [locale]=\"es\" dateFormat=\"mm/dd/yy\"></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label>Fecha Fin (tentativo): *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <p-calendar id=\"fecha_fin\" [(ngModel)]=\"actual.fecha_fin\" [showIcon]=\"true\" [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\" yearRange=\"1940:2070\" [locale]=\"es\" dateFormat=\"mm/dd/yy\"></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-grid-col-12\">\r\n        <hr/>\r\n      </div>\r\n\r\n\r\n      <div class=\"ui-grid-col-9\">\r\n\r\n          <p-dataTable [value]=\"listadoDetalle\" selectionMode=\"single\" [(selection)]=\"selectedDetalle\" (onRowSelect)=\"onRowSelectDetalle($event)\"\r\n                       [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\">\r\n            <p-header>\r\n              <div class=\"ui-grid-col-2\">\r\n                <button type=\"button\" pButton icon=\"pi pi-plus\" style=\"float:left\" (click)=\"showDialogToAddDetalle()\"\r\n                        label=\"Nuevo\"></button>\r\n              </div>\r\n              <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                LISTADO MODELOS\r\n              </div>\r\n            </p-header>\r\n\r\n            <p-column field=\"modelo.nombre\" header=\"Modelo\" [style]=\"{'width': '40%'}\" ></p-column>\r\n            <p-column field=\"cantidad\" header=\"Cant.\"  ></p-column>\r\n            <p-column field=\"ancho\" header=\"Ancho.\"></p-column>\r\n            <p-column field=\"alto\" header=\"Alto.\" ></p-column>\r\n            <p-column field=\"descuento\" header=\"Dcto.\" ></p-column>\r\n            <p-column field=\"total\" header=\"Subtotal $\" ></p-column>\r\n          </p-dataTable>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"save()\" label=\"Guardar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteUpdate()\" label=\"Eliminar\"\r\n              class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"close()\" label=\"Cerrar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n<p-dialog header=\"Detalle Modelo\" [(visible)]=\"displayDialogDetalle\" [responsive]=\"true\" showEffect=\"fade\"\r\n          [modal]=\"true\" width=\"600\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"actualDetalle\" ng-controller=\"formCtrl\">\r\n\r\n    <div class=\"12\">\r\n      <div class=\"ui-grid-col-10\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label>Modelo: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <p-autoComplete [(ngModel)]=\"modelo\" [suggestions]=\"filteredObjSingleModelo\"\r\n                            (onSelect)=\"cambiarPrecio($event)\"\r\n                            (completeMethod)=\"filterSingleModelo($event)\"\r\n                            field=\"nombre\" [size]=\"30\"\r\n                            placeholder=\"Modelo\" [minLength]=\"1\" [forceSelection]=\"true\">\r\n              <ng-template let-value pTemplate=\"item\">\r\n                <div>{{value.nombre}} ($ {{(value.precio)}})</div>\r\n              </ng-template>\r\n            </p-autoComplete>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label>Precio: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            $ {{precioModelo}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"ancho\">Ancho: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"ancho\" id=\"ancho\" [(ngModel)]=\"actualDetalle.ancho\"\r\n                   (ngModelChange)=\"calcularTotal($event)\"\r\n                   pKeyFilter=\"num\" placeholder=\"Requerido\" required/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"alto\">Alto: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"alto\" id=\"alto\" [(ngModel)]=\"actualDetalle.alto\" (ngModelChange)=\"calcularTotal($event)\"\r\n                   pKeyFilter=\"num\" placeholder=\"Requerido\" required/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"cantidad\">Cantidad: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"cantidad\" id=\"cantidad\" [(ngModel)]=\"actualDetalle.cantidad\"\r\n                   (ngModelChange)=\"calcularTotal($event)\"\r\n                   pKeyFilter=\"num\" placeholder=\"Requerido\" required/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"pvp\">PVP: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"pvp\" id=\"pvp\" [(ngModel)]=\"actualDetalle.pvp\" placeholder=\"Requerido\" required readonly/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"descuento\">Descuento: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"descuento\" id=\"descuento\" [(ngModel)]=\"actualDetalle.descuento\"\r\n                   (ngModelChange)=\"calcularTotal($event)\"\r\n                   pKeyFilter=\"num\" placeholder=\"Requerido\" required/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"IVA\">IVA: *</label></div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <input pInputText [(ngModel)]=\"ivaPorcentaje\" (ngModelChange)=\"calcularTotal($event)\" pKeyFilter=\"num\"\r\n                   readonly/>\r\n\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            %\r\n          </div>\r\n          <div class=\"ui-grid-col-5\">\r\n            <input pInputText name=\"iva\" id=\"iva\" [(ngModel)]=\"actualDetalle.iva\" placeholder=\"Requerido\" required readonly/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-3\"><label for=\"subtotal\">Subtotal: *</label></div>\r\n          <div class=\"ui-grid-col-7\">\r\n            <input pInputText name=\"subtotal\" id=\"subtotal\" [(ngModel)]=\"actualDetalle.total\" placeholder=\"Requerido\" required\r\n                   readonly/>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"saveDetalle()\" label=\"Guardar\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteDetalle()\" label=\"Eliminar\"\r\n              class=\"ui-button-danger\" style=\"background-color: red\"></button>\r\n      <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"closeDetalle()\" label=\"Cerrar\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/vendedor/components/pedido/pedido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__ = __webpack_require__("../../../../../src/app/services/pedido.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pedidoDetalle_service__ = __webpack_require__("../../../../../src/app/services/pedidoDetalle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pedido__ = __webpack_require__("../../../../../src/app/models/pedido.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_pedidoDetalle__ = __webpack_require__("../../../../../src/app/models/pedidoDetalle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_datePipe__ = __webpack_require__("../../../../../src/app/pipes/datePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_cliente_service__ = __webpack_require__("../../../../../src/app/services/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_modelo_service__ = __webpack_require__("../../../../../src/app/services/modelo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_personal_service__ = __webpack_require__("../../../../../src/app/services/personal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_iva_service__ = __webpack_require__("../../../../../src/app/services/iva.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PedidoComponent = (function () {
    function PedidoComponent(_route, _router, _usuarioService, _pedidoService, _pedidoDetalleService, _uploadService, _clienteService, _modeloService, _personalService, _ivaService) {
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this._pedidoService = _pedidoService;
        this._pedidoDetalleService = _pedidoDetalleService;
        this._uploadService = _uploadService;
        this._clienteService = _clienteService;
        this._modeloService = _modeloService;
        this._personalService = _personalService;
        this._ivaService = _ivaService;
        this.title = 'GESTION PEDIDOS';
        this.actual = new __WEBPACK_IMPORTED_MODULE_5__models_pedido__["a" /* Pedido */]('', '', 0, '', new Date(), new Date(), '', 0);
        this.actualDetalle = new __WEBPACK_IMPORTED_MODULE_6__models_pedidoDetalle__["a" /* PedidoDetalle */](0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0);
        this.listado = [];
        this.listadoDetalle = [];
        this.listadoDetalleEliminados = [];
        this.listadoIva = [];
        this.getAll();
        this.getIvaPorcentaje();
        this.identity = this._usuarioService.getIdentity();
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_8__services_global__["a" /* GLOBAL */].url;
        this.estados = [
            { label: "Proceso", value: "Proceso" },
            { label: "Finalizado", value: "Finalizado" },
            { label: "Paralizado", value: "Paralizado" }
        ];
    }
    PedidoComponent.prototype.ngOnInit = function () {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            today: 'Hoy',
            clear: 'Borrar',
            dateFormat: 'mm/dd/yy'
        };
    };
    PedidoComponent.prototype.getAll = function () {
        var _this = this;
        this._pedidoService.getAll().subscribe(function (response) {
            _this.listado = response.pedidos;
            console.log(_this.listado);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    PedidoComponent.prototype.getIvaPorcentaje = function () {
        var _this = this;
        this._ivaService.getAll().subscribe(function (response) {
            _this.listadoIva = response.ivas;
            _this.ivaPorcentaje = _this.listadoIva[0].valor;
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    PedidoComponent.prototype.showDialogToAdd = function () {
        this.newObj = true;
        this.actual = new __WEBPACK_IMPORTED_MODULE_5__models_pedido__["a" /* Pedido */]('', '', 0, '', new Date(), new Date(), '', 0);
        this.displayDialog = true;
        this.cliente = null;
        this.modelo = null;
        this.personal = this.identity;
        this.listadoDetalle = [];
        this.listadoDetalleEliminados = [];
    };
    PedidoComponent.prototype.deleteUpdate = function () {
        var _this = this;
        //funcion delete
        this.actual.borrado = 1;
        //this.actualDetalle.modelo = this.modelo._id;
        this.actual.responsable = this.personal._id;
        this.actual.cliente = this.cliente;
        this._pedidoService.update(this.token, this.actual).subscribe(function (response) {
            if (response.pedido) {
                _this.status = "success";
                _this.actual = new __WEBPACK_IMPORTED_MODULE_5__models_pedido__["a" /* Pedido */]('', '', 0, '', new Date(), new Date(), '', 0);
                _this.getAll();
            }
            else {
                console.log("OBJ _id: error" + JSON.stringify(response));
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
        this.actual = new __WEBPACK_IMPORTED_MODULE_5__models_pedido__["a" /* Pedido */]('', '', 0, '', new Date(), new Date(), '', 0);
        this.displayDialog = false;
    };
    PedidoComponent.prototype.save = function () {
        var _this = this;
        var listado = this.listado.slice();
        if (this.newObj) {
            // funcion save
            this.actual.responsable = this.personal._id;
            this.actual.cliente = this.cliente;
            this.actual.estado = 'Proceso';
            console.log("pedido: " + JSON.stringify(this.actual));
            this._pedidoService.save(this.token, this.actual).subscribe(function (response) {
                if (response) {
                    for (var i = 0; i < _this.listadoDetalle.length; i++) {
                        var obj = void 0;
                        obj = _this.listadoDetalle[i];
                        obj.pedido = response.pedido._id;
                        _this.saveDetalleDB(obj);
                    }
                    _this.listadoDetalle = [];
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_5__models_pedido__["a" /* Pedido */]('', '', 0, '', new Date(), new Date(), '', 0);
                    _this.getAll();
                    //listado.push(this.actual);
                }
                else {
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            //funcion update
            this.actual.responsable = this.personal._id;
            this.actual.cliente = this.cliente;
            this.actual.estado = 'Proceso';
            this._pedidoService.update(this.token, this.actual).subscribe(function (response) {
                if (response.pedido) {
                    for (var i = 0; i < _this.listadoDetalle.length; i++) {
                        var obj = void 0;
                        obj = _this.listadoDetalle[i];
                        if (obj.pedido == '' || obj.pedido == null) {
                            obj.pedido = response.pedido._id;
                            _this.saveDetalleDB(obj);
                        }
                        else {
                            _this.updateDetalleDB(obj);
                        }
                    }
                    for (var i = 0; i < _this.listadoDetalleEliminados.length; i++) {
                        var obj = void 0;
                        obj = _this.listadoDetalle[i];
                        _this.deleteDetalleDb(obj);
                    }
                    _this.listadoDetalle = [];
                    _this.listadoDetalleEliminados = [];
                    _this.status = "success";
                    _this.actual = new __WEBPACK_IMPORTED_MODULE_5__models_pedido__["a" /* Pedido */]('', '', 0, '', new Date(), new Date(), '', 0);
                    _this.getAll();
                }
                else {
                    console.log("OBJ _id: error" + JSON.stringify(response));
                    _this.status = "error";
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.actual = new __WEBPACK_IMPORTED_MODULE_5__models_pedido__["a" /* Pedido */]('', '', 0, '', new Date(), new Date(), '', 0);
        this.displayDialog = false;
        //this.listado = listado;
    };
    PedidoComponent.prototype.saveDetalleDB = function (obj) {
        var _this = this;
        // funcion save
        var objStored = obj;
        objStored.estado = 'Proceso';
        this._pedidoDetalleService.save(this.token, objStored).subscribe(function (response) {
            if (response) {
                _this.status = "success";
            }
            else {
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
    };
    PedidoComponent.prototype.updateDetalleDB = function (obj) {
        var _this = this;
        // funcion update
        var objStored = obj;
        objStored.estado = 'Proceso';
        this._pedidoDetalleService.update(this.token, objStored).subscribe(function (response) {
            if (response) {
                _this.status = "success";
            }
            else {
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
    };
    PedidoComponent.prototype.deleteDetalleDb = function (obj) {
        var _this = this;
        // funcion delete
        var objStored = obj;
        this._pedidoDetalleService.delete(this.token, objStored).subscribe(function (response) {
            if (response) {
                _this.status = "success";
            }
            else {
                _this.status = "error";
            }
        }, function (error) {
            console.log(error);
        });
    };
    PedidoComponent.prototype.filterSingleCliente = function (event) {
        var _this = this;
        var query = event.query;
        this._clienteService.getAll().subscribe(function (objs) {
            //var auxObjs = objs;
            _this.filteredObjSingleCliente = _this.filterCliente(query, objs.clientes);
        });
    };
    PedidoComponent.prototype.filterCliente = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var cliente = objs[i];
            if (cliente.apellido.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(cliente);
            }
        }
        return filtered;
    };
    PedidoComponent.prototype.filterSingleModelo = function (event) {
        var _this = this;
        var query = event.query;
        this._modeloService.getAll().subscribe(function (objs) {
            _this.filteredObjSingleModelo = _this.filterModelo(query, objs.modelos);
        });
    };
    PedidoComponent.prototype.filterModelo = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.nombre.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    PedidoComponent.prototype.filterSinglePersonal = function (event) {
        var _this = this;
        var query = event.query;
        this._usuarioService.getAll().subscribe(function (objs) {
            _this.filteredObjSinglePersonal = _this.filterPersonal(query, objs.users);
        });
    };
    PedidoComponent.prototype.filterPersonal = function (query, objs) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            if (obj.surname.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(obj);
            }
        }
        return filtered;
    };
    //FIN AUTOCOMPLETAR PERSONAL RESPONSABLE ******************************************************************************************
    // INICIO funciones pedido cab ***************************************************************************************
    PedidoComponent.prototype.delete = function () {
        var index = this.findSelectedIndex();
        this.listado = this.listado.filter(function (val, i) { return i != index; });
        this.actual = null;
        this.displayDialog = false;
    };
    PedidoComponent.prototype.close = function () {
        this.actual = new __WEBPACK_IMPORTED_MODULE_5__models_pedido__["a" /* Pedido */]('', '', 0, '', new Date(), new Date(), '', 0);
        this.displayDialog = false;
        this.getAll();
    };
    PedidoComponent.prototype.getAllByPedido = function (id) {
        var _this = this;
        this._pedidoDetalleService.getAllByPedido(id).subscribe(function (response) {
            _this.listadoDetalle = response.pedidoDetalles;
            console.log(_this.listadoDetalle);
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    PedidoComponent.prototype.onRowSelect = function (event) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_9__pipes_datePipe__["a" /* dateFormatPipe */]();
        event.data['fecha'] = datePipe.transform(event.data['fecha']);
        event.data['fecha_fin'] = datePipe.transform(event.data['fecha_fin']);
        console.log("PEDIDO: " + JSON.stringify(event.data['_id']));
        this.newObj = false;
        this.actual = this.cloneObj(event.data);
        this.displayDialog = true;
        this.cliente = this.actual.cliente;
        //this.modelo = this.actualDetalle.modelo;
        //this.precioModelo = this.modelo.precio;
        this.personal = this.actual.responsable;
        this.getAllByPedido(event.data['_id']);
    };
    PedidoComponent.prototype.cloneObj = function (obj) {
        var actual = new PrimeObj('', '', '', 0, new Date(), new Date(), '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    PedidoComponent.prototype.findSelectedIndex = function () {
        return this.listado.indexOf(this.selected);
    };
    //FIN funciones detalle cab ******************************************************************************************
    // INICIO funciones pedido DETALLE ***************************************************************************************
    PedidoComponent.prototype.showDialogToAddDetalle = function () {
        this.newObjDetalle = true;
        this.actualDetalle = new __WEBPACK_IMPORTED_MODULE_6__models_pedidoDetalle__["a" /* PedidoDetalle */](0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0);
        this.displayDialogDetalle = true;
        this.modelo = null;
    };
    PedidoComponent.prototype.saveDetalle = function () {
        var detalles = this.listadoDetalle.slice();
        if (this.controlSaveDetalle()) {
            this.actualDetalle.modelo = this.modelo;
            if (this.newObjDetalle) {
                detalles.push(this.actualDetalle);
            }
            else {
                detalles[this.listadoDetalle.indexOf(this.selectedDetalle)] = this.actualDetalle;
            }
        }
        this.precioModelo = 0;
        this.actualDetalle = new __WEBPACK_IMPORTED_MODULE_6__models_pedidoDetalle__["a" /* PedidoDetalle */](0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0);
        this.modelo = null;
        this.listadoDetalle = detalles;
        this.displayDialogDetalle = false;
        this.calcularTotalGeneral();
    };
    PedidoComponent.prototype.controlSaveDetalle = function () {
        if (this.actualDetalle.ancho == 0 ||
            this.actualDetalle.alto == 0 ||
            this.actualDetalle.cantidad == 0) {
            return false;
        }
        return true;
    };
    PedidoComponent.prototype.deleteDetalle = function () {
        this.listadoDetalleEliminados.push(this.selectedDetalle);
        var index = this.findSelectedIndexDetalle();
        this.listadoDetalle = this.listadoDetalle.filter(function (val, i) { return i != index; });
        this.actualDetalle = null;
        this.displayDialogDetalle = false;
        this.calcularTotalGeneral();
    };
    PedidoComponent.prototype.closeDetalle = function () {
        this.actualDetalle = new __WEBPACK_IMPORTED_MODULE_6__models_pedidoDetalle__["a" /* PedidoDetalle */](0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0);
        this.displayDialogDetalle = false;
        this.getAll();
    };
    PedidoComponent.prototype.onRowSelectDetalle = function (event) {
        this.newObjDetalle = false;
        this.actualDetalle = this.cloneObjDetalle(event.data);
        this.displayDialogDetalle = true;
        this.modelo = this.actualDetalle.modelo;
        this.precioModelo = this.modelo.precio;
    };
    PedidoComponent.prototype.cloneObjDetalle = function (obj) {
        var actual = new PrimeObjDetalle(0, 0, 0, 0, 0, 0, 0, '', '', '', '', 0);
        for (var prop in obj) {
            actual[prop] = obj[prop];
        }
        return actual;
    };
    PedidoComponent.prototype.findSelectedIndexDetalle = function () {
        return this.listadoDetalle.indexOf(this.selectedDetalle);
    };
    PedidoComponent.prototype.calcularTotal = function (event) {
        var pvp_aux = (this.actualDetalle.ancho * this.actualDetalle.alto * this.actualDetalle.cantidad * this.precioModelo);
        var iva_aux = ((pvp_aux - this.actualDetalle.descuento) * this.ivaPorcentaje / 100);
        var total_aux = ((pvp_aux - this.actualDetalle.descuento) + iva_aux);
        this.actualDetalle.pvp = pvp_aux.toFixed(2);
        this.actualDetalle.iva = iva_aux.toFixed(2);
        this.actualDetalle.total = total_aux.toFixed(2);
    };
    PedidoComponent.prototype.cambiarPrecio = function (event) {
        //console.log("obj " + JSON.stringify(event));
        this.precioModelo = event.precio;
        this.calcularTotal(event);
    };
    PedidoComponent.prototype.calcularTotalGeneral = function () {
        var tot = 0;
        var obj;
        for (var i = 0; i < this.listadoDetalle.length; i++) {
            obj = this.listadoDetalle[i];
            tot = Number(tot) + Number(obj.total);
        }
        this.actual.total = tot.toFixed(2);
    };
    PedidoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vendedor-edit',
            template: __webpack_require__("../../../../../src/app/vendedor/components/pedido/pedido.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__["a" /* PedidoService */],
                __WEBPACK_IMPORTED_MODULE_4__services_pedidoDetalle_service__["a" /* PedidoDetalleService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_7__services_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_10__services_cliente_service__["a" /* ClienteService */],
                __WEBPACK_IMPORTED_MODULE_11__services_modelo_service__["a" /* ModeloService */],
                __WEBPACK_IMPORTED_MODULE_12__services_personal_service__["a" /* PersonalService */],
                __WEBPACK_IMPORTED_MODULE_13__services_iva_service__["a" /* IvaService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__["a" /* PedidoService */],
            __WEBPACK_IMPORTED_MODULE_4__services_pedidoDetalle_service__["a" /* PedidoDetalleService */],
            __WEBPACK_IMPORTED_MODULE_7__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_10__services_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_11__services_modelo_service__["a" /* ModeloService */],
            __WEBPACK_IMPORTED_MODULE_12__services_personal_service__["a" /* PersonalService */],
            __WEBPACK_IMPORTED_MODULE_13__services_iva_service__["a" /* IvaService */]])
    ], PedidoComponent);
    return PedidoComponent;
}());

var PrimeObj = (function () {
    function PrimeObj(cliente, responsable, total, descripcion, fecha, fecha_fin, estado, borrado) {
        this.cliente = cliente;
        this.responsable = responsable;
        this.total = total;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.fecha_fin = fecha_fin;
        this.estado = estado;
        this.borrado = borrado;
    }
    return PrimeObj;
}());
var PrimeObjDetalle = (function () {
    function PrimeObjDetalle(ancho, alto, cantidad, pvp, descuento, iva, total, descripcion, estado, pedido, modelo, borrado) {
        this.ancho = ancho;
        this.alto = alto;
        this.cantidad = cantidad;
        this.pvp = pvp;
        this.descuento = descuento;
        this.iva = iva;
        this.total = total;
        this.descripcion = descripcion;
        this.estado = estado;
        this.pedido = pedido;
        this.modelo = modelo;
        this.borrado = borrado;
    }
    return PrimeObjDetalle;
}());


/***/ }),

/***/ "../../../../../src/app/vendedor/vendedor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendedorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vendedor_guard__ = __webpack_require__("../../../../../src/app/services/vendedor.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__ = __webpack_require__("../../../../../src/app/vendedor/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_categoria_categoria_component__ = __webpack_require__("../../../../../src/app/vendedor/components/categoria/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_modelo_modelo_component__ = __webpack_require__("../../../../../src/app/vendedor/components/modelo/modelo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cliente_cliente_component__ = __webpack_require__("../../../../../src/app/vendedor/components/cliente/cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pedido_pedido_component__ = __webpack_require__("../../../../../src/app/vendedor/components/pedido/pedido.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//components





//routes
var vendedorRoutes = [
    {
        path: 'vendedor-panel',
        component: __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__["a" /* MainComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_vendedor_guard__["a" /* VendedorGuard */]],
        children: [
            { path: '', redirectTo: 'modelo', pathMatch: 'full' },
            { path: 'pedido', component: __WEBPACK_IMPORTED_MODULE_7__components_pedido_pedido_component__["a" /* PedidoComponent */] },
            { path: 'categoria', component: __WEBPACK_IMPORTED_MODULE_4__components_categoria_categoria_component__["a" /* CategoriaComponent */] },
            { path: 'cliente', component: __WEBPACK_IMPORTED_MODULE_6__components_cliente_cliente_component__["a" /* ClienteComponent */] },
            { path: 'modelo', component: __WEBPACK_IMPORTED_MODULE_5__components_modelo_modelo_component__["a" /* ModeloComponent */] }
        ]
    }
];
var VendedorRoutingModule = (function () {
    function VendedorRoutingModule() {
    }
    VendedorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(vendedorRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], VendedorRoutingModule);
    return VendedorRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/vendedor/vendedor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendedorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendedor_routing_module__ = __webpack_require__("../../../../../src/app/vendedor/vendedor-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password__ = __webpack_require__("../../../../primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__ = __webpack_require__("../../../../primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__ = __webpack_require__("../../../../primeng/keyfilter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__ = __webpack_require__("../../../../../src/app/vendedor/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_categoria_categoria_component__ = __webpack_require__("../../../../../src/app/vendedor/components/categoria/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_modelo_modelo_component__ = __webpack_require__("../../../../../src/app/vendedor/components/modelo/modelo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cliente_cliente_component__ = __webpack_require__("../../../../../src/app/vendedor/components/cliente/cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pedido_pedido_component__ = __webpack_require__("../../../../../src/app/vendedor/components/pedido/pedido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_vendedor_guard__ = __webpack_require__("../../../../../src/app/services/vendedor.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Imports modulos





//modulos ngPRIME














//prime icons fa fa-

//components





//Guards


//Decorar ngModule para cargar los componentes y la configuracion de los modulos
var VendedorModule = (function () {
    function VendedorModule() {
    }
    VendedorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__vendedor_routing_module__["a" /* VendedorRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__["KeyFilterModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_categoria_categoria_component__["a" /* CategoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_modelo_modelo_component__["a" /* ModeloComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_cliente_cliente_component__["a" /* ClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_pedido_pedido_component__["a" /* PedidoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_categoria_categoria_component__["a" /* CategoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_modelo_modelo_component__["a" /* ModeloComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_cliente_cliente_component__["a" /* ClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_pedido_pedido_component__["a" /* PedidoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__services_vendedor_guard__["a" /* VendedorGuard */]
            ]
        })
    ], VendedorModule);
    return VendedorModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-SG": "../../../../moment/locale/en-SG.js",
	"./en-SG.js": "../../../../moment/locale/en-SG.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./ga": "../../../../moment/locale/ga.js",
	"./ga.js": "../../../../moment/locale/ga.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it-ch": "../../../../moment/locale/it-ch.js",
	"./it-ch.js": "../../../../moment/locale/it-ch.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ku": "../../../../moment/locale/ku.js",
	"./ku.js": "../../../../moment/locale/ku.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map