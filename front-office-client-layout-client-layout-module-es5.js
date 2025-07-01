(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-office-client-layout-client-layout-module"], {
    /***/
    "4bTy":
    /*!*******************************************************!*\
      !*** ./src/app/front-office/bills/bills.component.ts ***!
      \*******************************************************/

    /*! exports provided: BillsComponent */

    /***/
    function bTy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillsComponent", function () {
        return BillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BillsComponent = /*#__PURE__*/function () {
        function BillsComponent() {
          _classCallCheck(this, BillsComponent);
        }

        _createClass(BillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BillsComponent;
      }();

      BillsComponent.ɵfac = function BillsComponent_Factory(t) {
        return new (t || BillsComponent)();
      };

      BillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BillsComponent,
        selectors: [["app-bills"]],
        decls: 2,
        vars: 0,
        template: function BillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " bills works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LW9mZmljZS9iaWxscy9iaWxscy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bills',
            templateUrl: './bills.component.html',
            styleUrls: ['./bills.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "HvEi":
    /*!*********************************************************************!*\
      !*** ./src/app/front-office/client-layout/client-layout.routing.ts ***!
      \*********************************************************************/

    /*! exports provided: ClientLayoutRoutes */

    /***/
    function HvEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientLayoutRoutes", function () {
        return ClientLayoutRoutes;
      });
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../home/home.component */
      "vo3W");
      /* harmony import */


      var _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../messervices/messervices.component */
      "xyaa");
      /* harmony import */


      var _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../front-office/messervices/client-docs/client-docs.component */
      "dDWB");
      /* harmony import */


      var _profil_client_profil_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../profil-client/profil-client.component */
      "nZgt");
      /* harmony import */


      var _feedbackclient_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../feedbackclient/feedback.component */
      "HxRH");

      var ClientLayoutRoutes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
        data: {
          title: 'Accueil'
        }
      }, {
        path: 'myservices',
        component: _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_1__["MesservicesComponent"],
        data: {
          title: 'Mes services'
        }
      }, {
        path: 'docs',
        component: _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_2__["ClientDocsComponent"],
        data: {
          title: 'Documents'
        }
      }, {
        path: 'clientprofile',
        component: _profil_client_profil_client_component__WEBPACK_IMPORTED_MODULE_3__["ProfilClientComponent"],
        data: {
          title: 'Documents'
        }
      }, {
        path: 'clientfedback',
        component: _feedbackclient_feedback_component__WEBPACK_IMPORTED_MODULE_4__["feedbackComponent"],
        data: {
          title: 'Feedback'
        }
      }];
      /***/
    },

    /***/
    "HxRH":
    /*!*******************************************************************!*\
      !*** ./src/app/front-office/feedbackclient/feedback.component.ts ***!
      \*******************************************************************/

    /*! exports provided: feedbackComponent */

    /***/
    function HxRH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "feedbackComponent", function () {
        return feedbackComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/admin/admin.service */
      "VKgo");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-file-upload */
      "pYyI");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = ["closeModal"];

      function feedbackComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sujet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function feedbackComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r18.Sujet, " ");
        }
      }

      function feedbackComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function feedbackComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r19.descriptionsujet, "");
        }
      }

      function feedbackComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date de soumission ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function feedbackComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, data_r20.createdAt, "dd/MM/yyyy HH:mm"), "");
        }
      }

      function feedbackComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function feedbackComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function feedbackComponent_td_27_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var data_r21 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.detailmessage(data_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function feedbackComponent_td_27_Template_span_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var data_r21 = ctx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24["delete"](data_r21._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function feedbackComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 57);
        }
      }

      function feedbackComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 58);
        }
      }

      function feedbackComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le Sujet est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function feedbackComponent_div_55_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function feedbackComponent_div_55_div_2_Template_i_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var item_r27 = ctx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.removeFile(item_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/img/", item_r27 == null ? null : item_r27.file == null ? null : item_r27.file.name.split(".").pop(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27 == null ? null : item_r27.file == null ? null : item_r27.file.name.split(".")[0]);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "width": a0
        };
      };

      function feedbackComponent_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, feedbackComponent_div_55_div_2_Template, 6, 2, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Avancement d'upload: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.uploader.queue)("ngForTrackBy", ctx_r12.trackByUploaderItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r12.uploader.progress + "%"));
        }
      }

      function feedbackComponent_span_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cliquer ou faire glisser les fichiers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function feedbackComponent_button_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function feedbackComponent_button_59_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.uploader.clearQueue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Effacer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r15.submited);
        }
      }

      function feedbackComponent_i_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 69);
        }
      }

      function feedbackComponent_ng_container_76_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, msg_r33.date, "dd/MM/yyyy HH:mm"), " ", msg_r33.reponse, " ");
        }
      }

      function feedbackComponent_ng_container_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, feedbackComponent_ng_container_76_div_1_Template, 3, 5, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.message)("ngForTrackBy", ctx_r17.trackByMessage);
        }
      }

      var _c2 = function _c2() {
        return [5, 10, 20];
      };

      var _c3 = function _c3(a0) {
        return {
          "another-file-over-class": a0
        };
      };

      var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].uri;

      var feedbackComponent = /*#__PURE__*/function () {
        function feedbackComponent(adminService, AuthService, fb, changeDetectorRef, sanitizer, snackBar) {
          var _this = this;

          _classCallCheck(this, feedbackComponent);

          this.adminService = adminService;
          this.AuthService = AuthService;
          this.fb = fb;
          this.changeDetectorRef = changeDetectorRef;
          this.sanitizer = sanitizer;
          this.snackBar = snackBar;
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploader"]({
            url: uri,
            removeAfterUpload: true,
            allowedFileType: ['image', 'doc', 'pdf', 'xls', 'ppt']
          });
          this.hasBaseDropZoneOver = false;
          this.hasAnotherDropZoneOver = false;
          this.submited = false;
          this.removing = false;
          this.userfeedback = [];
          this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
          this.message = [];
          this.displayedColumns = ['Libelle', 'Description', 'Date', 'Etat'];
          this.docList = [];

          this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
          };

          this.uploader.onAfterAddingFile = function (fileItem) {
            _this.filePreviewPath = _this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileItem._file));
          };

          this.formclinet = this.fb.group({
            Sujet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            descriptionsujet: ''
          });
          this.formreponse = this.fb.group({
            reponsesujet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
          });
        }

        _createClass(feedbackComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchuserfeedbackData();
          }
        }, {
          key: "fileOverBase",
          value: function fileOverBase(e) {
            this.hasBaseDropZoneOver = e;
          }
        }, {
          key: "fileOverAnother",
          value: function fileOverAnother(e) {
            this.hasAnotherDropZoneOver = e;
          }
        }, {
          key: "rotateArrow",
          value: function rotateArrow(section, action) {
            var files = document.getElementById(section);

            if (!files.classList.contains('down')) {
              files.classList.add('down');
            } else {
              files.classList.remove('down');
            }
          }
        }, {
          key: "removeFile",
          value: function removeFile(item) {
            var _this2 = this;

            this.removing = true;
            item.remove();
            setTimeout(function () {
              _this2.removing = false;
            }, 500);
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "fetchuserfeedbackData",
          value: function fetchuserfeedbackData() {
            var _this3 = this;

            var id = this.AuthService.getIdfromToken();
            this.adminService.getFeedbacksclient().subscribe(function (res) {
              res = res.filter(function (data) {
                return data.ClineId == id;
              });
              _this3.MyDataSourceclient = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
              _this3.MyDataSourceclient.data = res;
              _this3.MyDataSourceclient.paginator = _this3.paginator;
              _this3.MyDataSourceclient.sort = _this3.sort;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "detailmessage",
          value: function detailmessage(message) {
            this.selectedfeedback = message._id;
            this.message = message.reponse;
            console.log(this.message);
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(filterValue) {
            this.MyDataSourceclient.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "onSubmitclientfeedback",
          value: function onSubmitclientfeedback() {
            var _this4 = this;

            console.log(this.formclinet.value);

            if (this.formclinet.valid) {
              this.submited = true;

              if (this.uploader.queue.length > 0) {
                for (var i = 0; i < this.uploader.queue.length; i++) {
                  this.uploader.queue[i].upload();

                  this.uploader.onCompleteItem = function (item, response, status, headers) {
                    if (response) _this4.docList.push(JSON.parse(response).uploadname);else {
                      _this4.snackBar.open('Une erreur c\'est produit verifier votre connection', 'X', {
                        duration: 6000,
                        verticalPosition: 'top',
                        panelClass: ['custom-snack-error']
                      });
                    }
                  };
                }
              }

              var feedback = this.formclinet.value;

              if (this.uploader.queue.length > 0) {
                this.uploader.onCompleteAll = function () {
                  feedback.files = _this4.docList;

                  _this4.adminService.addFeedbackclient(feedback).subscribe(function (data) {
                    if (data.success) {
                      _this4.fetchuserfeedbackData();

                      _this4.snackBar.open(data.msg, 'X', {
                        duration: 6000,
                        verticalPosition: 'top',
                        panelClass: ['custom-snack']
                      });

                      _this4.closeModal.nativeElement.click(); //<-- here


                      _this4.formclinet.reset();
                    } else {
                      _this4.snackBar.open(data.msg, 'X', {
                        duration: 6000,
                        verticalPosition: 'top',
                        panelClass: ['custom-snack-error']
                      });
                    }

                    _this4.submited = false;
                  });
                };
              } else {
                this.adminService.addFeedbackclient(feedback).subscribe(function (data) {
                  if (data.success) {
                    _this4.fetchuserfeedbackData();

                    _this4.snackBar.open(data.msg, 'X', {
                      duration: 6000,
                      verticalPosition: 'top',
                      panelClass: ['custom-snack']
                    });

                    _this4.closeModal.nativeElement.click(); //<-- here


                    _this4.formclinet.reset();
                  } else {
                    _this4.snackBar.open(data.msg, 'X', {
                      duration: 6000,
                      verticalPosition: 'top',
                      panelClass: ['custom-snack-error']
                    });
                  }

                  _this4.submited = false;
                });
              }
            } else {
              this.snackBar.open('Verifier les champs', 'X', {
                duration: 6000,
                verticalPosition: 'top',
                panelClass: ['custom-snack']
              });
              this.submited = false;
            }
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this5 = this;

            this.adminService.deleteFeedbacksclient(id).subscribe(function (data) {
              if (data.success) {
                _this5.fetchuserfeedbackData();

                _this5.snackBar.open(data.msg, 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack']
                });
              }
            });
          }
        }, {
          key: "onSubmitreponse",
          value: function onSubmitreponse() {
            var _this6 = this;

            console.log(this.formreponse.value);
            var reponse = {
              reponse: this.formreponse.controls.reponsesujet.value,
              date: new Date()
            };
            this.adminService.addreponseFeedbacksclient(this.selectedfeedback, reponse).subscribe(function (data) {
              if (data.success) {
                _this6.fetchuserfeedbackData();

                _this6.snackBar.open(data.msg, 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack']
                });

                _this6.closeModal.nativeElement.click(); //<-- here


                _this6.formreponse.reset();
              } else {
                _this6.snackBar.open(data.msg, 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack-error']
                });
              }
            });
          } // Ajout des fonctions trackBy pour optimiser les *ngFor

        }, {
          key: "trackByUploaderItem",
          value: function trackByUploaderItem(index, item) {
            var _a;

            return (item === null || item === void 0 ? void 0 : item.id) || ((_a = item === null || item === void 0 ? void 0 : item.file) === null || _a === void 0 ? void 0 : _a.name) || index;
          }
        }, {
          key: "trackByMessage",
          value: function trackByMessage(index, msg) {
            return (msg === null || msg === void 0 ? void 0 : msg._id) || index;
          }
        }]);

        return feedbackComponent;
      }();

      feedbackComponent.ɵfac = function feedbackComponent_Factory(t) {
        return new (t || feedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      feedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: feedbackComponent,
        selectors: [["app-feedback"]],
        viewQuery: function feedbackComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeModal = _t.first);
          }
        },
        decls: 85,
        vars: 21,
        consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", "card-header-info", "row"], [1, "card-title"], ["color", "basic", "mat-mini-fab", "", "data-toggle", "modal", "data-target", "#feedbackModalclient", "aria-label", "Ajouter une demande", 1, "right"], [1, "material-icons"], [1, "card-body"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "table", "borderless", 3, "dataSource"], ["matColumnDef", "Libelle"], ["mat-header-cell", "", "mat-sort-header", "", "class", "header", 4, "matHeaderCellDef"], ["class", "pt-3 pb-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Description"], ["matColumnDef", "Date"], ["matColumnDef", "Etat"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["id", "feedbackModalclient", "tabindex", "-1", "role", "dialog", 1, "modal"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["closeModal", ""], ["aria-hidden", "true"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "row", "mb-2"], [1, "col-md-8"], ["matInput", "", "placeholder", "Sujet", "formControlName", "Sujet"], [4, "ngIf"], ["matInput", "", "placeholder", "Description", "formControlName", "descriptionsujet"], ["ng2FileDrop", "", "accept", "application/msword, application/vnd.ms-excel, \n          application/vnd.ms-powerpoint, text/plain,\n          application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document, \n          application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, \n          application/vnd.openxmlformats-officedocument.presentationml.slideshow, image/*", 1, "well", "my-drop-zone", 3, "ngClass", "uploader", "fileOver"], ["class", "files", 4, "ngIf"], ["class", "dropfiles", 4, "ngIf"], ["type", "file", "ng2FileSelect", "", "multiple", "", "accept", "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain,\n          application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document, \n          application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, \n          application/vnd.openxmlformats-officedocument.presentationml.slideshow, image/*", 1, "inputFile", 2, "display", "none", "cursor", "pointer", 3, "disabled", "uploader"], ["fileInput", ""], ["type", "button", "class", "btn btn-danger pull-right", 3, "disabled", "click", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "type", "submit", 1, "btn", "btn-info"], ["class", "fa fa-spinner fa-spin mr-2", 4, "ngIf"], ["type", "reset", "type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "disabled", "click"], ["id", "viewdetails", "tabindex", "-1", "aria-labelledby", "viewdetailsLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], ["id", "viewdetailsLabel", 1, "modal-title"], ["matInput", "", "placeholder", "Reponse", "formControlName", "reponsesujet"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "mat-raised-button", "", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["mat-header-cell", "", "mat-sort-header", "", 1, "header"], ["mat-cell", "", 1, "pt-3", "pb-3"], ["data-toggle", "modal", "data-target", "#viewdetails", 1, "text-info", "material-icons", 2, "cursor", "pointer", 3, "click"], [1, "text-danger", "material-icons", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "files"], ["class", "col-md-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], [1, "col-md-2"], ["loading", "lazy", 2, "width", "80px", "height", "80px", 3, "src"], [2, "text-align", "center"], [1, "close", "material-icons", "text-danger", 2, "font-size", "26px", 3, "click"], [1, "dropfiles"], ["type", "button", 1, "btn", "btn-danger", "pull-right", 3, "disabled", "click"], [1, "fa", "fa-spinner", "fa-spin", "mr-2"], [4, "ngFor", "ngForOf", "ngForTrackBy"]],
        template: function feedbackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "client feedback ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function feedbackComponent_Template_input_keyup_13_listener($event) {
              return ctx.applyFilter($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, feedbackComponent_th_17_Template, 2, 0, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, feedbackComponent_td_18_Template, 2, 1, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, feedbackComponent_th_20_Template, 2, 0, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, feedbackComponent_td_21_Template, 2, 1, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, feedbackComponent_th_23_Template, 2, 0, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, feedbackComponent_td_24_Template, 3, 4, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, feedbackComponent_th_26_Template, 2, 0, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, feedbackComponent_td_27_Template, 5, 0, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, feedbackComponent_tr_28_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, feedbackComponent_tr_29_Template, 1, 0, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-paginator", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Feedback Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function feedbackComponent_Template_form_ngSubmit_41_listener() {
              return ctx.onSubmitclientfeedback();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, feedbackComponent_mat_error_48_Template, 2, 0, "mat-error", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "textarea", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileOver", function feedbackComponent_Template_label_fileOver_54_listener($event) {
              return ctx.fileOverAnother($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, feedbackComponent_div_55_Template, 7, 5, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, feedbackComponent_span_56_Template, 2, 0, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 40, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, feedbackComponent_button_59_Template, 2, 1, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, feedbackComponent_i_62_Template, 1, 0, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Envoyer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function feedbackComponent_Template_button_click_64_listener() {
              return ctx.uploader.clearQueue();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Annuler");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Modal title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, feedbackComponent_ng_container_76_Template, 2, 2, "ng-container", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "form", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function feedbackComponent_Template_form_ngSubmit_77_listener() {
              return ctx.onSubmitreponse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "textarea", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Envoyer Reponse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.MyDataSourceclient);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formclinet);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formclinet.controls.Sujet.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx.hasAnotherDropZoneOver))("uploader", ctx.uploader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploader.queue.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploader.queue.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.removing)("uploader", ctx.uploader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploader.queue.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submited);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submited);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formreponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formreponse.dirty);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileSelectDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
        styles: [".center[_ngcontent-%COMP%] {\n  position: relative;\n  left: 33%;\n}\n\n.right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n  bottom: 15%;\n}\n\n  .cdk-overlay-container {\n  z-index: 1051 !important;\n}\n\n.my-drop-zone[_ngcontent-%COMP%] {\n  border: dotted 3px lightgray;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 20px;\n  width: 100%;\n  border-radius: 20px;\n  text-align: center;\n  display: inline-block;\n}\n\n.dropfiles[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-anchor: middle;\n  line-height: 200px;\n  color: lightgray;\n}\n\n.files[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.nv-file-over[_ngcontent-%COMP%] {\n  border: dotted 3px red;\n}\n\n\n\n.another-file-over-class[_ngcontent-%COMP%] {\n  border: dotted 3px green;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 28px;\n  cursor: pointer;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.demande[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.demande.material-icons[_ngcontent-%COMP%] {\n  font-size: 1000%;\n  color: gray;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 10px;\n  margin-right: 2px;\n}\n\n.rotate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s linear;\n}\n\n.rotate.down[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.custom-header[_ngcontent-%COMP%] {\n  background: white !important;\n  color: #808080 !important;\n  border-bottom: #26c6da 1px solid;\n  font-weight: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtb2ZmaWNlL2ZlZWRiYWNrY2xpZW50L2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUdFO0VBQWdCLDRCQUFBO0VBQ2QsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBR0k7RUFDSSxhQUFBO0FBQVI7O0FBRUk7RUFBZ0Isc0JBQUE7QUFFcEI7O0FBRjhDLGdEQUFBOztBQUMxQztFQUEyQix3QkFBQTtBQU0vQjs7QUFISTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTU47O0FBSEk7RUFDRSxhQUFBO0FBTU47O0FBSEk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFNTjs7QUFKSTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQU9MOztBQUpJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFPTjs7QUFISTtFQUNFLGVBQUE7RUFHQSwyQkFBQTtBQU1OOztBQUpJO0VBR0UseUJBQUE7QUFPTjs7QUFMSTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBUU4iLCJmaWxlIjoic3JjL2FwcC9mcm9udC1vZmZpY2UvZmVlZGJhY2tjbGllbnQvZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzMlO1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMiU7XHJcbiAgICBib3R0b206IDE1JTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMTA1MSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBcclxuICAubXktZHJvcC16b25lIHsgYm9yZGVyOiBkb3R0ZWQgM3B4IGxpZ2h0Z3JheTsgXHJcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kcm9wZmlsZXN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgY29sb3I6bGlnaHRncmF5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmlsZXN7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgfVxyXG4gICAgLm52LWZpbGUtb3ZlciB7IGJvcmRlcjogZG90dGVkIDNweCByZWQ7IH0gLyogRGVmYXVsdCBjbGFzcyBhcHBsaWVkIHRvIGRyb3Agem9uZXMgb24gb3ZlciAqL1xyXG4gICAgLmFub3RoZXItZmlsZS1vdmVyLWNsYXNzIHsgYm9yZGVyOiBkb3R0ZWQgM3B4IGdyZWVuOyB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAyOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3Rpb25ze1xyXG4gICAgICBkaXNwbGF5IDogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRlbWFuZGV7XHJcbiAgICAgIHdpZHRoOiAxMDAlIDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRlbWFuZGUubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgZm9udC1zaXplOiAxMDAwJTtcclxuICAgICBjb2xvcjogZ3JheSA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hcnJvd3tcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OjJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAucm90YXRlIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcclxuICAgIH1cclxuICAgIC5yb3RhdGUuZG93biB7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1oZWFkZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yIDogIzgwODA4MCAhaW1wb3J0YW50IDtcclxuICAgICAgYm9yZGVyLWJvdHRvbSA6ICMyNmM2ZGEgMXB4IHNvbGlkIDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMHB4IDtcclxuICAgIH0iXX0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](feedbackComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-feedback',
            templateUrl: './feedback.component.html',
            styleUrls: ['./feedback.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
              "static": true
            }]
          }],
          closeModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['closeModal', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "dDWB":
    /*!*******************************************************************************!*\
      !*** ./src/app/front-office/messervices/client-docs/client-docs.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ClientDocsComponent */

    /***/
    function dDWB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientDocsComponent", function () {
        return ClientDocsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-file-upload */
      "pYyI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _services_management_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/management/management.service */
      "NMxE");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/notification/notification.service */
      "nak+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ClientDocsComponent_div_25_div_1_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDocsComponent_div_25_div_1_div_8_div_1_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var file_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r11.showActions(file_r10._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDocsComponent_div_25_div_1_div_8_div_1_Template_i_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var file_r10 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r13.downloadTask(file_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "cloud_download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/img/", file_r10.docPath.split(".").pop(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r10.docName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", file_r10 == null ? null : file_r10._id);
        }
      }

      function ClientDocsComponent_div_25_div_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientDocsComponent_div_25_div_1_div_8_div_1_Template, 7, 3, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var doc_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", doc_r6.docs)("ngForTrackBy", ctx_r7.trackByFile);
        }
      }

      function ClientDocsComponent_div_25_div_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Aucun fichier trouv\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientDocsComponent_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDocsComponent_div_25_div_1_Template_mat_toolbar_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var doc_r6 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.rotateArrow(doc_r6.docType, "show" + doc_r6.docType);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientDocsComponent_div_25_div_1_div_8_Template, 2, 2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientDocsComponent_div_25_div_1_div_9_Template, 6, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var doc_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", doc_r6.docType, " (", doc_r6.docs.length, " Fichiers)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", doc_r6.docType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "show", doc_r6.docType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", doc_r6.docs.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", doc_r6.docs.length <= 0);
        }
      }

      function ClientDocsComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientDocsComponent_div_25_div_1_Template, 10, 6, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.service == null ? null : ctx_r0.service.clientDocs)("ngForTrackBy", ctx_r0.trackByDoc);
        }
      }

      function ClientDocsComponent_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var doc_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", doc_r17.docType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doc_r17.docType, " ");
        }
      }

      function ClientDocsComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selectionner un type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientDocsComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDocsComponent_div_40_Template_i_click_4_listener() {
            var item_r18 = ctx.$implicit;
            return item_r18.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/img/", item_r18 == null ? null : item_r18.file == null ? null : item_r18.file.name.split(".").pop(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.file == null ? null : item_r18.file.name.split(".")[0]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "another-file-over-class": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "width": a0
        };
      };

      var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].uri;

      var ClientDocsComponent = /*#__PURE__*/function () {
        function ClientDocsComponent(sanitizer, mService, activatedRoute, authservice, fb, router, notificationService, snackBar) {
          var _this7 = this;

          _classCallCheck(this, ClientDocsComponent);

          this.sanitizer = sanitizer;
          this.mService = mService;
          this.activatedRoute = activatedRoute;
          this.authservice = authservice;
          this.fb = fb;
          this.router = router;
          this.notificationService = notificationService;
          this.snackBar = snackBar;
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: uri,
            removeAfterUpload: true,
            allowedFileType: ['image', 'doc', 'pdf', 'xls', 'ppt']
          });
          this.hasBaseDropZoneOver = false;
          this.hasAnotherDropZoneOver = false;
          this.receiverId = [];
          this.notifLink = {};

          this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
          };

          this.uploader.onAfterAddingFile = function (fileItem) {
            _this7.filePreviewPath = _this7.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileItem._file));
          };

          this.docsForm = this.fb.group({
            docsList: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
        }

        _createClass(ClientDocsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getService();
          }
        }, {
          key: "loadfiles",
          value: function loadfiles() {
            var _this8 = this;

            this.uploader.uploadAll();

            this.uploader.onCompleteItem = function (item, response, status, headers) {
              var document = {};
              document.docName = JSON.parse(response).originalname.substring(0, JSON.parse(response).originalname.indexOf('.'));
              document.docPath = JSON.parse(response).uploadname;

              _this8.service.clientDocs.forEach(function (doc) {
                if (doc.docType == _this8.docsForm.controls.docsList.value) {
                  doc.docs.push(document);
                }
              });
            };

            this.uploader.onCompleteAll = function () {
              _this8.mService.updateService(_this8.id, _this8.service).subscribe(function (data) {
                if (data.success) {
                  _this8.getService();

                  _this8.receiverId.push(_this8.service.clientConsult);

                  _this8.service.tasks.forEach(function (task) {
                    _this8.receiverId.push(task.user);
                  });

                  _this8.notifLink.url = "/tasks";
                  _this8.notifLink.params = 'id';
                  _this8.notifLink.paramsValue = _this8.service._id;

                  var clt = _this8.authservice.getUserfromToken();

                  var msg = clt.pm == true ? clt.name : clt.fname + ' ' + clt.lname;
                  _this8.notification = {
                    'sender': _this8.notificationService.getIdfromToken(),
                    'receiver': _this8.receiverId,
                    'title': _this8.service.name,
                    'message': msg + ' a envoyé de nouveaux documents',
                    'link': _this8.notifLink
                  };

                  _this8.notificationService.createNotification(JSON.stringify(_this8.notification)).subscribe(function (data2) {
                    if (data2.success) {
                      console.log(_this8.notification);
                      console.log(data2);
                    }
                  });

                  _this8.snackBar.open('Documents envoyés au cabinet', 'X', {
                    duration: 6000,
                    verticalPosition: 'top',
                    panelClass: ['custom-snack']
                  });
                } else {
                  console.log(data);

                  _this8.snackBar.open('Une erreur s\'est produite', 'X', {
                    duration: 6000,
                    verticalPosition: 'top',
                    panelClass: ['custom-snack-error']
                  });
                }
              });
            };

            console.log("ok");
          }
        }, {
          key: "fileOverBase",
          value: function fileOverBase(e) {
            this.hasBaseDropZoneOver = e;
          }
        }, {
          key: "fileOverAnother",
          value: function fileOverAnother(e) {
            this.hasAnotherDropZoneOver = e;
          }
        }, {
          key: "getService",
          value: function getService() {
            var _this9 = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              _this9.id = params['id'];

              if (_this9.id) {
                _this9.mService.getOneService(_this9.id).subscribe(function (res) {
                  _this9.service = res;
                  console.log(_this9.service);
                }, function (err) {
                  console.log(err);
                });
              } else {
                _this9.router.navigate(['/']);
              }
            });
          }
        }, {
          key: "showActions",
          value: function showActions(id) {
            var actions = document.getElementById(id);
            if (actions.className != "") actions.className = "";else actions.className = "actions";
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(file) {
            var _this10 = this;

            this.service.clientDocs = this.service.clientDocs.filter(function (document) {
              return document._id != file;
            });
            this.mService.updateService(this.id, this.service).subscribe(function (data) {
              if (data.status) {
                _this10.snackBar.open('Document Supprimé', 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack']
                });
              } else {
                console.log(data);

                _this10.snackBar.open('Une erreur s\'est produite', 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack-error']
                });
              }
            });
          }
        }, {
          key: "downloadTask",
          value: function downloadTask(file) {
            var filename = file.docPath;
            this.mService.downloadDoc(filename).subscribe(function (data) {
              return Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(data, file.docName + '.' + filename.split('.').pop());
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "rotateArrow",
          value: function rotateArrow(section, action) {
            var files = document.getElementById(section);

            if (!files.classList.contains('down')) {
              files.classList.add('down');
            } else {
              files.classList.remove('down');
            }

            this.showActions(action);
          } // Ajout des fonctions trackBy pour optimiser les *ngFor

        }, {
          key: "trackByDoc",
          value: function trackByDoc(index, doc) {
            return (doc === null || doc === void 0 ? void 0 : doc._id) || (doc === null || doc === void 0 ? void 0 : doc.docType) || index;
          }
        }, {
          key: "trackByFile",
          value: function trackByFile(index, file) {
            return (file === null || file === void 0 ? void 0 : file._id) || (file === null || file === void 0 ? void 0 : file.docPath) || index;
          }
        }, {
          key: "trackByUploaderItem",
          value: function trackByUploaderItem(index, item) {
            var _a;

            return (item === null || item === void 0 ? void 0 : item.id) || ((_a = item === null || item === void 0 ? void 0 : item.file) === null || _a === void 0 ? void 0 : _a.name) || index;
          }
        }]);

        return ClientDocsComponent;
      }();

      ClientDocsComponent.ɵfac = function ClientDocsComponent_Factory(t) {
        return new (t || ClientDocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_management_management_service__WEBPACK_IMPORTED_MODULE_5__["ManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]));
      };

      ClientDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClientDocsComponent,
        selectors: [["app-client-docs"]],
        decls: 48,
        vars: 16,
        consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", "card-header-tabs", "card-header-info"], [1, "nav-tabs-navigation"], [1, "nav-tabs-wrapper"], ["data-tabs", "tabs", 1, "nav", "nav-tabs", "pull-left"], [1, "nav-item"], ["mat-button", "", "href", "#taches", "data-toggle", "tab", 1, "nav-link", "active"], [1, "material-icons"], [1, "ripple-container"], ["mat-button", "", "href", "#uploadfile", "data-toggle", "tab", 1, "nav-link"], [1, "card-body"], [1, "tab-content"], ["id", "taches", 1, "tab-pane", "active"], [1, "files"], ["class", "row", 4, "ngIf"], ["id", "uploadfile", 1, "tab-pane"], [3, "formGroup", "ngSubmit"], [1, "col-md-6"], ["placeholder", "Type de document", "formControlName", "docsList"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["ng2FileDrop", "", "accept", "application/msword, application/vnd.ms-excel, \n                    application/vnd.ms-powerpoint, text/plain,\n                    application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document, \n                    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, \n                    application/vnd.openxmlformats-officedocument.presentationml.slideshow, image/*", 1, "well", "my-drop-zone", 2, "width", "100%", 3, "ngClass", "uploader", "fileOver"], [1, "dropfiles"], ["type", "file", "ng2FileSelect", "", "multiple", "", "accept", "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain,\n                    application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document, \n                    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, \n                    application/vnd.openxmlformats-officedocument.presentationml.slideshow, image/*", 1, "inputFile", 2, "display", "none", "cursor", "pointer", 3, "uploader"], ["fileInput", ""], ["class", "col-md-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], ["type", "submit", 1, "btn", "btn-primary", "btn-round", "pull-right", 3, "disabled"], ["class", "col-md-12", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "card-header-primary", "custom-header", 2, "margin-top", "20px", 3, "click"], [2, "margin-left", "8px"], [2, "flex", "1 1 auto"], [1, "material-icons", "rotate", 3, "id"], [1, "actions", 3, "id"], ["class", "row", "style", "margin-top:20px", 4, "ngIf"], ["style", "margin-top:20px", "class", "row", 4, "ngIf"], [1, "row", 2, "margin-top", "20px"], ["style", "text-align: center;cursor: pointer", "class", "col-sm-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-sm-2", 2, "text-align", "center", "cursor", "pointer"], ["loading", "lazy", 2, "width", "80px", "height", "80px", 3, "src", "click"], [1, "actions", 2, "cursor", "pointer", 3, "id"], [1, "material-icons", "text-primary", 2, "margin", "auto", "font-size", "26px", 3, "click"], [1, "form-row", "text-center", "col-md-12"], [1, "material-icons", "demande", 2, "font-size", "700%"], [2, "width", "100%"], [3, "value"], [1, "col-md-2"], ["loading", "lazy", 2, "width", "80px", "height", "80px", 3, "src"], [2, "text-align", "left"], [1, "close", "material-icons", "text-danger", 2, "font-size", "26px", "margin-right", "25px", 3, "click"]],
        template: function ClientDocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " documents envoy\xE9s ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "cloud_upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Envoyer des documents ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ClientDocsComponent_div_25_Template, 2, 2, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClientDocsComponent_Template_form_ngSubmit_27_listener() {
              return ctx.loadfiles();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClientDocsComponent_mat_option_30_Template, 2, 2, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ClientDocsComponent_mat_error_31_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileOver", function ClientDocsComponent_Template_label_fileOver_33_listener($event) {
              return ctx.fileOverAnother($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cliquer ou faire glisser les fichiers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ClientDocsComponent_div_40_Template, 6, 2, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Avancement d'upload: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Envoyer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.service == null ? null : ctx.service.clientDocs.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.docsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service == null ? null : ctx.service.clientDocs)("ngForTrackBy", ctx.trackByDoc);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docsForm.controls.docsList.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.hasAnotherDropZoneOver))("uploader", ctx.uploader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx.uploader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uploader.queue)("ngForTrackBy", ctx.trackByUploaderItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.uploader.progress + "%"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.uploader.queue.length == 0);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbar"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        styles: [".my-drop-zone[_ngcontent-%COMP%] {\n  border: dotted 3px lightgray;\n  height: 300px;\n  border-radius: 20px;\n  text-align: center;\n}\n\n.dropfiles[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-anchor: middle;\n  line-height: 300px;\n  color: lightgray;\n}\n\n.files[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.nv-file-over[_ngcontent-%COMP%] {\n  border: dotted 3px red;\n}\n\n\n\n.another-file-over-class[_ngcontent-%COMP%] {\n  border: dotted 3px green;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 28px;\n  cursor: pointer;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.demande[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.demande.material-icons[_ngcontent-%COMP%] {\n  font-size: 1000%;\n  color: gray;\n}\n\n.rotate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s linear;\n}\n\n.rotate.down[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.custom-header[_ngcontent-%COMP%] {\n  background: white !important;\n  color: #808080 !important;\n  border-bottom: #808080 1px solid;\n  font-weight: 100px;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtb2ZmaWNlL21lc3NlcnZpY2VzL2NsaWVudC1kb2NzL2NsaWVudC1kb2NzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLDRCQUFBO0VBQ1osYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFUjs7QUFDSTtFQUNJLGFBQUE7QUFFUjs7QUFBSTtFQUFnQixzQkFBQTtBQUlwQjs7QUFKOEMsZ0RBQUE7O0FBQzFDO0VBQTJCLHdCQUFBO0FBUS9COztBQUxJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFRTjs7QUFMSTtFQUNFLGFBQUE7QUFRTjs7QUFMSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQVFOOztBQU5JO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0FBU0w7O0FBUEk7RUFDRSxlQUFBO0VBR0EsMkJBQUE7QUFVTjs7QUFSSTtFQUdFLHlCQUFBO0FBV047O0FBUkk7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBV04iLCJmaWxlIjoic3JjL2FwcC9mcm9udC1vZmZpY2UvbWVzc2VydmljZXMvY2xpZW50LWRvY3MvY2xpZW50LWRvY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZHJvcC16b25lIHsgYm9yZGVyOiBkb3R0ZWQgM3B4IGxpZ2h0Z3JheTsgXHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuZHJvcGZpbGVze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjMwMHB4O1xyXG4gICAgICAgIGNvbG9yOmxpZ2h0Z3JheTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZpbGVze1xyXG4gICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgIH1cclxuICAgIC5udi1maWxlLW92ZXIgeyBib3JkZXI6IGRvdHRlZCAzcHggcmVkOyB9IC8qIERlZmF1bHQgY2xhc3MgYXBwbGllZCB0byBkcm9wIHpvbmVzIG9uIG92ZXIgKi9cclxuICAgIC5hbm90aGVyLWZpbGUtb3Zlci1jbGFzcyB7IGJvcmRlcjogZG90dGVkIDNweCBncmVlbjsgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMjhweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aW9uc3tcclxuICAgICAgZGlzcGxheSA6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlbWFuZGV7XHJcbiAgICAgIHdpZHRoOiAxMDAlIDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRlbWFuZGUubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgZm9udC1zaXplOiAxMDAwJTtcclxuICAgICBjb2xvcjogZ3JheSA7XHJcbiAgICB9XHJcbiAgICAucm90YXRlIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcclxuICAgIH1cclxuICAgIC5yb3RhdGUuZG93biB7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20taGVhZGVye1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvciA6ICM4MDgwODAgIWltcG9ydGFudCA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20gOiAjODA4MDgwIDFweCBzb2xpZCA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDBweCA7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH0iXX0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientDocsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-docs',
            templateUrl: './client-docs.component.html',
            styleUrls: ['./client-docs.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
          }, {
            type: _services_management_management_service__WEBPACK_IMPORTED_MODULE_5__["ManagementService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "omSo":
    /*!********************************************************************!*\
      !*** ./src/app/front-office/client-layout/client-layout.module.ts ***!
      \********************************************************************/

    /*! exports provided: ClientLayoutModule */

    /***/
    function omSo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientLayoutModule", function () {
        return ClientLayoutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _client_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./client-layout.routing */
      "HvEi");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../home/home.component */
      "vo3W");
      /* harmony import */


      var _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../messervices/messervices.component */
      "xyaa");
      /* harmony import */


      var _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../front-office/messervices/client-docs/client-docs.component */
      "dDWB");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-file-upload */
      "pYyI");
      /* harmony import */


      var _bills_bills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../bills/bills.component */
      "4bTy");
      /* harmony import */


      var _feedbackclient_feedback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../feedbackclient/feedback.component */
      "HxRH");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var ClientLayoutModule = function ClientLayoutModule() {
        _classCallCheck(this, ClientLayoutModule);
      };

      ClientLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ClientLayoutModule
      });
      ClientLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ClientLayoutModule_Factory(t) {
          return new (t || ClientLayoutModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_client_layout_routing__WEBPACK_IMPORTED_MODULE_4__["ClientLayoutRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientLayoutModule, {
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_6__["MesservicesComponent"], _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_7__["ClientDocsComponent"], _bills_bills_component__WEBPACK_IMPORTED_MODULE_9__["BillsComponent"], _feedbackclient_feedback_component__WEBPACK_IMPORTED_MODULE_10__["feedbackComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientLayoutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_client_layout_routing__WEBPACK_IMPORTED_MODULE_4__["ClientLayoutRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"]],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_6__["MesservicesComponent"], _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_7__["ClientDocsComponent"], _bills_bills_component__WEBPACK_IMPORTED_MODULE_9__["BillsComponent"], _feedbackclient_feedback_component__WEBPACK_IMPORTED_MODULE_10__["feedbackComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vo3W":
    /*!*****************************************************!*\
      !*** ./src/app/front-office/home/home.component.ts ***!
      \*****************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vo3W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_management_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/management/management.service */
      "NMxE");
      /* harmony import */


      var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/employee/employee.service */
      "8ZfG");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/admin/admin.service */
      "VKgo");
      /* harmony import */


      var _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/configuration/configuration.service */
      "rHPJ");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function HomeComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Montant : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getAmount().all, " ");
        }
      }

      function HomeComponent_i_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_i_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Montant : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getAmount().unpaid, " ");
        }
      }

      function HomeComponent_th_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\xB0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r26.numero, "");
        }
      }

      function HomeComponent_th_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date de creation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r27 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r7.stringAsDate(data_r27.createdAt), "dd/MM/yyyy HH:mm"), "");
        }
      }

      function HomeComponent_th_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Montant Total TTC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r28 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.returnamounttc(data_r28));
        }
      }

      function HomeComponent_th_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_65_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pay\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_65_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_td_65_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.togglModal(data_r29._id, data_r29.numero);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "non pay\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_td_65_span_1_Template, 2, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_td_65_a_2_Template, 2, 0, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r29.paid_status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r29.paid_status);
        }
      }

      function HomeComponent_th_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_td_68_Template_i_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var data_r35 = ctx.$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.print(data_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_tr_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
        }
      }

      function HomeComponent_tr_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
        }
      }

      function HomeComponent_th_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 43);
        }
      }

      function HomeComponent_td_84_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 54);
        }

        if (rf & 2) {
          var data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r40.uri + data_r39.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function HomeComponent_td_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_td_84_img_1_Template, 1, 1, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r39.image);
        }
      }

      function HomeComponent_th_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nom et Pr\xE9nom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r42.fname, " ", data_r42.lname, " ");
        }
      }

      function HomeComponent_th_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r43.email);
        }
      }

      function HomeComponent_th_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_td_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r44.tel, " ");
        }
      }

      function HomeComponent_tr_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
        }
      }

      function HomeComponent_tr_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
        }
      }

      var _c0 = function _c0() {
        return ["/myservices"];
      };

      var _c1 = function _c1(a0, a1) {
        return {
          "card-header-danger": a0,
          "card-header-success": a1,
          "card-header card-header-success card-header-icon": true
        };
      };

      var _c2 = function _c2() {
        return [5, 10, 20];
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(employeeService, mService, authservice, adminService, cService, datepipe) {
          _classCallCheck(this, HomeComponent);

          this.employeeService = employeeService;
          this.mService = mService;
          this.authservice = authservice;
          this.adminService = adminService;
          this.cService = cService;
          this.datepipe = datepipe;
          this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].awsUrl;
          this.unpaidbills = 0;
          this.serviceEncours = 0;
          this.clientId = this.authservice.getIdfromToken();
          this.displayedColumns = ['n', 'dateCreation', 'montantTotal', 'status', 'action'];
          this.displayedColumnsUsers = ['image', 'Nom', 'Email', 'Tel'];
          this.fetchBills();
          this.fetchServices();
          this.getclient();
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fetchServices",
          value: function fetchServices() {
            var _this11 = this;

            this.vis = [];
            this.mService.getServicesByClientId(this.clientId).subscribe(function (res) {
              _this11.services = res;

              for (var i = 0; i < res.length; ++i) {
                if (res[i].finish_date === 'En cours') {
                  _this11.serviceEncours++;
                }
              }

              _this11.employeeService.getUsers().subscribe(function (res) {
                _this11.users = res;

                _this11.services.forEach(function (service) {
                  if (_this11.users.some(function (user) {
                    return user._id == service.clientConsult;
                  })) {
                    if (!_this11.vis.some(function (one) {
                      return one._id == service.clientConsult;
                    })) _this11.vis.push(_this11.users.find(function (user) {
                      return user._id == service.clientConsult;
                    }));
                  }
                });

                _this11.usersData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
                _this11.usersData.data = _this11.vis;
                _this11.usersData.paginator = _this11.paginatorUsers;
                _this11.usersData.sort = _this11.sortUsers;
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(filterValue) {
            this.MyDataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "applyFilterUsers",
          value: function applyFilterUsers(filterValue) {
            this.usersData.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "getclient",
          value: function getclient() {
            var _this12 = this;

            this.adminService.getOneClient(this.clientId).subscribe(function (res) {
              _this12.client = res;

              _this12.getConfig();
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "fetchBills",
          value: function fetchBills() {
            var _this13 = this;

            this.employeeService.getbillForClient(this.clientId).subscribe(function (res) {
              _this13.bills = res;
              console.log(_this13.bills);
              var tmp = 0;

              for (var i = 0; i < res.length; ++i) {
                if (res[i].paid_status === true) {
                  tmp++;
                }
              }

              _this13.unpaidbills = res.length - tmp;
              _this13.MyDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
              _this13.MyDataSource.data = res;
              _this13.MyDataSource.paginator = _this13.paginator;
              _this13.MyDataSource.sort = _this13.sort;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getAmount",
          value: function getAmount() {
            var all = 0;
            var unpaid = 0;
            this.bills.forEach(function (bill) {
              if (typeof bill.amount == "string") {
                if (bill.paid_status == false) unpaid += Number(bill.amount.replace(/\s/g, '')) + bill.vat - bill.rs + bill.debour + 0.6;
                all += Number(bill.amount.replace(/\s/g, '')) + bill.vat - bill.rs + bill.debour + 0.6;
              } else {
                if (bill.paid_status == false) unpaid += Number(bill.amount);
                all += Number(bill.amount);
              }
            });
            var result = {
              "all": Number(all.toString().replace(/\s/g, '')).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '),
              "unpaid": Number(unpaid.toString().replace(/\s/g, '')).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
            };
            return result;
          }
        }, {
          key: "stringAsDate",
          value: function stringAsDate(dateStr) {
            return new Date(dateStr);
          }
        }, {
          key: "getConfig",
          value: function getConfig() {
            var _this14 = this;

            this.cService.getConfig().subscribe(function (res) {
              if (res.length > 0) {
                _this14.config = res[0].structure.find(function (one) {
                  return one._id == _this14.client.structure;
                });
                console.log("client Home config", res);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "print",
          value: function print(bill) {
            var _this15 = this;

            var billTotalht = 0;
            var billTotalttc = Number(bill.amount.replace(/\s/g, '')) + bill.vat + bill.rs + bill.debour + Number("0.60".replace(/\s/g, ''));
            console.log(Number(bill.amount.replace(/\s/g, '')));
            console.log(bill.rs);
            console.log(bill.debour, this.config);
            billTotalttc = Number(billTotalttc.toString().replace(/\s/g, '')).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
            var printContents, popupWin;
            var service = this.services.find(function (one) {
              return one._id == bill.service;
            });

            if (bill.type == 1) {
              service.name = "Avance " + service.name;
              service.montant = bill.amount;
            }

            var date = this.datepipe.transform(this.stringAsDate(bill.createdAt), 'yyyy-MM-dd HH:mm'); // tslint:disable-next-line:max-line-length

            printContents = "<div class=\"container printable\" id=\"bill\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n    \t\t<div class=\"invoice-title\">\n\t\t\t\t<h3>" + date + "</h3>\n\t\t\t\t<h3 class=\"pull-right\">Note d'honoraires N\xB0 " + bill.numero + "</h3>\n    \t\t</div>\n    \t\t<hr>\n    \t\t<div class=\"row\">\n    \t\t\t<div class=\"col-md-6\">\n    \t\t\t\t<address>\n        \t\t\t<strong>Factur\xE9 de:</strong><br>" + this.config.name + "<br>" + this.config.mat_fis + "<br>" + this.config.email + "<br>" + this.config.adress + "</address>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 float-right\">\n\t\t\t\t\t\t\t <div class=\"logo float-right\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"simple-text\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"logo-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"90px\" height=\"auto\" src=\"" + this.uri + this.config.image + "\"/> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t<address>\n              <strong>Factur\xE9 \xE0:</strong><br>";

            if (!this.client.name) {
              printContents += '<div>' + this.client.fname + ' ' + this.client.lname + '</div>';
            } else {
              printContents += '<div>' + this.client.name + '</div>';
            }

            printContents += "<div>" + this.client.mat_fis + "</div>\n                                    " + this.client.adress + "<br>\n                                    " + this.client.tel + "<br>\n                                    " + this.client.email + "</address>\n\t\t\t\t\t\t</div>\n    \t\t</div>\n    \t</div>\n    </div>\n    \n    <div class=\"row\">\n    \t<div class=\"col-md-12\">\n    \t\t<div class=\"panel panel-default\">\n          <div class=\"panel-heading\">";

            if (bill.type == 0) {
              printContents += "<h3 class='panel-title'><strong><strong>Résumé du note d'honoraires</strong></h3>";
            } else {
              printContents += "<h3 class='panel-title'><strong><strong>Avance sur note d'honoraires</strong></h3>";
            }

            printContents += "</div>\n    \t\t\t<div class=\"panel-body\">\n    \t\t\t\t<div class=\"table-responsive\">\n    \t\t\t\t\t<table class=\"table table-condensed\">\n    \t\t\t\t\t\t<thead>\n                                <tr>\n        \t\t\t\t\t\t\t<td><strong>Libell\xE9</strong></td>\n        \t\t\t\t\t\t\t<td class=\"text-center\"><strong></strong></td>\n        \t\t\t\t\t\t\t<td class=\"text-center\"><strong></strong></td>\n        \t\t\t\t\t\t\t<td class=\"text-right\"><strong>Prix HT</strong></td>\n        \t\t\t\t\t\t\t<td class=\"text-center\"><strong></strong></td>\n                                </tr>\n    \t\t\t\t\t\t</thead>\n    \t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<ng-container >\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>" + service.name + "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">" + service.montant + "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\t\n                  </ng-container>";

            if (this.bills && bill.type == 0) {
              this.bills.forEach(function (one) {
                if (one.type == 1) {
                  printContents += "<tr>\n                      <td>Avance sur note d'honoraires : " + one.numero + "</td>\n                      <td class=\"text-center\"></td>\n                      <td class=\"text-center\"> <span class=\"noprint\">" + _this15.datepipe.transform(_this15.stringAsDate(one.createdAt), 'yyyy-MM-dd') + "</span></td>\n                      <td class=\"text-right\">-" + one.amount + "</td>\n                      <td class=\"text-right\"></td>\n                    </tr>";
                }
              });
            }

            if (bill.debours.length > 0) {
              printContents += "<tr>\n                    <td><strong>D\xE9bours</strong></td>\n                    <td class=\"text-center\"></td>\n                    <td class=\"text-center\"></td>\n                    <td class=\"text-right\"></td>\n                    <td class=\"text-right\"></td>\n                  </tr>";
              bill.debours.forEach(function (one) {
                printContents += "<tr>\n                      <td>" + one.libelle + "</td>\n                      <td class=\"text-center\"></td>\n                      <td class=\"text-center\"></td>\n                      <td class=\"text-right\">" + one.montant + "</td>\n                      <td class=\"text-right\"></td>\n                    </tr>";
              });
            }

            printContents += "<tr>\n    \t\t\t\t\t\t\t\t<td style=\"border-top: 2px solid;\" class=\"thick-line\"></td>\n    \t\t\t\t\t\t\t\t<td style=\"border-top: 2px solid;\" class=\"thick-line\"></td>\n    \t\t\t\t\t\t\t\t<td style=\"border-top: 2px solid;\" class=\"thick-line text-center\"></td>\n    \t\t\t\t\t\t\t\t<td style=\"border-top: 2px solid;\" class=\"thick-line text-right\"></td>\n\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t   \t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"border: none;\"></td>\t<td style=\"border: none;\"></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"no-line text-center\"><strong>Total HT</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"no-line text-right\">" + bill.amount + "</td>\n\t\t\t\t\t\t\t\t\t</tr>\n    \t\t\t\t\t\t\t<tr>\n                  <td style=\"border: none;\"></td>\t<td style=\"border: none;\"></td>\n                  <td class=\"no-line text-center\"><strong>TVA</strong></td>\n    \t\t\t\t\t\t\t<td class=\"no-line text-right\">13%</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style=\"border: none;\"></td>\t<td style=\"border: none;\"></td>\n\t\t\t\t\t\t\t\t\t<td class=\"no-line text-center\"><strong>Total TVA</strong></td>\n    \t\t\t\t\t\t\t\t<td class=\"no-line text-right\">" + Number(bill.vat.toString().replace(/\s/g, '')).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + "</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style=\"border:none;\"></td>\t<td style=\"border: none;\"></td>\n\t\t\t\t\t\t\t\t\t<td class=\"no-line text-center\"><strong>Timbre fiscal</strong></td>\n    \t\t\t\t\t\t\t\t<td class=\"no-line text-right\">1.000</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"border: none;\"></td>\t<td style=\"border: none;\"></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"no-line text-center\"><strong>R/S</strong></td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"no-line text-right\">" + Number(bill.rs.toString().replace(/\s/g, '')).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + "</td>\n\t\t\t\t\t\t\t\t\t</tr>\n    \t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"border: none;\"></td>\t<td style=\"border: none;\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"no-line text-center\"><strong>D\xE9bours</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"no-line text-right\">" + Number(bill.debour.toString().replace(/\s/g, '')).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + "</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n    \t\t\t\t\t\t\t\t<td style=\"border: none;\"></td>\n    \t\t\t\t\t\t\t\t<td style=\"border: none;\"></td>\n    \t\t\t\t\t\t\t\t<td class=\"no-line text-center\"><strong>Total</strong></td>\n    \t\t\t\t\t\t\t\t<td class=\"no-line text-right\">" + billTotalttc + "</td>\n    \t\t\t\t\t\t\t</tr>\n    \t\t\t\t\t\t</tbody>\n    \t\t\t\t\t</table>\n    \t\t\t\t</div>\n    \t\t\t</div>\n    \t\t</div>\n    \t</div>\n    </div>\n</div>";
            popupWin = window.open('', '_blank', 'top=0,left=50%,height=' + screen.height + ',width=' + screen.width);
            popupWin.document.open();
            popupWin.document.write("<html>\n     ".concat($('head').clone().html(), "\n    <body onload=\"window.print();window.close()\">").concat(printContents, "</body></html>"));
            popupWin.document.close();
          }
        }, {
          key: "returnamounttc",
          value: function returnamounttc(bill) {
            var billTotalttc = Number(bill.amount) + bill.vat - bill.rs + bill.debour + 0.6;
            return Number(billTotalttc.toString().replace(/\s/g, '')).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_management_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        viewQuery: function HomeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginatorUsers = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sortUsers = _t.first);
          }
        },
        decls: 97,
        vars: 23,
        consts: [[1, "main-content"], [1, "container-fluid"], [1, "row", "mx-auto"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "card", "card-stats"], [1, "card-header", "card-header-primary", "card-header-icon"], [1, "card-icon"], [1, "material-icons"], [1, "card-category"], [1, "card-title"], [1, "card-footer"], [1, "stats"], [1, "material-icons", "text-primary"], [3, "routerLink"], [1, "card-header", "card-header-info", "card-header-icon"], ["class", "stats", 4, "ngIf"], [3, "ngClass"], ["class", "material-icons", 4, "ngIf"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "card"], [1, "card-header", "card-header-warning"], [1, "card-body", "table-responsive"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "table", "borderless", 3, "dataSource"], ["matColumnDef", "n"], ["mat-header-cell", "", "mat-sort-header", "", "class", "header", 4, "matHeaderCellDef"], ["class", "pt-3 pb-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dateCreation"], ["matColumnDef", "montantTotal"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "card-header", "card-header-primary"], ["matColumnDef", "image"], ["matColumnDef", "Nom"], ["matColumnDef", "Email"], ["matColumnDef", "Tel"], [1, "text-info"], [1, "text-danger"], ["mat-header-cell", "", "mat-sort-header", "", 1, "header"], ["mat-cell", "", 1, "pt-3", "pb-3"], ["class", "badge badge-success", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#myModal", "class", "enzel badge badge-warning", 3, "click", 4, "ngIf"], [1, "badge", "badge-success"], ["data-toggle", "modal", "data-target", "#myModal", 1, "enzel", "badge", "badge-warning", 3, "click"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], [1, "enzel", "text-primary", "material-icons", "mr-2", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["class", "img", "style", "width:50px;height:50px", "loading", "lazy", 3, "src", 4, "ngIf"], ["loading", "lazy", 1, "img", 2, "width", "50px", "height", "50px", 3, "src"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mes Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "remove_red_eye");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Voir tout...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mes Factures");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_div_30_Template, 4, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_i_35_Template, 2, 0, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_i_36_Template, 2, 0, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Factures non pay\xE9e");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HomeComponent_div_42_Template, 4, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Mes Factures");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_Template_input_keyup_51_listener($event) {
              return ctx.applyFilter($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "table", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HomeComponent_th_55_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HomeComponent_td_56_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, HomeComponent_th_58_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, HomeComponent_td_59_Template, 3, 4, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HomeComponent_th_61_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HomeComponent_td_62_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, HomeComponent_th_64_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, HomeComponent_td_65_Template, 3, 2, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HomeComponent_th_67_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, HomeComponent_td_68_Template, 4, 0, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HomeComponent_tr_69_Template, 1, 0, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, HomeComponent_tr_70_Template, 1, 0, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "mat-paginator", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Vis \xE0 vis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_Template_input_keyup_79_listener($event) {
              return ctx.applyFilterUsers($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "table", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](82, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, HomeComponent_th_83_Template, 1, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, HomeComponent_td_84_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](85, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, HomeComponent_th_86_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, HomeComponent_td_87_Template, 2, 2, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](88, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, HomeComponent_th_89_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, HomeComponent_td_90_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](91, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, HomeComponent_th_92_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, HomeComponent_td_93_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, HomeComponent_tr_94_Template, 1, 0, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, HomeComponent_tr_95_Template, 1, 0, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "mat-paginator", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.services == null ? null : ctx.services.length, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bills == null ? null : ctx.bills.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bills);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c1, ctx.unpaidbills > 0, ctx.unpaidbills <= 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unpaidbills > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unpaidbills <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.unpaidbills);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bills);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.MyDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.usersData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsUsers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsUsers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
        styles: [".header[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: black;\n  font-size: 0.95rem;\n  font-weight: 500;\n  border-top-width: 0;\n  border-bottom-width: 1px;\n}\n\n.enzel[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.invoice-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .invoice-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > .no-line[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > .no-line[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > .thick-line[_ngcontent-%COMP%] {\n  border-top: 2px solid;\n}\n\n.noprint[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.printOnly[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.printOnly[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.montant[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80px;\n  display: inline;\n  border: 0;\n}\n\n  .cdk-overlay-container {\n  \n  position: fixed;\n  z-index: 1060;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtb2ZmaWNlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBQ0E7RUFDQSxlQUFBO0FBRUE7O0FBQUE7RUFDSSxxQkFBQTtBQUdKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtBQUdKOztBQURJO0VBQ0UsYUFBQTtBQUlOOztBQUZJO0VBQ0UsZUFBQTtBQUtOOztBQUZFO0VBQ0UsYUFBQTtBQUtKOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFLSjs7QUFGRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LW9mZmljZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG59XHJcbi5lbnplbHtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbnZvaWNlLXRpdGxlIGgyLCAuaW52b2ljZS10aXRsZSBoMyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiAubm8tbGluZSB7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcblxyXG4udGFibGUgPiB0aGVhZCA+IHRyID4gLm5vLWxpbmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IC50aGljay1saW5lIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZDtcclxufVxyXG4gICAgLm5vcHJpbnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnByaW50T25seSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICBcclxuICAucHJpbnRPbmx5IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9udGFudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgLyogRG8geW91IGNoYW5nZXMgaGVyZSAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHotaW5kZXg6IDEwNjA7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
          }, {
            type: _services_management_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
          }, {
            type: _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
              "static": true
            }]
          }],
          paginatorUsers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
              "static": true
            }]
          }],
          sortUsers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "xyaa":
    /*!*******************************************************************!*\
      !*** ./src/app/front-office/messervices/messervices.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MesservicesComponent */

    /***/
    function xyaa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MesservicesComponent", function () {
        return MesservicesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_management_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/management/management.service */
      "NMxE");
      /* harmony import */


      var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/employee/employee.service */
      "8ZfG");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function MesservicesComponent_tbody_23_ng_container_3_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r5.fname, " ", user_r5.lname, " ");
        }
      }

      function MesservicesComponent_tbody_23_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MesservicesComponent_tbody_23_ng_container_3_td_1_Template, 2, 2, "td", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var user_r5 = ctx.$implicit;

          var service_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", service_r3.clientConsult == user_r5._id);
        }
      }

      var _c0 = function _c0() {
        return ["/docs"];
      };

      var _c1 = function _c1(a0) {
        return {
          id: a0
        };
      };

      function MesservicesComponent_tbody_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MesservicesComponent_tbody_23_Template_tbody_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var service_r3 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.checkSuper(service_r3.clientConsult);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MesservicesComponent_tbody_23_ng_container_3_Template, 2, 1, "ng-container", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-progress-bar", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var service_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r3.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users)("ngForTrackBy", ctx_r0.trackByUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.avenceService(service_r3.tasks), " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.avenceService(service_r3.tasks));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 9, ctx_r0.stringAsDate(service_r3.createdAt), "dd/MM/yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r3.finish_date, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, service_r3._id));
        }
      }

      function MesservicesComponent_img_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.user == null ? null : ctx_r1.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function MesservicesComponent_h6_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var permo_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permo_r11.groupename);
        }
      }

      var MesservicesComponent = /*#__PURE__*/function () {
        function MesservicesComponent(employeeService, mService) {
          _classCallCheck(this, MesservicesComponent);

          this.employeeService = employeeService;
          this.mService = mService;
          this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
          this.awsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].awsUrl;
        }

        _createClass(MesservicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchServices();
            this.fetchUsers();
          }
        }, {
          key: "fetchServices",
          value: function fetchServices() {
            var _this16 = this;

            this.mService.getServices().subscribe(function (res) {
              _this16.services = res.filter(function (service) {
                return service.client == _this16.employeeService.getIdfromToken();
              });
              _this16.superId = _this16.services[0].clientConsult;

              _this16.employeeService.getOneUser(_this16.superId).subscribe(function (res) {
                _this16.user = res;
                _this16.user.image = _this16.awsUrl + res.image;
                console.log(_this16.user);
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "checkSuper",
          value: function checkSuper(id) {
            var _this17 = this;

            this.employeeService.getOneUser(id).subscribe(function (res) {
              _this17.user = res;
              _this17.user.image = _this17.awsUrl + res.image;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "fetchUsers",
          value: function fetchUsers() {
            var _this18 = this;

            this.employeeService.getUsers().subscribe(function (res) {
              _this18.users = res;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "avenceService",
          value: function avenceService(tasks) {
            var completed = [];
            var all = [];
            tasks.forEach(function (one) {
              if (one.status == 'completed') completed.push(one);
              all.push(one);
            });
            return completed.length / all.length * 100;
          }
        }, {
          key: "stringAsDate",
          value: function stringAsDate(dateStr) {
            return new Date(dateStr);
          } // Ajout des fonctions trackBy pour optimiser les *ngFor

        }, {
          key: "trackByService",
          value: function trackByService(index, service) {
            return (service === null || service === void 0 ? void 0 : service._id) || index;
          }
        }, {
          key: "trackByUser",
          value: function trackByUser(index, user) {
            return (user === null || user === void 0 ? void 0 : user._id) || index;
          }
        }, {
          key: "trackByPermo",
          value: function trackByPermo(index, permo) {
            return (permo === null || permo === void 0 ? void 0 : permo._id) || index;
          }
        }]);

        return MesservicesComponent;
      }();

      MesservicesComponent.ɵfac = function MesservicesComponent_Factory(t) {
        return new (t || MesservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_management_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"]));
      };

      MesservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MesservicesComponent,
        selectors: [["app-messervices"]],
        decls: 54,
        vars: 9,
        consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "card"], [1, "card-header", "card-header-primary"], [1, "card-title"], [1, "card-category"], [1, "card-body", "table-responsive"], [1, "table", "table-hover"], [1, "text-primary"], ["width", "30%"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-md-4"], [1, "card", "card-profile"], [1, "card-avatar"], ["class", "img", "style", "width:130px;height:130px", "loading", "lazy", 3, "src", 4, "ngIf"], [1, "card-body"], [1, "card-title", 2, "text-transform", "uppercase", "letter-spacing", "1px"], ["class", "card-category text-gray", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-md-12"], [1, "card", "card-chart"], [1, "card-header", "card-header-info", 2, "padding", "2px", "border-radius", "20px"], [1, "material-icons"], [1, "card-body", 2, "text-align", "left"], [1, "card-category", 2, "font-size", "17px"], [1, "card-footer"], [1, "stats"], [2, "cursor", "pointer", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["mode", "determinate", 3, "value"], [1, "badge", "badge-warning"], [1, "text-primary", "material-icons", 3, "routerLink", "queryParams"], [4, "ngIf"], ["loading", "lazy", 1, "img", 2, "width", "130px", "height", "130px", 3, "src"], [1, "card-category", "text-gray"]],
        template: function MesservicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tout mes services:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Superviseur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Avancement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Creation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Etat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MesservicesComponent_tbody_23_Template, 17, 15, "tbody", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MesservicesComponent_img_27_Template, 1, 1, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MesservicesComponent_h6_31_Template, 2, 1, "h6", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Le superviseur de ce service pri\xE8re de le contacter au cas de besoin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services)("ngForTrackBy", ctx.trackByService);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user == null ? null : ctx.user.fname, " ", ctx.user == null ? null : ctx.user.lname, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user == null ? null : ctx.user.permissions)("ngForTrackBy", ctx.trackByPermo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.user == null ? null : ctx.user.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.user == null ? null : ctx.user.tel, "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LW9mZmljZS9tZXNzZXJ2aWNlcy9tZXNzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MesservicesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-messervices',
            templateUrl: './messervices.component.html',
            styleUrls: ['./messervices.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
          }, {
            type: _services_management_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=front-office-client-layout-client-layout-module-es5.js.map