(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~back-office-layouts-admin-layout-admin-layout-module~front-office-client-layout-client-layout-module"], {
    /***/
    "Iab2":
    /*!*******************************************************!*\
      !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Iab2(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      (function (a, b) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
      })(this, function () {
        "use strict";

        function b(a, b) {
          return "undefined" == typeof b ? b = {
            autoBom: !1
          } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
          }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
            type: a.type
          }) : a;
        }

        function c(a, b, c) {
          var d = new XMLHttpRequest();
          d.open("GET", a), d.responseType = "blob", d.onload = function () {
            g(d.response, b, c);
          }, d.onerror = function () {
            console.error("could not download file");
          }, d.send();
        }

        function d(a) {
          var b = new XMLHttpRequest();
          b.open("HEAD", a, !1);

          try {
            b.send();
          } catch (a) {}

          return 200 <= b.status && 299 >= b.status;
        }

        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent("click"));
          } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
          }
        }

        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
            a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
            g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
          var i = f.URL || f.webkitURL,
              j = document.createElement("a");
          g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
            i.revokeObjectURL(j.href);
          }, 4E4), setTimeout(function () {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
          if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function () {
              e(i);
            });
          }
        } : function (b, d, e, g) {
          if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
          var h = "application/octet-stream" === b.type,
              i = /constructor/i.test(f.HTMLElement) || f.safari,
              j = /CriOS\/[\d]+/.test(navigator.userAgent);

          if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function () {
              var a = k.result;
              a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
            }, k.readAsDataURL(b);
          } else {
            var l = f.URL || f.webkitURL,
                m = l.createObjectURL(b);
            g ? g.location = m : location.href = m, g = null, setTimeout(function () {
              l.revokeObjectURL(m);
            }, 4E4);
          }
        });
        f.saveAs = g.saveAs = g, true && (module.exports = g);
      }); //# sourceMappingURL=FileSaver.min.js.map

      /***/

    },

    /***/
    "NMxE":
    /*!***********************************************************!*\
      !*** ./src/app/services/management/management.service.ts ***!
      \***********************************************************/

    /*! exports provided: ManagementService */

    /***/
    function NMxE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagementService", function () {
        return ManagementService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var ManagementService = /*#__PURE__*/function () {
        function ManagementService(http) {
          _classCallCheck(this, ManagementService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        }

        _createClass(ManagementService, [{
          key: "createTask",
          value: function createTask(task) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/modelTask/create', task, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateTask",
          value: function updateTask(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/modelTask/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getTasks",
          value: function getTasks() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/modelTask', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getoneTask",
          value: function getoneTask(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/modelTask/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateService",
          value: function updateService(id, service) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/service/updateService/' + id, service, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateGroupe",
          value: function updateGroupe(id, service) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/service/' + id, service, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "createServiceModel",
          value: function createServiceModel(model) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/modelService/create', model, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getModelServices",
          value: function getModelServices() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/modelService', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateModelService",
          value: function updateModelService(serviceName, docList) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            var body = {
              'docsList': docList
            };
            console.log(docList);
            return this.http.put(this.baseUrl + '/api/modelService/editByName/' + serviceName, body, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "dleteoneTaskFrommodelservice",
          value: function dleteoneTaskFrommodelservice(Idtask, idservice) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/modelService/editbytask/' + idservice, {
              Idtask: Idtask
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteModelService",
          value: function deleteModelService(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http["delete"](this.baseUrl + '/api/modelService/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "createService",
          value: function createService(service) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/service/create', service, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getServices",
          value: function getServices() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/service', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getYearsFromServices",
          value: function getYearsFromServices() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/service/getYears', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneService",
          value: function getOneService(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/service/getbyId/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getServicesByYear",
          value: function getServicesByYear(year) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/service/getServicesByYear/' + year, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getServicesByIds",
          value: function getServicesByIds(ids) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/service/getServicesByIds/' + ids, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getServicesByClientId",
          value: function getServicesByClientId(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/service/getServicesByClientId/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getServicesForbillByIds",
          value: function getServicesForbillByIds(ids) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/service/getServicesForbillByIds/' + ids, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteServicecomentaire",
          value: function deleteServicecomentaire(id, comentaire) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/service/' + id, comentaire, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteService",
          value: function deleteService(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http["delete"](this.baseUrl + '/api/service/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "UpdateBilledStatus",
          value: function UpdateBilledStatus(ids) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/service/UpdateBilledStatus/' + ids, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "Updatecommentaire",
          value: function Updatecommentaire(id, commentaire) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/service/Updatecomentaire/' + id, commentaire, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "Deletecommentaire",
          value: function Deletecommentaire(id, commentaire) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/service/deleteComntaire/' + id, commentaire, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "downloadDoc",
          value: function downloadDoc(file) {
            this.loadToken();
            var body = {
              filename: file
            };
            return this.http.post(this.baseUrl + '/api/documents/download', body, {
              responseType: 'blob',
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateMontant",
          value: function updateMontant(id, montant) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            var body = {
              'montant': montant
            };
            return this.http.put(this.baseUrl + '/api/service/updateMontant/' + id, body, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          } /////////////////////////
          ////////////////////////

        }, {
          key: "createTimesheet",
          value: function createTimesheet(four) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.post(this.baseUrl + '/api/timesheet/create', four, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getTimesheet",
          value: function getTimesheet(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.get(this.baseUrl + '/api/timesheet/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getTimesheetsByYear",
          value: function getTimesheetsByYear(year, user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/timesheet/getTimesheetsByYear/' + year + '/' + user, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getTimesheetsByMonth",
          value: function getTimesheetsByMonth(year, user, month) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/timesheet/getTimesheetsByMonth/' + year + '/' + user + '/' + month, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateTimesheet",
          value: function updateTimesheet(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/timesheet/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteTimesheet",
          value: function deleteTimesheet(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http["delete"](this.baseUrl + '/api/timesheet/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            var token = localStorage.getItem('id_token');
            this.authToken = token;
          }
        }, {
          key: "UpdateModelServicesbyuser",
          value: function UpdateModelServicesbyuser(obj) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            return this.http.put(this.baseUrl + '/api/modelService/' + obj.id, obj, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getNote",
          value: function getNote() {
            return this.http.get(this.baseUrl + '/api/Notes', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }]);

        return ManagementService;
      }();

      ManagementService.ɵfac = function ManagementService_Factory(t) {
        return new (t || ManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ManagementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ManagementService,
        factory: ManagementService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~back-office-layouts-admin-layout-admin-layout-module~front-office-client-layout-client-layout-module-es5.js.map