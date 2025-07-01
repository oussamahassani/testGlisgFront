(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\GED\front\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0pRC":
    /*!************************************************!*\
      !*** ./src/app/notfound/notfound.component.ts ***!
      \************************************************/

    /*! exports provided: NotfoundComponent */

    /***/
    function pRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
        return NotfoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var _c0 = function _c0() {
        return ["/"];
      };

      var NotfoundComponent = /*#__PURE__*/function () {
        function NotfoundComponent() {
          _classCallCheck(this, NotfoundComponent);
        }

        _createClass(NotfoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotfoundComponent;
      }();

      NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
        return new (t || NotfoundComponent)();
      };

      NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotfoundComponent,
        selectors: [["app-notfound"]],
        decls: 19,
        vars: 2,
        consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "error-template"], [1, "error-details"], [1, "error-actions"], [1, "btn", "btn-primary", "btn-lg", 3, "routerLink"], [1, "material-icons", "md-24"], ["href", "https://xpr.com.tn/", "target", "_blank", 1, "btn", "btn-default", "btn-lg"]],
        template: function NotfoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Oops!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 404 Not Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " D\xE9sol\xE9, une erreur s'est produite, la page demand\xE9e est introuvable! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Accueil ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Support ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["body[_ngcontent-%COMP%] {\n  background-image: url(\"https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Simple-Background-Images-2.png\");\n}\n\n.error-template[_ngcontent-%COMP%] {\n  padding: 40px 15px;\n  text-align: center;\n}\n\n.error-actions[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.error-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.material-icons.md-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxtSEFBQTtBQUVQOztBQURBO0VBQWlCLGtCQUFBO0VBQW1CLGtCQUFBO0FBTXBDOztBQUxBO0VBQWdCLGdCQUFBO0VBQWdCLG1CQUFBO0FBVWhDOztBQVRBO0VBQXNCLGtCQUFBO0FBYXRCOztBQVpBO0VBQXdCLGVBQUE7QUFnQnhCIiwiZmlsZSI6InNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Zlbm5nYWdlLXdvcmRwcmVzcy5zMy5hbWF6b25hd3MuY29tL3VwbG9hZHMvMjAxOC8wOS9TaW1wbGUtQmFja2dyb3VuZC1JbWFnZXMtMi5wbmcnKTt9XHJcbi5lcnJvci10ZW1wbGF0ZSB7cGFkZGluZzogNDBweCAxNXB4O3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5lcnJvci1hY3Rpb25zIHttYXJnaW4tdG9wOjE1cHg7bWFyZ2luLWJvdHRvbToxNXB4O31cclxuLmVycm9yLWFjdGlvbnMgLmJ0biB7IG1hcmdpbi1yaWdodDoxMHB4OyB9XHJcbi5tYXRlcmlhbC1pY29ucy5tZC0yNCB7IGZvbnQtc2l6ZTogMjRweDsgfVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notfound',
            templateUrl: './notfound.component.html',
            styleUrls: ['./notfound.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "25YW":
    /*!*********************************************!*\
      !*** ./src/app/services/auth/auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function YW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "9ans");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jwt-decode */
      "BOF4");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authservice, router) {
          _classCallCheck(this, AuthGuard);

          this.authservice = authservice;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.authservice.loggedIn()) {
              var token = localStorage.getItem('id_token');
              var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);

              if (!tokenPayload.isClient) {
                return true;
              } else {
                this.router.navigate(['/home']);
                return false;
              }
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5GY9":
    /*!********************************************************************!*\
      !*** ./src/app/front-office/components/navbar/navbar.component.ts ***!
      \********************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function GY9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! howler */
      "HlzF");
      /* harmony import */


      var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../services/notification/notification.service */
      "nak+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");

      function NavbarComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.unseen_notifications);
        }
      }

      function NavbarComponent_a_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aucune Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_ng_container_23_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r4.awsUrl, "", notification_r3.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function NavbarComponent_ng_container_23_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r6.awsUrl, "1575494319217.icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function NavbarComponent_ng_container_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_container_23_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var notification_r3 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.notifRedirect(notification_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_ng_container_23_div_4_Template, 2, 2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_ng_container_23_ng_template_5_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var notification_r3 = ctx.$implicit;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r3.image)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r3.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.timeAgo(notification_r3.createdAt));
        }
      }

      var _c0 = function _c0() {
        return ["/notifications"];
      };

      var _c1 = function _c1() {
        return ["/home"];
      };

      var _c2 = function _c2() {
        return ["/myservices"];
      };

      var _c3 = function _c3() {
        return ["/clientprofile"];
      };

      var _c4 = function _c4(a0) {
        return {
          id: a0
        };
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, element, router, authservice, changeDetectorRef, notificationService) {
          _classCallCheck(this, NavbarComponent);

          this.element = element;
          this.router = router;
          this.authservice = authservice;
          this.changeDetectorRef = changeDetectorRef;
          this.notificationService = notificationService;
          this.sound = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
            src: ['../../../../assets/audio/light.mp3']
          });
          this.listTitles = [{
            path: '/home',
            title: 'Accueil',
            icon: 'home',
            "class": ''
          }];
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
          this.awsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].awsUrl;
          this.mobile_menu_visible = 0;
          this.location = location;
          this.sidebarVisible = false;
          this.userId = authservice.getIdfromToken();
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var navbar = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
            this.router.events.subscribe(function (event) {
              _this.sidebarClose();

              var $layer = document.getElementsByClassName('close-layer')[0];

              if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
              }
            });

            if (this.isNotMobileMenu()) {
              this.loadnotification(true);
              var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__["connect"](this.baseUrl);
              socket.on(this.userId, function (message) {
                this.loadnotification(false);
              }.bind(this));
            }
          }
        }, {
          key: "isNotMobileMenu",
          value: function isNotMobileMenu() {
            if ($(window).width() > 991) {
              return true;
            }

            return false;
          }
        }, {
          key: "loadnotification",
          value: function loadnotification(oninit) {
            var _this2 = this;

            this.notificationService.getNotification(this.userId).subscribe(function (res) {
              console.log(res);
              _this2.notifications = res;
              _this2.unseen_notifications = _this2.count_unseen_notifications(res);

              if (oninit === false) {
                _this2.showNotification(res[0]);

                _this2.sound.play();
              }
            }, function (err) {
              console.log(err);
            });
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var body = document.getElementsByTagName('body')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var body = document.getElementsByTagName('body')[0];
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            // const toggleButton = this.toggleButton;
            // const body = document.getElementsByTagName('body')[0];
            var $toggle = document.getElementsByClassName('navbar-toggler')[0];
            var $layer = document.createElement('div');

            if (this.sidebarVisible === false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }

            var body = document.getElementsByTagName('body')[0];

            if (this.mobile_menu_visible == 1) {
              // $('html').removeClass('nav-open');
              body.classList.remove('nav-open');

              if ($layer) {
                $layer.remove();
              }

              setTimeout(function () {
                $toggle.classList.remove('toggled');
              }, 400);
              this.mobile_menu_visible = 0;
            } else {
              setTimeout(function () {
                $toggle.classList.add('toggled');
              }, 430);
              $layer.setAttribute('class', 'close-layer');

              if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
              } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
              }

              setTimeout(function () {
                $layer.classList.add('visible');
              }, 100);

              $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
                }, 400);
              }.bind(this);

              body.classList.add('nav-open');
              this.mobile_menu_visible = 1;
            }
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());
            var display;

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(2);
            }

            titlee = titlee.split('/').pop();

            for (var item = 0; item < this.listTitles.length; item++) {
              if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
              }
            }

            switch (titlee) {
              case 'home':
                {
                  display = 'Accueil';
                  break;
                }

              case 'myservices':
                {
                  display = 'Mes Services';
                  break;
                }

              case 'docs':
                {
                  display = 'Documents';
                  break;
                }
            }

            return display;
          }
        }, {
          key: "onLogoutClick",
          value: function onLogoutClick() {
            //localStorage.clear()
            this.authservice.logout();
          }
        }, {
          key: "count_unseen_notifications",
          value: function count_unseen_notifications(notifications) {
            var count = 0;

            for (var i = 0; i < notifications.length; ++i) {
              for (var k in notifications[i].read_by) {
                if (Object.values(notifications[i].read_by[k]).indexOf(this.userId) >= 0) {
                  count++;
                }
              }
            }

            return notifications.length - count;
          }
        }, {
          key: "notification_seen",
          value: function notification_seen() {
            var _this3 = this;

            if (this.unseen_notifications > 0) {
              this.notificationService.seennotification(this.userId).subscribe(function (res) {
                console.log(res);
                _this3.unseen_notifications = 0;
              }, function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "timeAgo",
          value: function timeAgo(date) {
            var NOW = new Date();
            var times = [['seconde', 1], ['minute', 60], ['heure', 3600], ['jour', 86400], ['semaine', 604800], ['moi', 2592000], ['an', 31536000]];
            var diff = Math.round((new Date(NOW).valueOf() - new Date(date).valueOf()) / 1000);

            for (var t = 0; t < times.length; t++) {
              if (diff < times[t][1]) {
                if (t === 0) {
                  return 'à l\'instant';
                } else {
                  diff = Math.round(diff / +times[t - 1][1]);
                  return 'Il y a ' + diff + ' ' + times[t - 1][0] + (diff === 1 && t !== 6 ? '' : 's');
                }
              }
            }

            diff = Math.round(diff / +times[6][1]);
            return 'Il y a ' + diff + ' an' + (diff === 1 ? '' : 's');
          }
        }, {
          key: "notifRedirect",
          value: function notifRedirect(notif) {
            var _this4 = this;

            if (notif.link.params) {
              this.router.navigateByUrl('/', {
                skipLocationChange: true
              }).then(function () {
                return _this4.router.navigate([notif.link.url], {
                  queryParams: _defineProperty({}, notif.link.params, notif.link.paramsValue)
                });
              });
            } else {
              this.router.navigateByUrl('/', {
                skipLocationChange: true
              }).then(function () {
                return _this4.router.navigate([notif.link.url]);
              });
            }
          }
        }, {
          key: "showNotification",
          value: function showNotification(notification) {
            var type = ['', 'info', 'success', 'warning', 'danger'];
            $.notify({
              icon: 'notifications',
              message: notification.title + ' - ' + notification.message + '</br>' + this.timeAgo(notification.createdAt)
            }, {
              type: 'info',
              timer: 4000,
              placement: {
                from: 'bottom',
                align: 'left'
              },
              template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' + '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' + '<i class="material-icons" data-notify="icon">notifications</i> ' + '<span data-notify="title">{1}</span> ' + '<span data-notify="message">{2}</span>' + '<div class="progress" data-notify="progressbar">' + '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' + '</div>' + '<a href="{3}" target="{4}" data-notify="url"></a>' + '</div>'
            });
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-client-navbar"]],
        decls: 47,
        vars: 15,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-info", "navbar-absolute", "fixed-top"], [1, "container-fluid"], [1, "navbar-wrapper"], ["href", "#", 1, "navbar-brand"], ["mat-raised-button", "", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "sr-only"], [1, "navbar-toggler-icon", "icon-bar"], ["id", "navigation", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item", "dropdown", 3, "click"], ["href", "", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], [1, "material-icons"], ["class", "notification", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-header"], [1, "scroll"], ["class", "dropdown-item", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "routerLink"], [1, "text-primary", "mx-auto"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", "text-white", 3, "routerLink", "queryParams"], [1, "material-icons", 2, "color", "white"], ["href", "/login", 1, "nav-link", 3, "click"], [1, "notification"], [1, "dropdown-item"], [1, "text-black", "mx-auto"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "row", "justify-content-start"], [1, "col-3"], [4, "ngIf", "ngIfElse"], ["defaultImage", ""], [1, "card-title", "font-weight-bold"], [1, "text-muted", "longtext"], [1, "card-text", "text-info"], [1, "rounded-circle", 2, "width", "60px", "height", "60px", 3, "src"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_5_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Toggle navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_13_listener() {
              return ctx.notification_seen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_span_17_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Notifications:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavbarComponent_a_22_Template, 3, 0, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_ng_container_23_Template, 15, 5, "ng-container", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Voir Tout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Accueil ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Mes Services ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_43_listener() {
              return ctx.onLogoutClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " D\xE9connecter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unseen_notifications > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.notifications == null ? null : ctx.notifications.length) <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c4, ctx.userId));
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".scroll[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 400px;\r\n    max-height: 275px;\r\n    overflow: scroll;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: rgb(228, 225, 225); \r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: rgb(173, 170, 170); \r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar:hover {\r\n    width: 15px;\r\n}\r\n.longtext[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    max-width: 250px;\r\n    width: auto;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtb2ZmaWNlL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0EsVUFBVTtBQUNWO0lBQ0ksVUFBVTtBQUNkO0FBRUEsVUFBVTtBQUNWO0lBQ0ksbUJBQW1COztBQUV2QjtBQUVBLFdBQVc7QUFDWDtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7O0FBRXZCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZnJvbnQtb2ZmaWNlL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNzVweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMjUsIDIyNSk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNzMsIDE3MCwgMTcwKTsgXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIge1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4ubG9uZ3RleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8ZfG":
    /*!*******************************************************!*\
      !*** ./src/app/services/employee/employee.service.ts ***!
      \*******************************************************/

    /*! exports provided: EmployeeService */

    /***/
    function ZfG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return EmployeeService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var EmployeeService = /*#__PURE__*/function () {
        function EmployeeService(http) {
          _classCallCheck(this, EmployeeService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl;
        }

        _createClass(EmployeeService, [{
          key: "getHolidays",
          value: function getHolidays() {
            return this.http.get(this.baseUrl + '/api/googleCalendar/', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getconges",
          value: function getconges() {
            return this.http.get(this.baseUrl + '/api/conge/all', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "registerUser",
          value: function registerUser(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/user/register', user, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/user', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('id_token');
          }
        }, {
          key: "getIdfromToken",
          value: function getIdfromToken() {
            var jwtData = this.getToken().split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData); //console.log('id: ' + decodedJwtData._id);

            return decodedJwtData._id;
          }
        }, {
          key: "getOneUser",
          value: function getOneUser() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getIdfromToken();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            var user;
            return this.http.get(this.baseUrl + '/api/user/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneUserImage",
          value: function getOneUserImage(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/uploads/users/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/user/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/user/delete/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "createbill",
          value: function createbill(bill) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.post(this.baseUrl + '/api/bill/create', bill, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getbill",
          value: function getbill(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.get(this.baseUrl + '/api/bill/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getAllBills",
          value: function getAllBills() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/bill', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getbillByClientId",
          value: function getbillByClientId(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.get(this.baseUrl + '/api/bill/getbillsByclient/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getbillForClient",
          value: function getbillForClient(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.get(this.baseUrl + '/api/bill/getbillForClient/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getallbill",
          value: function getallbill(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json');
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/bill/getAllbillForClient/' + id, {
              headers: headers,
              responseType: 'json'
            });
          }
        }, {
          key: "UpdateBillStatus",
          value: function UpdateBillStatus(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.put(this.baseUrl + '/api/bill/UpdateBillStatus/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getImagefromToken",
          value: function getImagefromToken() {
            var jwtData = this.getToken().split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData);
            console.log('id: ' + decodedJwtData._id);
            return decodedJwtData.image;
          }
        }, {
          key: "UpdateBillsend",
          value: function UpdateBillsend(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.put(this.baseUrl + '/api/bill/UpdateBillsend/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateBillPayment",
          value: function updateBillPayment(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/bill/updateBillPayment/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateDebour",
          value: function updateDebour(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/bill/updateDebour/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            var token = localStorage.getItem('id_token');
            this.authToken = token;
          } ////////////////////////
          ////////////////////////

        }, {
          key: "createFour",
          value: function createFour(four) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.post(this.baseUrl + '/api/fournisseur/create', four, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getFour",
          value: function getFour(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.get(this.baseUrl + '/api/fournisseur/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getAllFour",
          value: function getAllFour() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/fournisseur', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateFour",
          value: function updateFour(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/fournisseur/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteFour",
          value: function deleteFour(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/fournisseur/delete/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          } /////////////////////////
          ////////////////////////

        }, {
          key: "createDec",
          value: function createDec(four) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.post(this.baseUrl + '/api/decaissement/create', four, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getDec",
          value: function getDec(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.get(this.baseUrl + '/api/decaissement/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getAllDec",
          value: function getAllDec() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/decaissement', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateDec",
          value: function updateDec(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/decaissement/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteDec",
          value: function deleteDec(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http["delete"](this.baseUrl + '/api/decaissement/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }]);

        return EmployeeService;
      }();

      EmployeeService.ɵfac = function EmployeeService_Factory(t) {
        return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: EmployeeService,
        factory: EmployeeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmployeeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
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

    },

    /***/
    "8jqe":
    /*!*****************************************************!*\
      !*** ./src/app/services/user-Rh/user-rh.service.ts ***!
      \*****************************************************/

    /*! exports provided: UserRhService */

    /***/
    function jqe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRhService", function () {
        return UserRhService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var UserRhService = /*#__PURE__*/function () {
        function UserRhService(http) {
          _classCallCheck(this, UserRhService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl;
        }

        _createClass(UserRhService, [{
          key: "registerUser",
          value: function registerUser(user) {
            return this.http.post(this.baseUrl + '/api/user/register', user, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.http.get(this.baseUrl + '/api/user/', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneUser",
          value: function getOneUser(id) {
            return this.http.get(this.baseUrl + '/api/user/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            return this.http["delete"](this.baseUrl + '/api/user/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, data) {
            return this.http.put(this.baseUrl + '/api/user/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getUsersByDepart",
          value: function getUsersByDepart() {
            return this.http.get(this.baseUrl + '/api/user/getUsersByDepart/', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneUserConge",
          value: function getOneUserConge(id) {
            return this.http.get(this.baseUrl + '/api/user/getOneUserConge/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneUserAttestation",
          value: function getOneUserAttestation(id) {
            return this.http.get(this.baseUrl + '/api/user/getOneUser/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "registerUserShared",
          value: function registerUserShared(user) {
            return this.http.post(this.baseUrl + '/api/shared/registerUser', user, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            var token = localStorage.getItem('id_token');
            this.authToken = token;
          }
        }]);

        return UserRhService;
      }();

      UserRhService.ɵfac = function UserRhService_Factory(t) {
        return new (t || UserRhService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      UserRhService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserRhService,
        factory: UserRhService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserRhService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
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

    },

    /***/
    "9ans":
    /*!***********************************************!*\
      !*** ./src/app/services/auth/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function ans(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "tl5U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var intro_js_intro_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! intro.js/intro.js */
      "R5/Y");
      /* harmony import */


      var intro_js_intro_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(intro_js_intro_js__WEBPACK_IMPORTED_MODULE_6__);

      var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.introJS = intro_js_intro_js__WEBPACK_IMPORTED_MODULE_6__();
          this.permissions = [];
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
          this.cachedRequests = [];
          this.introjs = localStorage.getItem('intro') == 'true';
          console.log(this.introjs);
        }

        _createClass(AuthService, [{
          key: "collectFailedRequest",
          value: function collectFailedRequest(request) {
            this.cachedRequests.push(request);
          }
        }, {
          key: "retryFailedRequests",
          value: function retryFailedRequests() {// retry the requests. this method can
            // be called after the token is refreshed
          }
        }, {
          key: "authenticateUser",
          value: function authenticateUser(user) {
            return this.http.post(this.baseUrl + '/api/user/auth', user, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "authenticateClient",
          value: function authenticateClient(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/client/auth', user, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "sotreUserData",
          value: function sotreUserData(token, user) {
            var intro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'false';
            localStorage.setItem('id_token', token);
            localStorage.setItem('intro', intro);
            this.user = user;
          }
        }, {
          key: "getOneUser",
          value: function getOneUser(id) {
            return this.http.get(this.baseUrl + '/api/user/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneUserLogin",
          value: function getOneUserLogin(id) {
            return this.http.get(this.baseUrl + '/api/user/login/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneClient",
          value: function getOneClient(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/client/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getTokenExpirationDate",
          value: function getTokenExpirationDate() {
            var jwtData = this.getToken().split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decoded = JSON.parse(decodedJwtJsonData);
            if (decoded.exp === undefined) return null;
            var date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return date;
          }
        }, {
          key: "loggedIn",
          value: function loggedIn() {
            var token;
            if (!token) token = this.getToken();
            if (!token) return false;
            var date = this.getTokenExpirationDate();
            if (date === undefined) return false;
            return date.valueOf() > new Date().valueOf();
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            // this.user = null ;
            localStorage.clear();
            setTimeout(function () {
              _this5.router.navigate(['/login']);
            }, 2000);
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var info = JSON.parse(localStorage.getItem('user'));
            return info;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('id_token');
          }
        }, {
          key: "getIdfromToken",
          value: function getIdfromToken() {
            if (this.getToken()) {
              var jwtData = this.getToken().split('.')[1];
              var decodedJwtJsonData = window.atob(jwtData);
              var decodedJwtData = JSON.parse(decodedJwtJsonData);
              console.log('id: ' + decodedJwtData._id);
              return decodedJwtData._id;
            } else {
              return 'false';
            }
          }
        }, {
          key: "getifadmin",
          value: function getifadmin() {
            this.getToken();
            var jwtData = this.getToken().split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData);
            console.log('id: ' + decodedJwtData.grade);
            if (decodedJwtData.grade == 100 || decodedJwtData.isAdmin == true) return 'true';else return 'false';
          }
        }, {
          key: "getUserfromToken",
          value: function getUserfromToken() {
            var jwtData = this.getToken().split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData);
            return decodedJwtData;
          }
        }, {
          key: "isClient",
          value: function isClient() {
            var jwtData = this.getToken().split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData);
            console.log('id: ' + decodedJwtData.isClient);
            return decodedJwtData.isClient;
          }
        }, {
          key: "getGroupes",
          value: function getGroupes(GroupeIds) {
            return this.http.get(this.baseUrl + '/api/groupe/getgroupes/' + GroupeIds, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getAllGroupes",
          value: function getAllGroupes() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/groupe', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            var token = localStorage.getItem('id_token');
            this.authToken = token;
          }
        }, {
          key: "stockToken",
          value: function stockToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this6 = this;

              var permessionId;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      permessionId = [];
                      this.getOneUser(this.getIdfromToken()).subscribe(function (res) {
                        res.permissions.forEach(function (permission) {
                          permessionId.push(permission);
                        });

                        _this6.getGroupes(permessionId).subscribe(function (res) {
                          res.forEach(function (groupe) {
                            _this6.permissions = _this6.permissions.concat(groupe.permissions);
                          });
                        }, function (err) {
                          console.log(err);
                        });
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getAllDeparts",
          value: function getAllDeparts() {
            return this.http.get(this.baseUrl + '/api/departement', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "stockDeparts",
          value: function stockDeparts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.getAllDeparts().subscribe(function (res) {
                        _this7.departs = res;
                        console.log("departement", res);
                      }, function (err) {
                        console.log(err);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "checkToken",
          value: function checkToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var body, loggedIn;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.loggedIn() && this.getIdfromToken() != 'false')) {
                        _context3.next = 16;
                        break;
                      }

                      body = {
                        token: this.getToken()
                      };
                      _context3.next = 4;
                      return this.http.post(this.baseUrl + '/api/shared/checkToken', body, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-type', 'application/json')
                      }).toPromise();

                    case 4:
                      loggedIn = _context3.sent;
                      console.log(loggedIn);

                      if (loggedIn) {
                        _context3.next = 13;
                        break;
                      }

                      this.introJS = false;
                      this.exitingIntroJs();
                      this.router.navigate(['/lockScreen'], {
                        queryParams: {
                          id: this.getIdfromToken()
                        }
                      });
                      this.logout();
                      _context3.next = 14;
                      break;

                    case 13:
                      return _context3.abrupt("return", true);

                    case 14:
                      _context3.next = 18;
                      break;

                    case 16:
                      this.router.navigate(['/lockScreen'], {
                        queryParams: {
                          id: this.getIdfromToken()
                        }
                      });
                      this.logout();

                    case 18:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "lockScreen",
          value: function lockScreen() {
            this.router.navigate(['/lockScreen'], {
              queryParams: {
                id: this.getIdfromToken()
              }
            });
            this.logout();
          }
        }, {
          key: "getVerification",
          value: function getVerification(token) {
            return this.http.get(this.baseUrl + '/api/verification/' + token, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "startIntroJs",
          value: function startIntroJs() {
            var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if ($(window).width() > 991) {
              if (from != 0) {
                localStorage.setItem('stepNumber', from.toString());
              }

              this.introjs = true;
              localStorage.setItem('intro', 'true');
              location.reload();
            } else {
              alert("Desolé le guide n'est pas disponible sur les petits ecrans");
            }
          }
        }, {
          key: "exitingIntroJs",
          value: function exitingIntroJs() {
            this.introjs = false;
            localStorage.setItem('intro', 'false');

            if (!(this.introJS._currentStep >= 12 && this.introJS._currentStep <= 17 && this.introJS._currentStep > 0)) {
              localStorage.setItem('stepNumber', this.introJS._currentStep);
            }

            location.reload();
          }
        }, {
          key: "removingLayer",
          value: function removingLayer() {
            //remove overlay layers from the page
            var el = document.getElementsByClassName("introjs-overlay");
            var overlayLayers = el;

            if (overlayLayers && overlayLayers.length > 0) {
              for (var i = overlayLayers.length - 2; i >= 0; i--) {
                //for fade-out animation
                var overlayLayer = overlayLayers[i];
                setTimeout(function () {
                  if (this.parentNode) {
                    this.parentNode.removeChild(this);
                  }
                }.bind(overlayLayer), 500);
              }

              ;
            } // let el = document.getElementsByClassName("introjs-overlay")[0] as HTMLElement;
            // console.log(el);
            // el.remove();

          }
        }, {
          key: "addUserActivity",
          value: function addUserActivity(iduser, type, date, time) {
            var activity = {
              userId: iduser,
              activityType: type,
              date: date,
              time: time
            };
            console.log(activity);
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/pointage/register/', activity, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getUserActivities",
          value: function getUserActivities(iduser) {
            console.log(iduser);
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/pointage/' + iduser, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getalluserActivities",
          value: function getalluserActivities() {
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/pointage/', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "startIntro",
          value: function startIntro() {
            this.introJS.setOptions({
              steps: [{
                intro: '<h4>Bienvenue à la plateforme XPR GED</h4><hr><h5> Suivez ce guide afin de gérer efficacement et rapidement, votre cabinet enfin 100% digital.<h5>',
                position: 'top'
              }, {
                element: '#step1',
                intro: "<h4>Configurez votre cabinet</h4><hr><h5>En commençant par la création de votre banque et toutes les données de votre compte.</h5>",
                position: 'right'
              }, {
                element: '#step2',
                intro: "<h4>Configurez vos données bancaires</h4><hr> <h5>Merci de renseigner les données de votre banque puis cliquez sur le bouton « Confirmer ».</h5>",
                position: 'left'
              }, {
                element: '#step3',
                intro: "<h4>Gérez vos banques.</h4><hr><h5>Cette rubrique vous permet de gérer la banque créée précédemment, la modifier, la supprimer ou encore ajouter d’autres banques.<h5>",
                position: 'top'
              }, {
                element: '#step4',
                intro: "<h4>Gérez  vos groupes d’utilisateurs.</h4><hr><h5>Configurez vos groupes de collaborateurs. Chaque groupe pourra avoir  un niveau d’habilitation donné (Ex : par séniorité par département…. ).<h5>",
                position: 'right'
              }, {
                element: '#step5',
                intro: "<h4>Créez vos groupes.</h4><hr><h5>Cliquez sur \"NOUVEAU GROUPE\" pour ajouter un groupe de permissions</h5>",
                position: 'right'
              }, {
                element: '#step6',
                intro: "<h4>Affectez les droits d’accès à vos groupes.</h4><hr><h5>Cochez les permissions que vous souhaitez affecter à votre groupe de collaborateurs.</h5>",
                position: 'right'
              }, {
                element: '#step7',
                intro: "<h4>Ajoutez  vos collaborateurs.</h4><hr><h5>Cliquez sur le bouton « Ajouter un collaborateur ».</h5>",
                position: 'right'
              }, {
                element: '#step8',
                intro: "<h4>Renseignez les données de vos collaborateurs.</h4><hr><h5>Remplissez la fiche de votre collaborateur puis cliquez sur le bouton « valider ».</h5>",
                position: 'top'
              }, {
                element: '#step9',
                intro: "<h4>Gérez vos clients.</h4><hr><h5>Cette rubrique vous permet de gérer vos clients.</h5>",
                position: 'right'
              }, {
                element: '#step10',
                intro: "<h4>Ajoutez  vos clients.</h4><hr><h5>Cliquez sur le bouton «Nouveau client ».</h5>",
                position: 'right'
              }, {
                element: '#step11',
                intro: "<h4>Créez vos clients .</h4><hr><h5>Remplissez la fiche de votre client puis cliquez sur le bouton «Sauvegarder». Vous devriez Renseigner l’identifiant (Email) et le mot de passe qui permettra à votre client de se connecter à la plateforme. <br><p style='color:red'><h4>Important: </h4>Cette étape est primordiale pour passer aux prochaines rubriques de votre Démo.<p></h5>",
                position: 'right'
              }, {
                element: '#step12',
                intro: "<h5>Ici vous trouvez tout ce qui concerne votre client.</h5>",
                position: 'left'
              }, {
                element: '#step13',
                intro: "<h4>Créez vos services et tâches:</h4><hr><h5>Créez les services et les tâches offerts par votre cabinet.<br>(Exemple : Service : Tenue de comptabilité ; Tâches : saisie comptable / déclarations mensuelles) <br>Ces services peuvent concerner les départements majeurs de votre cabinet <br>(Exemple : Expertise comptable, Audit, Conseil).</h5>",
                position: 'top'
              }, {
                element: '#step14',
                intro: "<h4>Créez vos tâches:</h4><hr><h5>Commencez par créer une tâche.<br> (Exemple : saisie comptable / déclarations mensuelles)<br> Libellez le service crée (Exemple : Tenue de comptabilité)<br> La tâche précédemment créée doit être rattachée à un service.<br> Vous pouvez renseigner pour chaque tâche le temps prévisionnel à consommer (Exemple : Saisie Comptable – 16H par mois) ; ainsi que la récurrence de la tâche. <br>Vous pouvez créer autant de tâches que vous le souhaitez.</h5>",
                position: 'top'
              }, {
                element: '#step15',
                intro: "<h4>Affectation des services à un département:</h4><hr><h5>Cette rubrique vous permet d’affecter les services que votre client a contractés. les tâches ainsi crées précédemment et rattachés à un service donnée seront automatiquement affectés à votre client. Vous pouvez renseigner: <br>-	la date de début et de fin de votre mission avec le client.<br> -	Le(s) collaborateur (s) affecté(s)  à ce compte client.<br>-	La date de début ainsi que la récurrence de la tâche par collaborateur.<br>-	Le superviseur du collaborateur précédemment désigné <br>A la fin, cliquez sur le bouton « Sauvegarder »</h5>",
                position: 'top'
              }, {
                element: '#step16',
                intro: "<h4>Créez vos services et tâches à partir de la rubrique « Département »</h4><hr><h5>La plateforme vous offre la possibilité de crée vos services et tâches à partir de la rubrique client et département.<br><h4>Mêmes étapes que décrits précédemment.</h4></h5>",
                position: 'right',
                disableInteraction: true
              }, {
                element: '#step17',
                intro: "<h4>Générez vos notes d’honoraire:</h4><hr><h5>Cette rubrique vous permet d’avoir un aperçu de chaque service contracté par votre client (Exemple Avancement 10% ; 20% ; 100%) ; de générer vos notes d’honoraires y référents.<br>Une fois le montant de la note d’honoraire saisie manuellement, vous pouvez renseigner  mode de règlement y correspondant. Des lors, votre note d’honoraire.</h5> ",
                position: 'right'
              }, {
                element: '#step18',
                intro: "<h4>Gérez votre trésorerie (Encaissement):</h4><hr><h5>XPR GED vous offre une gestion simplifiée de votre trésorerie, commençons  par le volet encaissements.</h5>",
                position: 'right'
              }, {
                element: '#step19',
                intro: "<h4>Gérez votre tableau des encaissements:</h4><hr><h5>Cette rubrique vous offre un aperçu général de  l’ensemble de vos encaissements par : <br>-	service,<br>-	client,<br>-	périodicité .</h5>",
                position: 'left'
              }, {
                element: '#step20',
                intro: "<h4>Gérez votre tableau de décaissements:</h4><hr><h5>Cette rubrique vous offre un aperçu général de  l’ensemble de vos décaissements.<br>Il faut commencer par référencer un fournisseur en cliquant sur « Gestion des fournisseurs » en alimentant les données de sa fiche. <br>Le fournisseur référencé, l’utilisateur devrait créer les achats opérés  par votre cabinet auprès de ce dernier en cliquant sur le bouton « Achat ».</h5>",
                position: 'left'
              }, {
                element: '#step21',
                intro: "<h4>Gérez vos règlements.</h4><hr><h5>Cette rubrique vous permet de rapprocher les avis d’opérés de votre banque avec tous vos chèques et traites en circulation a l’encaissement et au décaissement</h5>",
                position: 'left'
              }, {
                element: '#step22',
                intro: "<h4>Gérez vos appels d’offre.</h4><hr><h5>Cette rubrique vous permet d’avoir une mini base de données de tous vos appels d’offre. Une fois alimentée, cette BDD sera un référentiel de consultation.</h5>",
                position: 'top'
              }, {
                element: '#step23',
                intro: "<h4>Alimentez votre base d’appels d’offre:</h4><hr><h5>Cette rubrique vous permet de renseigner les données majeures d’un AO :<br>-	Nom de la société <br>-	Référence <br>-	Secteur de l’activité <br>-	Titre de la consultation <br>-	Nom du collaborateur affecté<br>vous pouvez joindre la consultation en question</h5>",
                position: 'bottom'
              }, {
                element: '#step24',
                intro: "<h4>Alimentez vos secteurs d’activité:</h4><hr><h5>Cette rubrique vous permet de créer les secteurs d’activité auxquelles votre cabinet participe</h5>",
                position: 'left'
              }, {
                element: '#step25',
                intro: "<h5>Maintenant vous y trouver le secteur ajouter</h5>",
                position: 'top'
              }, {
                element: '#step26',
                intro: "<h5>Maintenant il suffit d'ajouter les collaborateurs concernée de cette appele et de la charger sur la plâtform.</h5>",
                position: 'left'
              }, {
                intro: "<h5>J'espère que cela suffit pour vous permettre de continuer.<br>N'hésitez pas à nous contacter pour tout renseignement complémentaire<br><b>contact@xpr.com.tn<b></h5>",
                position: 'left'
              }],
              nextLabel: 'Suivant',
              prevLabel: 'Précédent',
              skipLabel: 'Passer',
              doneLabel: 'Terminer',
              keyboardNavigation: false,
              exitOnOverlayClick: true,
              scrollToElement: true,
              overlayOpacity: 0.6,
              hidePrev: true,
              hideNext: true,
              tooltipClass: 'myIntroJs',
              showProgress: false,
              showStepNumbers: false,
              showButtons: true,
              showBullets: false
            }).start();
            var that = this;
            var laststep = 0;
            this.introJS.onchange(function (targetElement) {
              that.removingLayer();
              that.introjs = true;
              localStorage.setItem('intro', 'true');
              var id = targetElement.id;
              id = id.substring(4);
              console.log(id);
              var el;

              switch (this._currentStep) {
                case 2:
                  that.router.navigate(['/configuration']);
                  break;

                case 3:
                  if (that.router.url !== '/configuration') {
                    that.router.navigate(['/configuration']);
                  }

                  break;

                case 4:
                  el = document.getElementById("step4");
                  el.scrollIntoView();
                  break;

                case 5:
                  that.router.navigate(['/groupes']);
                  break;

                case 6:
                  if (this._currentStep != id) {
                    el = document.getElementById("step5");
                    el.click();
                  }

                  break;

                case 7:
                  el = document.getElementById("step7");
                  el.scrollIntoView();
                  that.router.navigate(['/usersRh']);
                  break;

                case 8:
                  el = document.getElementById("step7");
                  el.scrollIntoView();
                  that.router.navigate(['/userRh']);
                  break;

                case 9:
                  el = document.getElementById("step0");
                  el.scrollIntoView();
                  break;

                case 10:
                  that.router.navigate(['/clients']);
                  break;

                case 11:
                  if (this._currentStep != id) {
                    el = document.getElementById("step10");
                    el.click();
                  }

                  break;

                case 14:
                  el = document.getElementById("newclient");
                  console.log(el);
                  el.click();
                  break;

                case 15:
                  el = document.getElementById("affectservice");
                  el.click();
                  break;

                case 17:
                  el = document.getElementById("all_services");
                  el.click();
                  break;

                case 18:
                  el = document.getElementById("step18");
                  el.scrollIntoView();
                  break;

                case 19:
                  that.router.navigate(['/treso']);
                  break;

                case 20:
                  that.router.navigate(['/decaissement']);
                  break;

                case 21:
                  that.router.navigate(['/reglements']);
                  break;

                case 22:
                  that.router.navigate(['/addAppel']);
                  break;

                case 24:
                  if (laststep < id) {
                    laststep = id;
                    el = document.getElementById("categoryModal");

                    if (!el.classList.contains('show')) {
                      el = document.getElementById("openCat");
                      el.click();
                    }
                  }

                  break;

                case 25:
                  el = document.getElementById("categoryModal");

                  if (el.classList.contains('show')) {
                    el = document.getElementById("closeCat");
                    el.click();
                  }

                  break;

                case 26:
                  el = document.getElementById("bootomPage");
                  el.scrollIntoView();
                  break;
              }
            });
            this.introJS.oncomplete(function () {
              that.exitingIntroJs();
            });
            this.introJS.onexit(function () {
              that.exitingIntroJs();
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        baseUrl: 'https://long-stingy-penalty.glitch.me',
        awsUrl: 'https://long-stingy-penalty.glitch.me/',
        uri: 'https://long-stingy-penalty.glitch.me/api/files/upload/',
        secret: 'miaow'
      };
      /***/
    },

    /***/
    "COB/":
    /*!************************************************!*\
      !*** ./src/app/services/auth/prevent.login.ts ***!
      \************************************************/

    /*! exports provided: PreventLogin */

    /***/
    function COB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreventLogin", function () {
        return PreventLogin;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "9ans");

      var PreventLogin = /*#__PURE__*/function () {
        function PreventLogin(authservice, router) {
          _classCallCheck(this, PreventLogin);

          this.authservice = authservice;
          this.router = router;
        }

        _createClass(PreventLogin, [{
          key: "canActivate",
          value: function canActivate() {
            if (!this.authservice.loggedIn()) {
              return true;
            } else {
              this.router.navigate(['dashboard']);
              return false;
            }
          }
        }]);

        return PreventLogin;
      }();

      PreventLogin.ɵfac = function PreventLogin_Factory(t) {
        return new (t || PreventLogin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      PreventLogin.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PreventLogin,
        factory: PreventLogin.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreventLogin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Cm75":
    /*!*********************************************!*\
      !*** ./src/app/services/auth/role.guard.ts ***!
      \*********************************************/

    /*! exports provided: RoleGuard */

    /***/
    function Cm75(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleGuard", function () {
        return RoleGuard;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "9ans"); // tslint:disable-next-line:label-position


      var RoleGuard = /*#__PURE__*/function () {
        function RoleGuard(authservice, router) {
          _classCallCheck(this, RoleGuard);

          this.authservice = authservice;
          this.router = router;
        }

        _createClass(RoleGuard, [{
          key: "canActivate",
          value: function canActivate(Route) {
            var _this8 = this;

            var permessionId = [];
            this.authservice.getOneUser(this.authservice.getIdfromToken()).subscribe(function (res) {
              res.permissions.forEach(function (permission) {
                permessionId.push(permission);
              });

              _this8.authservice.getGroupes(permessionId).subscribe(function (res) {
                permessionId = res;
                var role = [];
                permessionId.forEach(function (groupe) {
                  role = role.concat(groupe.permissions);
                });
                var expectedRole = Route.data.expectedRole.split(',');
                var haveAccess = false;
                expectedRole.forEach(function (Myrole) {
                  if (role.includes(Myrole)) {
                    haveAccess = true;
                  }
                });

                if (!_this8.authservice.loggedIn() || !haveAccess) {
                  // navigate to not found page
                  if (_this8.authservice.introjs) {
                    _this8.authservice.introJS.start().nextStep();
                  }

                  _this8.router.navigate(['/mydashboard'], {
                    queryParams: {
                      id: _this8.authservice.getIdfromToken()
                    }
                  });

                  return false;
                }
              }, function (err) {
                console.log(err);
              });
            });
            return true;
          }
        }]);

        return RoleGuard;
      }();

      RoleGuard.ɵfac = function RoleGuard_Factory(t) {
        return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      RoleGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoleGuard,
        factory: RoleGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FrX9":
    /*!**************************************************************!*\
      !*** ./src/app/front-office/components/components.module.ts ***!
      \**************************************************************/

    /*! exports provided: FrontComponentsModule */

    /***/
    function FrX9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FrontComponentsModule", function () {
        return FrontComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer/footer.component */
      "bt3r");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "5GY9");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "UYYx");

      var FrontComponentsModule = function FrontComponentsModule() {
        _classCallCheck(this, FrontComponentsModule);
      };

      FrontComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FrontComponentsModule
      });
      FrontComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FrontComponentsModule_Factory(t) {
          return new (t || FrontComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FrontComponentsModule, {
          declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]],
          exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "H+l3":
    /*!*********************************************************************!*\
      !*** ./src/app/back-office/components/sidebar/sidebar.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ROUTES, SidebarComponent */

    /***/
    function HL3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! perfect-scrollbar */
      "t/UT");
      /* harmony import */


      var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/notification/notification.service */
      "nak+");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var howler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! howler */
      "HlzF");
      /* harmony import */


      var howler__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SidebarComponent_div_6_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_div_6_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_div_6_a_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aucune Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_div_6_a_21_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r12.awsUrl, "", notification_r11.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SidebarComponent_div_6_a_21_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r14.baseUrl, "/uploads/img/icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SidebarComponent_div_6_a_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_6_a_21_div_3_Template, 2, 2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_6_a_21_ng_template_4_Template, 1, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r11 = ctx.$implicit;

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", notification_r11.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r11.image)("ngIfElse", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r11.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r11.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.timeAgo(notification_r11.createdAt));
        }
      }

      var _c0 = function _c0() {
        return ["/configuration"];
      };

      function SidebarComponent_div_6_li_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "settings_applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return ["/user-profile"];
      };

      var _c2 = function _c2() {
        return ["/notifications"];
      };

      function SidebarComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_6_Template_li_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.notification_seen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SidebarComponent_div_6_span_14_Template, 2, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SidebarComponent_div_6_span_15_Template, 2, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Notifications:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SidebarComponent_div_6_a_20_Template, 3, 0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SidebarComponent_div_6_a_21_Template, 14, 6, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SidebarComponent_div_6_li_22_Template, 6, 2, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Voir Tout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.awsUrl, "", ctx_r0.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.unseen_notifications, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.unseen_notifications <= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.unseen_notifications > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.notifications == null ? null : ctx_r0.notifications.length) <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.notifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.permissions == null ? null : ctx_r0.permissions.includes("config"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        }
      }

      var _c3 = function _c3() {
        return ["/dashboard"];
      };

      function SidebarComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vue d'ensemble");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
        }
      }

      var _c4 = function _c4() {
        return ["/clients"];
      };

      function SidebarComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mes clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " person ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
        }
      }

      var _c5 = function _c5() {
        return ["/Gestiondesservice"];
      };

      function SidebarComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gestion de service ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c5));
        }
      }

      var _c6 = function _c6() {
        return ["/treso"];
      };

      function SidebarComponent_div_17_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tableau des encaissements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c6));
        }
      }

      var _c7 = function _c7() {
        return ["/decaissement"];
      };

      function SidebarComponent_div_17_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tableau des d\xE9caissements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c7));
        }
      }

      var _c8 = function _c8() {
        return ["/reglements"];
      };

      function SidebarComponent_div_17_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "playlist_add_check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gestion des r\xE8glements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c8));
        }
      }

      function SidebarComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Gestion de treso ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_17_a_5_Template, 7, 2, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_div_17_a_6_Template, 5, 2, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_div_17_a_7_Template, 5, 2, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " attach_money");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.permissions == null ? null : ctx_r4.permissions.includes("encaissement"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.permissions == null ? null : ctx_r4.permissions.includes("decaissement"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.permissions == null ? null : ctx_r4.permissions.includes("reglement"));
        }
      }

      var _c9 = function _c9() {
        return ["/usersRh"];
      };

      function SidebarComponent_div_18_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "people_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gestion des collaborateurs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c9));
        }
      }

      var _c10 = function _c10() {
        return ["/conges-Rh"];
      };

      function SidebarComponent_div_18_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder_shared");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gestion des cong\xE9s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c10));
        }
      }

      var _c11 = function _c11() {
        return ["/mytimesheets"];
      };

      function SidebarComponent_div_18_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Timesheets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c11));
        }
      }

      var _c12 = function _c12() {
        return ["/AttestationRh"];
      };

      function SidebarComponent_div_18_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "featured_play_list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gestion des attestations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c12));
        }
      }

      function SidebarComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ressources humaines ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_18_a_5_Template, 5, 2, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_div_18_a_6_Template, 5, 2, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_div_18_a_7_Template, 5, 2, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_div_18_a_8_Template, 5, 2, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "groups");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.permissions == null ? null : ctx_r5.permissions.includes("rhUpdate")) || (ctx_r5.permissions == null ? null : ctx_r5.permissions.includes("rhCreate")) || (ctx_r5.permissions == null ? null : ctx_r5.permissions.includes("rhView")) || (ctx_r5.permissions == null ? null : ctx_r5.permissions.includes("rhDelete")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.permissions == null ? null : ctx_r5.permissions.includes("rhDemande"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.permissions == null ? null : ctx_r5.permissions.includes("reglement"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.permissions == null ? null : ctx_r5.permissions.includes("rhDemande"));
        }
      }

      var _c13 = function _c13() {
        return ["/service"];
      };

      var ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'bar_chart',
        "class": ''
      }, {
        path: '/user-profile',
        title: 'User Profile',
        icon: 'group',
        "class": ''
      }, {
        path: '/table-list',
        title: 'Table List',
        icon: 'content_paste',
        "class": ''
      }, {
        path: '/typography',
        title: 'Typography',
        icon: 'library_books',
        "class": ''
      }, {
        path: '/icons',
        title: 'Icons',
        icon: 'bubble_chart',
        "class": ''
      }, {
        path: '/maps',
        title: 'Maps',
        icon: 'location_on',
        "class": ''
      }, {
        path: '/notifications',
        title: 'Notifications',
        icon: 'notifications',
        "class": ''
      }, {
        path: '/groupes',
        title: 'Groupes',
        icon: 'groupes',
        "class": ''
      }];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(authservice, notificationService, router, changeDetectorRef) {
          var _this9 = this;

          _classCallCheck(this, SidebarComponent);

          this.authservice = authservice;
          this.notificationService = notificationService;
          this.router = router;
          this.changeDetectorRef = changeDetectorRef;
          this.AOexpanded = false;
          this.Tresoexpanded = false;
          this.Hrexpanded = false;
          this.Paramexpanded = false;
          this.sound = new howler__WEBPACK_IMPORTED_MODULE_7__["Howl"]({
            src: ['../../../../assets/audio/light.mp3']
          });
          this.unseen_notifications = 0;
          this.awsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].awsUrl;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
          this.userId = authservice.getIdfromToken();
          authservice.getOneUser(this.userId).subscribe(function (res) {
            _this9.image = res.image;
          }, function (err) {
            console.log(err);
          });
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPermissions();
            this.menuItems = ROUTES.filter(function (menuItem) {
              return menuItem;
            });
            this.loadnotification(true);

            if (this.isMobileMenu()) {
              var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__["connect"](this.baseUrl);
              socket.on(this.userId, function (message) {
                if (this.isMobileMenu()) {
                  this.loadnotification(false);
                }
              }.bind(this));
            }
          }
        }, {
          key: "isMobileMenu",
          value: function isMobileMenu() {
            if ($(window).width() > 991) {
              return false;
            }

            return true;
          }
        }, {
          key: "loadnotification",
          value: function loadnotification(oninit) {
            var _this10 = this;

            this.notificationService.getNotification(this.userId).subscribe(function (res) {
              console.log(res);
              _this10.notifications = res;
              _this10.unseen_notifications = _this10.count_unseen_notifications(res);

              if (oninit === false) {
                _this10.showNotification(res[0]);

                _this10.sound.play();
              }
            }, function (err) {
              console.log(err);
            });
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "timeAgo",
          value: function timeAgo(date) {
            var NOW = new Date();
            var times = [['seconde', 1], ['minute', 60], ['heure', 3600], ['jour', 86400], ['semaine', 604800], ['moi', 2592000], ['an', 31536000]];
            var diff = Math.round((new Date(NOW).valueOf() - new Date(date).valueOf()) / 1000);

            for (var t = 0; t < times.length; t++) {
              if (diff < times[t][1]) {
                if (t === 0) {
                  return 'à l\'instant';
                } else {
                  diff = Math.round(diff / +times[t - 1][1]);
                  return 'Il y a ' + diff + ' ' + times[t - 1][0] + (diff === 1 && t !== 6 ? '' : 's');
                }
              }
            }

            diff = Math.round(diff / +times[6][1]);
            return 'Il y a ' + diff + ' an' + (diff === 1 ? '' : 's');
          }
        }, {
          key: "count_unseen_notifications",
          value: function count_unseen_notifications(notifications) {
            var count = 0;

            for (var i = 0; i < notifications.length; ++i) {
              for (var k in notifications[i].read_by) {
                if (Object.values(notifications[i].read_by[k]).indexOf(this.userId) >= 0) {
                  count++;
                }
              }
            }

            return notifications.length - count;
          }
        }, {
          key: "notification_seen",
          value: function notification_seen() {
            var _this11 = this;

            if (this.unseen_notifications > 0) {
              this.notificationService.seennotification(this.userId).subscribe(function (res) {
                console.log(res);
                _this11.unseen_notifications = 0;
              }, function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "onLogoutClick",
          value: function onLogoutClick() {
            this.authservice.logout();
          }
        }, {
          key: "getPermissions",
          value: function getPermissions() {
            var _this12 = this;

            var permessionId = [];
            this.authservice.getOneUser(this.authservice.getIdfromToken()).subscribe(function (res) {
              res.permissions.forEach(function (permission) {
                permessionId.push(permission);
              });

              _this12.authservice.getGroupes(permessionId).subscribe(function (res) {
                permessionId = res;
                var role = [];
                permessionId.forEach(function (groupe) {
                  role = role.concat(groupe.permissions);
                });
                _this12.permissions = role;
                console.log("permission", permessionId);
                setTimeout(function () {
                  var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
                  var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](elemSidebar);
                  ps.update();
                }, 500);

                if (_this12.authservice.introjs) {
                  _this12.Paramexpanded = true;
                  _this12.Hrexpanded = true;
                  _this12.AOexpanded = true;
                  _this12.Tresoexpanded = true;
                  setTimeout(function () {
                    var el = document.getElementById("step1");
                    el.scrollIntoView();
                    var step = 0;

                    if (localStorage.getItem('stepNumber')) {
                      step = parseInt(localStorage.getItem('stepNumber'));
                    }

                    _this12.authservice.startIntro();

                    if (step > 0) {
                      _this12.authservice.introJS.goToStepNumber(step).start();
                    }
                  }, 500);
                }
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(notification) {
            var type = ['', 'info', 'success', 'warning', 'danger'];
            $.notify({
              icon: 'notifications',
              message: notification.title + ' - ' + notification.message + '</br>' + this.timeAgo(notification.createdAt)
            }, {
              type: 'info',
              timer: 4000,
              placement: {
                from: 'bottom',
                align: 'left'
              },
              template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' + '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' + '<i class="material-icons" data-notify="icon">notifications</i> ' + '<span data-notify="title">{1}</span> ' + '<span data-notify="message">{2}</span>' + '<div class="progress" data-notify="progressbar">' + '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' + '</div>' + '<a href="{3}" target="{4}" data-notify="url"></a>' + '</div>'
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 19,
        vars: 8,
        consts: [["id", "navid", 1, "logo", "row"], ["href", "http://xpr.com.tn", 1, "simple-text"], [1, "logo-img"], ["src", "/assets/img/logo.png"], [1, "sidebar-wrapper"], [4, "ngIf"], [1, "slide"], ["routerLinkActive", "active", "class", "navithem", 4, "ngIf"], ["routerLinkActive", "active", 1, "navithem"], [1, "iconcontenu"], [1, "nav-item", "takeleft", 3, "routerLink"], [1, "iconecontainer"], [1, "nav", "navbar-nav", "nav-mobile-menu"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "rounded-circle", "mx-auto", "d-block", 2, "width", "70px", "height", "70px", "margin-top", "10px", 3, "src"], [1, "nav-item", "takeleft", "dropdown"], ["routerLinkActive", "active", 1, "nav-item", "dropdown", 3, "click"], ["href", "", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], [1, "material-icons"], [1, "notification"], ["class", "d-lg-none d-md-block", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink ", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-header"], [1, "scroll"], ["class", "dropdown-item", 4, "ngIf"], ["class", "dropdown-item", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", "class", "nav-item ml-n1", 4, "ngIf"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "routerLink"], [1, "text-primary", "mx-auto"], [1, "d-lg-none", "d-md-block"], [1, "dropdown-item"], [1, "text-black", "mx-auto"], [1, "row", "justify-content-start"], [1, "col-3"], [4, "ngIf", "ngIfElse"], ["defaultImage", ""], [1, "card-title", "font-weight-bold"], [1, "text-muted", "longtext"], [1, "card-text", "text-info"], [1, "rounded-circle", 2, "width", "40px", "height", "40px", 3, "src"], ["routerLinkActive", "active", 1, "nav-item", "ml-n1"], ["id", "step1", 1, "nav-link", 3, "routerLink"], ["id", "step0", "routerLinkActive", "active", 1, "nav-item", "takeleft", 3, "routerLink"], [1, "material-icons", "iconecontainer"], ["id", "step9", 1, "nav-item", "takeleft", 3, "routerLink"], [1, "dropdown"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], ["routerLinkActive", "active", "class", "dropdown-item", 3, "routerLink", 4, "ngIf"], ["class", "nav-link", "routerLinkActive", "active", "class", "dropdown-item", 3, "routerLink", 4, "ngIf"], ["class", "nav-link", "class", "dropdown-item", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_div_6_Template, 27, 12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_div_8_Template, 7, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidebarComponent_div_9_Template, 7, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mes departements ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SidebarComponent_div_16_Template, 6, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SidebarComponent_div_17_Template, 10, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SidebarComponent_div_18_Template, 11, 4, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenu());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permissions == null ? null : ctx.permissions.includes("dashboard"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permissions == null ? null : ctx.permissions.includes("clients"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c13));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permissions == null ? null : ctx.permissions.includes("dashboard"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.permissions == null ? null : ctx.permissions.includes("encaissement")) || (ctx.permissions == null ? null : ctx.permissions.includes("decaissement")) || (ctx.permissions == null ? null : ctx.permissions.includes("reglement")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permissions == null ? null : ctx.permissions.includes("rh"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
        styles: [".scroll[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 250px;\r\n    max-height: 275px;\r\n    overflow: scroll;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    border-radius: 8px;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: rgb(228, 225, 225); \r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: rgb(173, 170, 170); \r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar:hover {\r\n    width: 10px;\r\n}\r\n.longtext[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    max-width: 125px;\r\n    width: auto;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n.takeleft[_ngcontent-%COMP%]{\r\n    margin-left: -15px !important;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.slide[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    transform: translate(-250px,0);\r\n}\r\n.navithem.active[_ngcontent-%COMP%]{\r\n    background: #ff4519 ;\r\n    transform: translate(180px,0);\r\n}\r\n.navithem.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.btn-secondary[_ngcontent-%COMP%]{\r\n    background: rgba(90, 120, 221, 0.9);\r\n    border-color: rgba(90, 120, 221, 0.9);\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n    background:rgba(90, 120, 221, 0.9); \r\n    border-color: rgba(90, 120, 221, 0.9);\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n    background-color:#ff4519 ;\r\n}\r\n.iconecontainer[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    color: #ff4519;\r\n    background: white;\r\n    padding: 10px;\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    transform: rotate(0deg);\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n.iconcontenu[_ngcontent-%COMP%] {\r\n      \r\n        font-weight: 300;\r\n        color: white;\r\n}\r\n.navithem[_ngcontent-%COMP%]{\r\n    display: block;\r\nmargin: 5px;\r\nbackground: rgba(32,45,89,0.9);\r\nwidth: 300px;\r\ntext-align: right;\r\npadding: 10px;\r\nborder-radius: 10px;\r\ntransition: all 1.5s;\r\n}\r\n.navithem[_ngcontent-%COMP%]:hover{\r\n    transform: translate(180px,0);\r\n    background: #ff4519;\r\n    transition: all 1s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFjay1vZmZpY2UvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBLFVBQVU7QUFDVjtJQUNJLFVBQVU7QUFDZDtBQUVBLFVBQVU7QUFDVjtJQUNJLGtCQUFrQjs7QUFFdEI7QUFFQSxXQUFXO0FBQ1g7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1COztBQUV2QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksWUFBWTtJQUdaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksb0JBQW9CO0lBRXBCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHFDQUFxQztBQUN6QztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBR1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7O1FBRVEsZ0JBQWdCO1FBQ2hCLFlBQVk7QUFDcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEIsV0FBVztBQUNYLDhCQUE4QjtBQUM5QixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixtQkFBbUI7QUFFbkIsb0JBQW9CO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBRW5CLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2JhY2stb2ZmaWNlL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI3NXB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIyOCwgMjI1LCAyMjUpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTczLCAxNzAsIDE3MCk7IFxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmxvbmd0ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC13aWR0aDogMTI1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi50YWtlbGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5we1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc2xpZGV7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNTBweCwwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUwcHgsMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUwcHgsMCk7XHJcbn1cclxuLm5hdml0aGVtLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZjQ1MTkgO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNjBweCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE4MHB4LDApO1xyXG59XHJcbi5uYXZpdGhlbS5hY3RpdmUgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnl7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDkwLCAxMjAsIDIyMSwgMC45KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg5MCwgMTIwLCAyMjEsIDAuOSk7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoOTAsIDEyMCwgMjIxLCAwLjkpOyBcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg5MCwgMTIwLCAyMjEsIDAuOSk7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZvY3VzLCAuZHJvcGRvd24tbWVudSBhOmhvdmVyLCAuZHJvcGRvd24tbWVudSBhOmZvY3VzLCAuZHJvcGRvd24tbWVudSBhOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjQ1MTkgO1xyXG59XHJcbi5pY29uZWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiAjZmY0NTE5O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pY29uY29udGVudSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2aXRoZW17XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxubWFyZ2luOiA1cHg7XHJcbmJhY2tncm91bmQ6IHJnYmEoMzIsNDUsODksMC45KTtcclxud2lkdGg6IDMwMHB4O1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxucGFkZGluZzogMTBweDtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxuLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMS41cztcclxudHJhbnNpdGlvbjogYWxsIDEuNXM7XHJcbn1cclxuLm5hdml0aGVtOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTgwcHgsMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY0NTE5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('AOcollapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'rotate(0deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('AOexpanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'rotate(90deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Tresoexpanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'rotate(90deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Tresocollapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'rotate(0deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Hrexpanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'rotate(90deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Hrcollapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'rotate(0deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Paramexpanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'rotate(90deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Paramcollapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'rotate(0deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)'))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('AOcollapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
              transform: 'rotate(0deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('AOexpanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
              transform: 'rotate(90deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Tresoexpanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
              transform: 'rotate(90deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Tresocollapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
              transform: 'rotate(0deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Hrexpanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
              transform: 'rotate(90deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Hrcollapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
              transform: 'rotate(0deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Paramexpanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
              transform: 'rotate(90deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('Paramcollapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
              transform: 'rotate(0deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)'))])]
          }]
        }], function () {
          return [{
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MJvs":
    /*!***********************************************************************!*\
      !*** ./src/app/front-office/client-layout/client-layout.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ClientLayoutComponent */

    /***/
    function MJvs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientLayoutComponent", function () {
        return ClientLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! perfect-scrollbar */
      "t/UT");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/navbar/navbar.component */
      "5GY9");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/footer/footer.component */
      "bt3r");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/sidebar/sidebar.component */
      "UYYx");

      function ClientLayoutComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-client-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ClientLayoutComponent = /*#__PURE__*/function () {
        function ClientLayoutComponent(location, router) {
          _classCallCheck(this, ClientLayoutComponent);

          this.location = location;
          this.router = router;
          this.yScrollStack = [];
        }

        _createClass(ClientLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

            if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
              // if we are on windows OS we activate the perfectScrollbar function
              document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
            } else {
              document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
            }

            var elemMainPanel = document.querySelector('.main-panel');
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            this.location.subscribe(function (ev) {
              _this13.lastPoppedUrl = ev.url;
            });
            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this13.lastPoppedUrl) {
                  _this13.yScrollStack.push(window.scrollY);
                }
              } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this13.lastPoppedUrl) {
                  _this13.lastPoppedUrl = undefined;
                  window.scrollTo(0, _this13.yScrollStack.pop());
                } else {
                  window.scrollTo(0, 0);
                }
              }
            });
            this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
            })).subscribe(function (event) {
              elemMainPanel.scrollTop = 0;

              if (!_this13.isMobileMenu) {
                elemSidebar.scrollTop = 0;
              }
            });
          } // tslint:disable-next-line:use-life-cycle-interface

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.runOnRouteChange();
          }
        }, {
          key: "runOnRouteChange",
          value: function runOnRouteChange() {
            if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
              var elemMainPanel = document.querySelector('.main-panel');
              var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
              ps.update();
            }
          }
        }, {
          key: "isMac",
          value: function isMac() {
            var bool = false;

            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
              bool = true;
            }

            return bool;
          }
        }, {
          key: "isMobileMenu",
          value: function isMobileMenu() {
            if ($(window).width() > 1248) {
              return false;
            }

            return true;
          }
        }]);

        return ClientLayoutComponent;
      }();

      ClientLayoutComponent.ɵfac = function ClientLayoutComponent_Factory(t) {
        return new (t || ClientLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ClientLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClientLayoutComponent,
        selectors: [["app-client-layout"]],
        decls: 6,
        vars: 1,
        consts: [[1, "wrapper"], [4, "ngIf"], [1, "main-panel"], ["data-color", "danger", "data-background-color", "white", "data-image", "./assets/img/sidebar-1.jpg", 1, "sidebar"], [1, "sidebar-background", 2, "background-image", "url(./assets/img/sidebar-4.jpg)"]],
        template: function ClientLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientLayoutComponent_div_1_Template, 4, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-client-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-client-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenu());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
        styles: [".main-panel[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtb2ZmaWNlL2NsaWVudC1sYXlvdXQvY2xpZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mcm9udC1vZmZpY2UvY2xpZW50LWxheW91dC9jbGllbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFuZWx7XHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-layout',
            templateUrl: './client-layout.component.html',
            styleUrls: ['./client-layout.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-SG": "zavE",
        "./en-SG.js": "zavE",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, titleService) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.titleService = titleService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this14 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
                        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
                      })).subscribe(function (event) {
                        var title = _this14.getTitle(_this14.router.routerState, _this14.router.routerState.root).join(' | ');

                        _this14.titleService.setTitle(title);
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getTitle",
          value: function getTitle(state, parent) {
            var data = [];

            if (parent && parent.snapshot.data && parent.snapshot.data.title) {
              data.push(parent.snapshot.data.title);
            }

            if (state && parent) {
              data.push.apply(data, _toConsumableArray(this.getTitle(state, state.firstChild(parent))));
            }

            return data;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UYYx":
    /*!**********************************************************************!*\
      !*** ./src/app/front-office/components/sidebar/sidebar.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function UYYx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/notification/notification.service */
      "nak+");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function SidebarComponent_span_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_span_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_a_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aucune Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_a_35_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r5.baseUrl, "/uploads/users/", notification_r4.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SidebarComponent_a_35_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r7.baseUrl, "/uploads/img/devlopy.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SidebarComponent_a_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_a_35_div_3_Template, 2, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_a_35_ng_template_4_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r4 = ctx.$implicit;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", notification_r4.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r4.image)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r4.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.timeAgo(notification_r4.createdAt));
        }
      }

      var _c0 = function _c0() {
        return ["/home"];
      };

      var _c1 = function _c1() {
        return ["/myservices"];
      };

      var _c2 = function _c2() {
        return ["/notifications"];
      };

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(authservice, notificationService, changeDetectorRef) {
          var _this15 = this;

          _classCallCheck(this, SidebarComponent);

          this.authservice = authservice;
          this.notificationService = notificationService;
          this.changeDetectorRef = changeDetectorRef;
          this.unseen_notifications = 0;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
          this.userId = authservice.getIdfromToken();
          authservice.getOneUser(this.userId).subscribe(function (res) {
            _this15.image = res.image;
          }, function (err) {
            console.log(err);
          });
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.isMobileMenu()) {
              this.loadnotification(true);
              var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__["connect"](this.baseUrl);
              socket.on(this.userId, function (message) {
                this.loadnotification(false);
              }.bind(this));
            }
          }
        }, {
          key: "isMobileMenu",
          value: function isMobileMenu() {
            if ($(window).width() > 991) {
              return false;
            }

            return true;
          }
        }, {
          key: "loadnotification",
          value: function loadnotification(oninit) {
            var _this16 = this;

            this.notificationService.getNotification(this.userId).subscribe(function (res) {
              console.log(res);
              _this16.notifications = res;
              _this16.unseen_notifications = _this16.count_unseen_notifications(res);

              if (oninit === false) {
                _this16.showNotification(res[0]);
              }
            }, function (err) {
              console.log(err);
            });
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "timeAgo",
          value: function timeAgo(date) {
            var NOW = new Date();
            var times = [['seconde', 1], ['minute', 60], ['heure', 3600], ['jour', 86400], ['semaine', 604800], ['moi', 2592000], ['an', 31536000]];
            var diff = Math.round((new Date(NOW).valueOf() - new Date(date).valueOf()) / 1000);

            for (var t = 0; t < times.length; t++) {
              if (diff < times[t][1]) {
                if (t === 0) {
                  return 'à l\'instant';
                } else {
                  diff = Math.round(diff / +times[t - 1][1]);
                  return 'Il y a ' + diff + ' ' + times[t - 1][0] + (diff === 1 && t !== 6 ? '' : 's');
                }
              }
            }

            diff = Math.round(diff / +times[6][1]);
            return 'Il y a ' + diff + ' an' + (diff === 1 ? '' : 's');
          }
        }, {
          key: "count_unseen_notifications",
          value: function count_unseen_notifications(notifications) {
            var count = 0;

            for (var i = 0; i < notifications.length; ++i) {
              for (var k in notifications[i].read_by) {
                if (Object.values(notifications[i].read_by[k]).indexOf(this.userId) >= 0) {
                  count++;
                }
              }
            }

            return notifications.length - count;
          }
        }, {
          key: "notification_seen",
          value: function notification_seen() {
            var _this17 = this;

            if (this.unseen_notifications > 0) {
              this.notificationService.seennotification(this.userId).subscribe(function (res) {
                console.log(res);
                _this17.unseen_notifications = 0;
              }, function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "onLogoutClick",
          value: function onLogoutClick() {
            this.authservice.logout();
          }
        }, {
          key: "showNotification",
          value: function showNotification(notification) {
            var type = ['', 'info', 'success', 'warning', 'danger'];
            $.notify({
              icon: 'notifications',
              message: notification.title + ' - ' + notification.message + '</br>' + this.timeAgo(notification.createdAt)
            }, {
              type: 'info',
              timer: 4000,
              placement: {
                from: 'bottom',
                align: 'left'
              },
              template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' + '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' + '<i class="material-icons" data-notify="icon">notifications</i> ' + '<span data-notify="title">{1}</span> ' + '<span data-notify="message">{2}</span>' + '<div class="progress" data-notify="progressbar">' + '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' + '</div>' + '<a href="{3}" target="{4}" data-notify="url"></a>' + '</div>'
            });
          }
        }, {
          key: "trackByNotification",
          value: function trackByNotification(index, notification) {
            return (notification === null || notification === void 0 ? void 0 : notification._id) || index;
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-client-sidebar"]],
        decls: 45,
        vars: 12,
        consts: [[1, "logo"], ["href", "http://devlopy.tn", 1, "simple-text"], [1, "logo-img"], ["src", "/assets/img/blue.png"], [1, "sidebar-wrapper"], [1, "nav", "navbar-nav", "nav-mobile-menu"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "material-icons"], [1, "nav-item"], [1, "nav-item", "dropdown"], ["routerLinkActive", "active", 1, "nav-item", "dropdown", 3, "click"], ["href", "", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], [1, "notification"], ["class", "d-lg-none d-md-block", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-header"], [1, "scroll"], ["class", "dropdown-item", 4, "ngIf"], ["class", "dropdown-item", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "routerLink"], [1, "text-primary", "mx-auto"], ["href", "", 1, "nav-link", 3, "click"], [1, "d-lg-none", "d-md-block"], [1, "dropdown-item"], [1, "text-black", "mx-auto"], [1, "row", "justify-content-start"], [1, "col-3"], [4, "ngIf", "ngIfElse"], ["defaultImage", ""], [1, "card-title", "font-weight-bold"], [1, "text-muted", "longtext"], [1, "card-text", "text-info"], [1, "rounded-circle", 2, "width", "40px", "height", "40px", 3, "src"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " D E V L O P Y ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Accueil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mes Services ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_li_click_21_listener() {
              return ctx.notification_seen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SidebarComponent_span_28_Template, 2, 0, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SidebarComponent_span_29_Template, 2, 0, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Notifications:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SidebarComponent_a_34_Template, 3, 0, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SidebarComponent_a_35_Template, 14, 6, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Voir Tout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_41_listener() {
              return ctx.onLogoutClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " D\xE9connecter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.unseen_notifications, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unseen_notifications <= 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unseen_notifications > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.notifications == null ? null : ctx.notifications.length) <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.trackByNotification);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: [".scroll[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 250px;\r\n    max-height: 275px;\r\n    overflow: scroll;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    border-radius: 8px;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: rgb(228, 225, 225); \r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: rgb(173, 170, 170); \r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar:hover {\r\n    width: 10px;\r\n}\r\n.longtext[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    max-width: 125px;\r\n    width: auto;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtb2ZmaWNlL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQSxVQUFVO0FBQ1Y7SUFDSSxVQUFVO0FBQ2Q7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxrQkFBa0I7O0FBRXRCO0FBRUEsV0FBVztBQUNYO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjs7QUFFdkI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZnJvbnQtb2ZmaWNlL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI3NXB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIyOCwgMjI1LCAyMjUpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTczLCAxNzAsIDE3MCk7IFxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmxvbmd0ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC13aWR0aDogMTI1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css']
          }]
        }], function () {
          return [{
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UmXy":
    /*!*******************************************************************!*\
      !*** ./src/app/back-office/components/footer/footer.component.ts ***!
      \*******************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function UmXy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.currentDate = new Date().getFullYear();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 7,
        vars: 1,
        consts: [[1, "footer"], [1, "container-fluid"], [1, "copyright"], ["href", "#", "target", "_blank"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Copyright \xA9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentDate, ". Tous droits r\xE9serv\xE9s. ");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2stb2ZmaWNlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "VKgo":
    /*!*************************************************!*\
      !*** ./src/app/services/admin/admin.service.ts ***!
      \*************************************************/

    /*! exports provided: AdminService */

    /***/
    function VKgo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminService", function () {
        return AdminService;
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

      var AdminService = /*#__PURE__*/function () {
        function AdminService(http) {
          _classCallCheck(this, AdminService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        }

        _createClass(AdminService, [{
          key: "registerClient",
          value: function registerClient(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/client/register', user, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "registerClients",
          value: function registerClients(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/client/registers', user, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getClients",
          value: function getClients() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/client', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getClientsToTable",
          value: function getClientsToTable(pageIndex, pageSize, pageSort, query) {
            this.loadToken(); //let model = 'Client';
            //let fields = '_id name fname lname email adress tel photo';
            /// let url = pageIndex+'/'+pageSize+'/'+pageSort+'/'+query+'/'+model ;
            //+'/'+fields ;

            return this.http.get(this.baseUrl + '/api/client', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneClient",
          value: function getOneClient(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/client/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateClient",
          value: function updateClient(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/client/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteClient",
          value: function deleteClient(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/client/delete/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "createGroupe",
          value: function createGroupe(groupe) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/groupe/create', groupe, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneGroupe",
          value: function getOneGroupe(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/groupe/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateGroupe",
          value: function updateGroupe(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/groupe/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteGroupe",
          value: function deleteGroupe(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http["delete"](this.baseUrl + '/api/groupe/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getGroupes",
          value: function getGroupes() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/groupe', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getGroupesToTable",
          value: function getGroupesToTable(pageIndex, pageSize, pageSort, query) {
            this.loadToken();
            var model = 'Groupe';
            var fields = '_id groupename';
            var url = pageIndex + '/' + pageSize + '/' + pageSort + '/' + query + '/' + model;
            return this.http.get(this.baseUrl + '/api/pagination/toTable/' + url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addFeedback",
          value: function addFeedback(feedback) {
            return this.http.post(this.baseUrl + '/api/feedback/create', feedback, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "changestautefeddback",
          value: function changestautefeddback() {
            this.loadToken();
            var statue = false;
            return this.http.put(this.baseUrl + '/api/feedback/seenfadback', {
              statue: statue
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getFeedbacks",
          value: function getFeedbacks() {
            return this.http.get(this.baseUrl + '/api/feedback', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getFeedbacksclient",
          value: function getFeedbacksclient() {
            return this.http.get(this.baseUrl + '/api/clientFeedbacks', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteFeedbacksclient",
          value: function deleteFeedbacksclient(id) {
            return this.http["delete"](this.baseUrl + '/api/clientFeedbacks/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addreponseFeedbacksclient",
          value: function addreponseFeedbacksclient(id, reponse) {
            return this.http.put(this.baseUrl + '/api/clientFeedbacks/reponse/' + id, reponse, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addFeedbackclient",
          value: function addFeedbackclient(feedback) {
            return this.http.post(this.baseUrl + '/api/clientFeedbacks/create', feedback, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addConvention",
          value: function addConvention(convention) {
            return this.http.post(this.baseUrl + '/api/convention/create', convention, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteConvention",
          value: function deleteConvention(id) {
            return this.http["delete"](this.baseUrl + '/api/convention/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getConventions",
          value: function getConventions() {
            return this.http.get(this.baseUrl + '/api/convention/all', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            var token = localStorage.getItem('id_token');
            this.authToken = token;
          }
        }, {
          key: "decripttoken",
          value: function decripttoken() {
            return this.http.get(this.baseUrl + '/api/usertoken', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "resendVer",
          value: function resendVer(email) {
            return this.http.post(this.baseUrl + '/api/myClient/resend', email, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addNote",
          value: function addNote(note) {
            return this.http.post(this.baseUrl + '/api/Notes/create', note, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getNote",
          value: function getNote() {
            return this.http.get(this.baseUrl + '/api/Notes', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "DeleteNote",
          value: function DeleteNote(id) {
            return this.http["delete"](this.baseUrl + '/api/Notes/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "UpdateNote",
          value: function UpdateNote(note) {
            return this.http.put(this.baseUrl + '/api/Notes/' + note.id, note, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }]);

        return AdminService;
      }();

      AdminService.ɵfac = function AdminService_Factory(t) {
        return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminService,
        factory: AdminService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
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

    },

    /***/
    "WRr0":
    /*!************************************************************!*\
      !*** ./src/app/back-office/pointage/pointage.component.ts ***!
      \************************************************************/

    /*! exports provided: PointageComponent */

    /***/
    function WRr0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PointageComponent", function () {
        return PointageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function PointageComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointageComponent_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.punchedIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Entrer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PointageComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointageComponent_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.punchedOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sortie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PointageComponent_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointageComponent_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.breakedIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pause Sortie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PointageComponent_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointageComponent_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.breakedOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Retour Pause");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PointageComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r13.activityType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r13.time, "");
        }
      }

      var PointageComponent = /*#__PURE__*/function () {
        function PointageComponent(snackBar, authservice) {
          _classCallCheck(this, PointageComponent);

          this.snackBar = snackBar;
          this.authservice = authservice;
          this.punchIn = true;
          this.punchOut = false;
          this.breakIn = true;
          this.breakOut = false;
          this.userActivities = [{
            'activityType': 'push in',
            'time': '10:30'
          }];
          this.getiduserconected();
        }

        _createClass(PointageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.Iduser);
            this.interval = setInterval(this.clock, 1000);
            this.clock();
            this.getActivities();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.interval) {
              clearInterval(this.interval);
            }
          }
        }, {
          key: "getiduserconected",
          value: function getiduserconected() {
            this.Iduser = this.authservice.getIdfromToken();
          }
        }, {
          key: "storeActivity",
          value: function storeActivity(actType, time) {
            var _this18 = this;

            this.authservice.addUserActivity(this.Iduser, actType, this.date, time).subscribe(function (data) {
              if (data.success) {
                _this18.snackBar.open('Mise à jours avec succès', 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack']
                });
              } else {
                _this18.snackBar.open('Une erreur c\'est produite', 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack-error']
                });
              }

              _this18.getActivities();
            });
          }
        }, {
          key: "getActivities",
          value: function getActivities() {
            var _this19 = this;

            console.log("user", this.Iduser);
            this.authservice.getUserActivities(this.Iduser).subscribe(function (data) {
              console.log("user", data);
              _this19.userActivities = [];
              var date = new Date();
              var currentDate = date.getDate();
              var currentMonth = date.getMonth();
              var currentYear = date.getFullYear();

              var _iterator = _createForOfIteratorHelper(data),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var entry = _step.value;
                  var entryDate = new Date(entry.date);

                  if (entryDate.getDate() == currentDate && entryDate.getMonth() == currentMonth && entryDate.getFullYear() == currentYear) {
                    _this19.userActivities.push(entry);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this19.userActivities = data;

              if (!(_this19.userActivities === undefined || _this19.userActivities.length == 0)) {
                var lastActivity = _this19.userActivities[_this19.userActivities.length - 1]["activityType"];

                if (lastActivity == "Punch In") {
                  _this19.setPunchInElems();
                } else if (lastActivity == "Break In") {
                  _this19.setBreakInElems();
                } else {
                  _this19.checkedOut();
                }
              }
            });
          }
        }, {
          key: "reverseArray",
          value: function reverseArray(array) {
            return array.slice(0).reverse();
          }
        }, {
          key: "punchedIn",
          value: function punchedIn() {
            var actType = "Punch In";
            this.date = new Date();
            var punchInTime = this.beautifyTime(this.date);
            this.storeActivity(actType, punchInTime);
          }
        }, {
          key: "setPunchInElems",
          value: function setPunchInElems() {
            this.punchIn = false;
            this.punchOut = true;
            this.breakIn = true;
            this.breakOut = false;
          }
        }, {
          key: "punchedOut",
          value: function punchedOut() {
            var actType = "Punch Out";
            this.date = new Date();
            var punchOutTime = this.beautifyTime(this.date);
            this.storeActivity(actType, punchOutTime);
          }
        }, {
          key: "breakedIn",
          value: function breakedIn() {
            var actType = "Break In";
            this.date = new Date();
            var breakInTime = this.beautifyTime(this.date);
            this.storeActivity(actType, breakInTime);
          }
        }, {
          key: "setBreakInElems",
          value: function setBreakInElems() {
            this.punchIn = false;
            this.punchOut = false;
            this.breakIn = false;
            this.breakOut = true;
          }
        }, {
          key: "breakedOut",
          value: function breakedOut() {
            var actType = "Break Out";
            this.date = new Date();
            var breakOutTime = this.beautifyTime(this.date);
            this.storeActivity(actType, breakOutTime);
          }
        }, {
          key: "checkedOut",
          value: function checkedOut() {
            this.punchIn = true;
            this.punchOut = false;
            this.breakIn = true;
            this.breakOut = false;
          }
        }, {
          key: "beautifyTime",
          value: function beautifyTime(date) {
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            var ampm = hour >= 12 ? 'PM' : 'AM';
            hour = hour % 12;
            hour = hour ? hour : 12;
            var hour1 = ("0" + hour).slice(-2);
            var minute1 = ("0" + minute).slice(-2);
            var second1 = ("0" + second).slice(-2);
            return hour1 + ":" + minute1 + ":" + second1 + " " + ampm;
          }
        }, {
          key: "clock",
          value: function clock() {
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            this.date = new Date();
            var day = weekday[this.date.getDay()];
            var dd = this.date.getDate();
            var mm = this.date.getMonth() + 1; //January is 0!

            var yyyy = this.date.getFullYear();
            var dd1 = ("0" + dd).slice(-2);
            var mm1 = ("0" + mm).slice(-2);
            var today = dd1 + '/' + mm1 + '/' + yyyy;
            var hour = this.date.getHours();
            var minute = this.date.getMinutes();
            var second = this.date.getSeconds();
            var ampm = hour >= 12 ? 'PM' : 'AM';
            hour = hour % 12;
            hour = hour ? hour : 12;
            var hour1 = ("0" + hour).slice(-2);
            var minute1 = ("0" + minute).slice(-2);
            var second1 = ("0" + second).slice(-2);
            document.getElementById('hour').innerHTML = hour1;
            document.getElementById('minute').innerHTML = ":" + minute1;
            document.getElementById('second').innerHTML = ":" + second1;
            document.getElementById('ampm').innerHTML = " " + ampm;
            document.getElementById('day').innerHTML = day;
            document.getElementById('date').innerHTML = today;
          }
        }]);

        return PointageComponent;
      }();

      PointageComponent.ɵfac = function PointageComponent_Factory(t) {
        return new (t || PointageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      PointageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PointageComponent,
        selectors: [["app-pointage"]],
        decls: 33,
        vars: 5,
        consts: [[1, "page-header"], [1, "jumbotron", "text-center"], [1, "row"], [1, "col"], [1, "border", "border-primary", "rounded", "clock", "mb-2"], ["id", "hour"], ["id", "minute"], ["id", "second"], ["id", "ampm"], [1, "border", "rounded", "dayAndDate", "mb-2"], ["id", "day", 1, "day"], ["id", "date", 1, "date"], [1, "col", "clockButtons"], ["type", "button", "class", "btn btn-outline-primary mr-2 mb-2", 3, "click", 4, "ngIf"], [1, "table"], [1, "nonScrollHead"], [1, "trClass"], ["scope", "col", 1, "thClass"], ["id", "scrollBody", 1, "scrollTableBody"], ["class", "trClass", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", "mb-2", 3, "click"], ["scope", "row", 1, "bodyContent"], [1, "bodyContent"]],
        template: function PointageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pointage ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PointageComponent_button_17_Template, 2, 0, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PointageComponent_button_18_Template, 2, 0, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PointageComponent_button_20_Template, 2, 0, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PointageComponent_button_21_Template, 2, 0, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PointageComponent_tr_32_Template, 5, 2, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.punchIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.punchOut);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breakIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breakOut);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reverseArray(ctx.userActivities));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2stb2ZmaWNlL3BvaW50YWdlL3BvaW50YWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pointage',
            templateUrl: './pointage.component.html',
            styleUrls: ['./pointage.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XxAf":
    /*!****************************************************************************!*\
      !*** ./src/app/back-office/layouts/admin-layout/admin-layout.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function XxAf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! perfect-scrollbar */
      "t/UT");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _ng_idle_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-idle/core */
      "evxF");
      /* harmony import */


      var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-idle/keepalive */
      "0JRf");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/sidebar/sidebar.component */
      "H+l3");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../components/navbar/navbar.component */
      "plff");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../components/footer/footer.component */
      "UmXy");

      function AdminLayoutComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
        }
      }

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent(location, router, titleService, authservice, idle, keepalive) {
          var _this20 = this;

          _classCallCheck(this, AdminLayoutComponent);

          this.location = location;
          this.router = router;
          this.titleService = titleService;
          this.authservice = authservice;
          this.idle = idle;
          this.keepalive = keepalive;
          this.yScrollStack = [];
          this.idleState = 'Not started.';
          this.timedOut = false;
          this.lastPing = null;
          this.title = 'angular-idle-timeout';
          this.run(); // sets an idle timeout of 5 seconds, for testing purposes.

          idle.setIdle(60 * 60); // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.

          idle.setTimeout(5); // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document

          idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_INTERRUPTSOURCES"]);
          idle.onIdleEnd.subscribe(function () {
            _this20.idleState = 'No longer idle.';
            console.log(_this20.idleState);

            _this20.reset();
          });
          idle.onTimeout.subscribe(function () {
            _this20.idleState = 'Timed out!';
            _this20.timedOut = true;
            console.log(_this20.idleState);

            _this20.authservice.lockScreen();
          });
          idle.onIdleStart.subscribe(function () {
            _this20.idleState = 'You\'ve gone idle!';
            console.log(_this20.idleState);
          });
          idle.onTimeoutWarning.subscribe(function (countdown) {
            _this20.idleState = 'You will time out in ' + countdown + ' seconds!';
            console.log(_this20.idleState);
          }); // sets the ping interval to 15 seconds

          keepalive.interval(15);
          keepalive.onPing.subscribe(function () {
            return _this20.lastPing = new Date();
          });
          this.reset();
        }

        _createClass(AdminLayoutComponent, [{
          key: "reset",
          value: function reset() {
            this.idle.watch();
            this.idleState = 'Started.';
            this.timedOut = false;
          }
        }, {
          key: "run",
          value: function run() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.authservice.isClient()) {
                        _context5.next = 3;
                        break;
                      }

                      _context5.next = 3;
                      return this.authservice.stockToken();

                    case 3:
                      _context5.next = 5;
                      return this.authservice.stockDeparts();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this21 = this;

              var isWindows, elemMainPanel, elemSidebar, ps;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.authservice.checkToken();

                    case 2:
                      isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

                      if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
                        // if we are on windows OS we activate the perfectScrollbar function
                        document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
                      } else {
                        document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
                      }

                      elemMainPanel = document.querySelector('.main-panel');
                      elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
                      this.location.subscribe(function (ev) {
                        _this21.lastPoppedUrl = ev.url;
                      });
                      this.router.events.subscribe(function (event) {
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                          if (event.url != _this21.lastPoppedUrl) _this21.yScrollStack.push(window.scrollY);
                        } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                          if (event.url == _this21.lastPoppedUrl) {
                            _this21.lastPoppedUrl = undefined;
                            window.scrollTo(0, _this21.yScrollStack.pop());
                          } else window.scrollTo(0, 0);
                        }
                      });
                      this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
                        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
                      })).subscribe(function (event) {
                        elemMainPanel.scrollTop = 0;
                        elemSidebar.scrollTop = 0;
                      });

                      if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
                        ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemMainPanel);
                        ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemSidebar);
                      }

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.runOnRouteChange();
          }
        }, {
          key: "isMaps",
          value: function isMaps(path) {
            var titlee = this.location.prepareExternalUrl(this.location.path());
            titlee = titlee.slice(1);

            if (path == titlee) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "runOnRouteChange",
          value: function runOnRouteChange() {
            if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
              var elemMainPanel = document.querySelector('.main-panel');
              var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemMainPanel);
              ps.update();
            }
          }
        }, {
          key: "isMac",
          value: function isMac() {
            var bool = false;

            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
              bool = true;
            }

            return bool;
          }
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
        return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_idle_core__WEBPACK_IMPORTED_MODULE_8__["Idle"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_9__["Keepalive"]));
      };

      AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AdminLayoutComponent,
        selectors: [["app-admin-layout"]],
        decls: 8,
        vars: 1,
        consts: [[1, "wrapper"], ["data-color", "danger", "data-background-color", "white", "data-image", "./assets/img/sidebar-1.jpg", 1, "sidebar"], [1, "main-panel"], [4, "ngIf"]],
        template: function AdminLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminLayoutComponent_div_6_Template, 1, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMaps("maps"));
          }
        },
        directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2stb2ZmaWNlL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-admin-layout',
            templateUrl: './admin-layout.component.html',
            styleUrls: ['./admin-layout.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_8__["Idle"]
          }, {
            type: _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_9__["Keepalive"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _front_office_components_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./front-office/components/components.module */
      "FrX9");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _back_office_components_components_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./back-office/components/components.module */
      "guuj");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @agm/core */
      "LSHg");
      /* harmony import */


      var _back_office_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./back-office/layouts/admin-layout/admin-layout.component */
      "XxAf");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _firstTime_firstTime_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./firstTime/firstTime.component */
      "iWfN");
      /* harmony import */


      var _lockScreen_lockcScreen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./lockScreen/lockcScreen.component */
      "e1qJ");
      /* harmony import */


      var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./services/auth/auth.guard */
      "25YW");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _services_auth_prevent_login__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./services/auth/prevent.login */
      "COB/");
      /* harmony import */


      var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./services/employee/employee.service */
      "8ZfG");
      /* harmony import */


      var _services_appeldoffre_appeldoffre_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./services/appeldoffre/appeldoffre.service */
      "n4jB");
      /* harmony import */


      var _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./services/configuration/configuration.service */
      "rHPJ");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _services_auth_role_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./services/auth/role.guard */
      "Cm75");
      /* harmony import */


      var _services_auth_client_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./services/auth/client.guard */
      "sTU/");
      /* harmony import */


      var _front_office_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./front-office/client-layout/client-layout.component */
      "MJvs");
      /* harmony import */


      var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./notfound/notfound.component */
      "0pRC");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ng2-file-upload */
      "pYyI");
      /* harmony import */


      var _services_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./services/auth/token.interceptor */
      "iABN");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/service-worker */
      "3pDu");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @ng-idle/keepalive */
      "0JRf");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var mat_select_filter__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! mat-select-filter */
      "Ekh6");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var angular_tilt__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! angular-tilt */
      "Gjr1");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _dashbord_component_dashbord_component_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./dashbord-component/dashbord-component.component */
      "tKmh");
      /* harmony import */


      var _front_office_profil_client_profil_client_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./front-office/profil-client/profil-client.component */
      "nZgt");
      /* harmony import */


      var _back_office_month_calendar_action_calender_action_calender_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./back-office/month-calendar/action-calender/action-calender.component */
      "az8M");
      /* harmony import */


      var _back_office_pointage_pointage_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./back-office/pointage/pointage.component */
      "WRr0"); // this includes the core NgIdleModule but includes keepalive providers for easy wireup


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _services_auth_role_guard__WEBPACK_IMPORTED_MODULE_32__["RoleGuard"], _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"], _services_auth_client_guard__WEBPACK_IMPORTED_MODULE_33__["ClientGuard"], _services_auth_prevent_login__WEBPACK_IMPORTED_MODULE_27__["PreventLogin"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_28__["EmployeeService"], _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_30__["ConfigurationService"], _services_appeldoffre_appeldoffre_service__WEBPACK_IMPORTED_MODULE_29__["AppeldoffreService"], {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"],
          useValue: '/'
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _services_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_37__["TokenInterceptor"],
          multi: true
        }],
        imports: [[_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__["MatSnackBarModule"], angular_tilt__WEBPACK_IMPORTED_MODULE_45__["AngularTiltModule"], mat_select_filter__WEBPACK_IMPORTED_MODULE_43__["MatSelectFilterModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__["MatDatepickerModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_36__["FileUploadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"], _back_office_components_components_module__WEBPACK_IMPORTED_MODULE_17__["ComponentsModule"], _front_office_components_components_module__WEBPACK_IMPORTED_MODULE_15__["FrontComponentsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__["MatIconModule"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_40__["NgIdleKeepaliveModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_20__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyAQPBZQYKIver_p1XW-lrh7P1I9_g4Yr5Q'
        }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_38__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_39__["environment"].production
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], _back_office_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_21__["AdminLayoutComponent"], _front_office_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_34__["ClientLayoutComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _firstTime_firstTime_component__WEBPACK_IMPORTED_MODULE_23__["FirstTimeComponent"], _lockScreen_lockcScreen_component__WEBPACK_IMPORTED_MODULE_24__["LockcScreenComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_35__["NotfoundComponent"], _dashbord_component_dashbord_component_component__WEBPACK_IMPORTED_MODULE_47__["DashbordComponentComponent"], _front_office_profil_client_profil_client_component__WEBPACK_IMPORTED_MODULE_48__["ProfilClientComponent"], _back_office_month_calendar_action_calender_action_calender_component__WEBPACK_IMPORTED_MODULE_49__["ActionCalenderComponent"], _back_office_pointage_pointage_component__WEBPACK_IMPORTED_MODULE_50__["PointageComponent"]],
          imports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__["MatSnackBarModule"], angular_tilt__WEBPACK_IMPORTED_MODULE_45__["AngularTiltModule"], mat_select_filter__WEBPACK_IMPORTED_MODULE_43__["MatSelectFilterModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__["MatDatepickerModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_36__["FileUploadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"], _back_office_components_components_module__WEBPACK_IMPORTED_MODULE_17__["ComponentsModule"], _front_office_components_components_module__WEBPACK_IMPORTED_MODULE_15__["FrontComponentsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__["MatIconModule"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_40__["NgIdleKeepaliveModule"], _agm_core__WEBPACK_IMPORTED_MODULE_20__["AgmCoreModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_38__["ServiceWorkerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__["MatSnackBarModule"], angular_tilt__WEBPACK_IMPORTED_MODULE_45__["AngularTiltModule"], mat_select_filter__WEBPACK_IMPORTED_MODULE_43__["MatSelectFilterModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_42__["MatDatepickerModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_36__["FileUploadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"], _back_office_components_components_module__WEBPACK_IMPORTED_MODULE_17__["ComponentsModule"], _front_office_components_components_module__WEBPACK_IMPORTED_MODULE_15__["FrontComponentsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_44__["MatIconModule"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_40__["NgIdleKeepaliveModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_20__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyAQPBZQYKIver_p1XW-lrh7P1I9_g4Yr5Q'
            }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_38__["ServiceWorkerModule"].register('ngsw-worker.js', {
              enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_39__["environment"].production
            })],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], _back_office_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_21__["AdminLayoutComponent"], _front_office_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_34__["ClientLayoutComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _firstTime_firstTime_component__WEBPACK_IMPORTED_MODULE_23__["FirstTimeComponent"], _lockScreen_lockcScreen_component__WEBPACK_IMPORTED_MODULE_24__["LockcScreenComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_35__["NotfoundComponent"], _dashbord_component_dashbord_component_component__WEBPACK_IMPORTED_MODULE_47__["DashbordComponentComponent"], _front_office_profil_client_profil_client_component__WEBPACK_IMPORTED_MODULE_48__["ProfilClientComponent"], _back_office_month_calendar_action_calender_action_calender_component__WEBPACK_IMPORTED_MODULE_49__["ActionCalenderComponent"], _back_office_pointage_pointage_component__WEBPACK_IMPORTED_MODULE_50__["PointageComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _services_auth_role_guard__WEBPACK_IMPORTED_MODULE_32__["RoleGuard"], _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"], _services_auth_client_guard__WEBPACK_IMPORTED_MODULE_33__["ClientGuard"], _services_auth_prevent_login__WEBPACK_IMPORTED_MODULE_27__["PreventLogin"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_28__["EmployeeService"], _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_30__["ConfigurationService"], _services_appeldoffre_appeldoffre_service__WEBPACK_IMPORTED_MODULE_29__["AppeldoffreService"], {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"],
              useValue: '/'
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _services_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_37__["TokenInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "az8M":
    /*!*****************************************************************************************!*\
      !*** ./src/app/back-office/month-calendar/action-calender/action-calender.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ActionCalenderComponent */

    /***/
    function az8M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionCalenderComponent", function () {
        return ActionCalenderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/admin/admin.service */
      "VKgo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "DejY");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ActionCalenderComponent_h5_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Modifier evenement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionCalenderComponent_h5_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ajouter nouvaux evenement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionCalenderComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Titre est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionCalenderComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La date de debut est requis ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionCalenderComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " la date de fin est requis ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ActionCalenderComponent = /*#__PURE__*/function () {
        function ActionCalenderComponent(document, renderer, fb, dialogRef, adminService, snackBar, data) {
          _classCallCheck(this, ActionCalenderComponent);

          this.document = document;
          this.renderer = renderer;
          this.fb = fb;
          this.dialogRef = dialogRef;
          this.adminService = adminService;
          this.snackBar = snackBar;
          this.data = data;
          this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            color: ''
          });
          this.minDate = new Date();
        }

        _createClass(ActionCalenderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.data);
            if (this.data !== null) this.form.patchValue(this.data);
            console.log(this.data.color.primary);
            this.form.controls.color.patchValue(this.data.color.primary);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.data == null) this.addEvent();else this.updateevent();
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            var _this22 = this;

            var colors;
            if (this.form.controls.color.value == '') colors = {
              primary: '#000000',
              secondary: '#000000'
            };else colors = {
              primary: this.form.controls.color.value,
              secondary: '#FAE3E3'
            };
            this.adminService.addNote({
              title: this.form.controls.title.value,
              start: new Date(this.form.controls.start.value),
              end: new Date(this.form.controls.end.value),
              color: colors,
              draggable: true,
              resizable: {
                beforeStart: true,
                afterEnd: true
              }
            }).subscribe(function (res) {
              if (res.success) {
                _this22.snackBar.open(res.msg, 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack']
                });

                _this22.dialogRef.close();
              } else {
                _this22.snackBar.open(res.msg, 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack-error']
                });

                _this22.dialogRef.close();
              }
            });
          }
        }, {
          key: "updateevent",
          value: function updateevent() {
            var _this23 = this;

            var colors;
            if (this.form.controls.color.value == '') colors = {
              primary: '#ad2121',
              secondary: '#FAE3E3'
            };else colors = {
              primary: this.form.controls.color.value,
              secondary: '#FAE3E3'
            };
            this.adminService.UpdateNote({
              title: this.form.controls.title.value,
              start: new Date(this.form.controls.start.value),
              end: new Date(this.form.controls.end.value),
              color: colors,
              draggable: true,
              resizable: {
                beforeStart: true,
                afterEnd: true
              },
              id: this.data.id
            }).subscribe(function (res) {
              if (res.success) {
                _this23.snackBar.open(res.msg, 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack']
                });

                _this23.dialogRef.close();
              } else {
                _this23.snackBar.open(res.msg, 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack-error']
                });

                _this23.dialogRef.close();
              }
            });
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return ActionCalenderComponent;
      }();

      ActionCalenderComponent.ɵfac = function ActionCalenderComponent_Factory(t) {
        return new (t || ActionCalenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      ActionCalenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActionCalenderComponent,
        selectors: [["app-action-calender"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"],
          useValue: 'fr'
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
          useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"],
          deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]]
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"],
          useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MAT_MOMENT_DATE_FORMATS"]
        }])],
        decls: 39,
        vars: 13,
        consts: [[1, "modal-header"], ["class", "modal-title", 4, "ngIf"], [1, "material-icons", "text-danger", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "col-md-10"], [1, "example-full-width"], ["matInput", "", "placeholder", "Titre Evenement", "formControlName", "title", "type", "text"], [4, "ngIf"], ["matInput", "", "placeholder", "Debut Evenement", "formControlName", "start", 3, "min", "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp2", ""], ["matInput", "", "placeholder", "Fin Evenement", "formControlName", "end", 3, "min", "matDatepicker"], ["dpfin", ""], [1, "row", "col-md-10"], [1, "col-md-7"], ["type", "color", "formControlName", "color", 1, "col-md-3", "offset-md-2"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", "pull-right", 3, "disabled", "click"], [1, "modal-title"]],
        template: function ActionCalenderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActionCalenderComponent_h5_4_Template, 2, 0, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActionCalenderComponent_h5_5_Template, 2, 0, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionCalenderComponent_Template_i_click_6_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " close ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ActionCalenderComponent_Template_form_ngSubmit_10_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ActionCalenderComponent_mat_error_14_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-datepicker-toggle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-datepicker", null, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ActionCalenderComponent_mat_error_21_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker-toggle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-datepicker", null, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ActionCalenderComponent_mat_error_28_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Choisire couleur Evenement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionCalenderComponent_Template_button_click_35_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionCalenderComponent_Template_button_click_37_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sauvegarder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data !== null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.form.controls.titel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("matDatepicker", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("start").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("matDatepicker", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("end").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: ["i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFjay1vZmZpY2UvbW9udGgtY2FsZW5kYXIvYWN0aW9uLWNhbGVuZGVyL2FjdGlvbi1jYWxlbmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2JhY2stb2ZmaWNlL21vbnRoLWNhbGVuZGFyL2FjdGlvbi1jYWxlbmRlci9hY3Rpb24tY2FsZW5kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionCalenderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-action-calender',
            templateUrl: './action-calender.component.html',
            styleUrls: ['./action-calender.component.scss'],
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"],
              useValue: 'fr'
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
              useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"],
              deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]]
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"],
              useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MAT_MOMENT_DATE_FORMATS"]
            }]
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notfound/notfound.component */
      "0pRC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _back_office_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./back-office/layouts/admin-layout/admin-layout.component */
      "XxAf");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _firstTime_firstTime_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./firstTime/firstTime.component */
      "iWfN");
      /* harmony import */


      var _lockScreen_lockcScreen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./lockScreen/lockcScreen.component */
      "e1qJ");
      /* harmony import */


      var _services_auth_prevent_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/auth/prevent.login */
      "COB/");
      /* harmony import */


      var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/auth/auth.guard */
      "25YW");
      /* harmony import */


      var _services_auth_client_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/auth/client.guard */
      "sTU/");
      /* harmony import */


      var _front_office_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./front-office/client-layout/client-layout.component */
      "MJvs");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: '',
        component: _back_office_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | back-office-layouts-admin-layout-admin-layout-module */
            [__webpack_require__.e("default~back-office-layouts-admin-layout-admin-layout-module~front-office-client-layout-client-layout-module"), __webpack_require__.e("back-office-layouts-admin-layout-admin-layout-module")]).then(__webpack_require__.bind(null,
            /*! ./back-office/layouts/admin-layout/admin-layout.module */
            "tAmW")).then(function (m) {
              return m.AdminLayoutModule;
            });
          }
        }],
        canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        canActivate: [_services_auth_prevent_login__WEBPACK_IMPORTED_MODULE_9__["PreventLogin"]],
        data: {
          title: 'Connexion'
        }
      }, {
        path: 'firstTime',
        component: _firstTime_firstTime_component__WEBPACK_IMPORTED_MODULE_7__["FirstTimeComponent"],
        canActivate: [_services_auth_prevent_login__WEBPACK_IMPORTED_MODULE_9__["PreventLogin"]],
        data: {
          title: 'Mise en place'
        }
      }, {
        path: 'lockScreen',
        component: _lockScreen_lockcScreen_component__WEBPACK_IMPORTED_MODULE_8__["LockcScreenComponent"],
        canActivate: [_services_auth_prevent_login__WEBPACK_IMPORTED_MODULE_9__["PreventLogin"]],
        data: {
          title: 'Lock Screen'
        }
      }, {
        path: '',
        component: _front_office_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_12__["ClientLayoutComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | front-office-client-layout-client-layout-module */
            [__webpack_require__.e("default~back-office-layouts-admin-layout-admin-layout-module~front-office-client-layout-client-layout-module"), __webpack_require__.e("front-office-client-layout-client-layout-module")]).then(__webpack_require__.bind(null,
            /*! ./front-office/client-layout/client-layout.module */
            "omSo")).then(function (m) {
              return m.ClientLayoutModule;
            });
          }
        }],
        canActivate: [_services_auth_client_guard__WEBPACK_IMPORTED_MODULE_11__["ClientGuard"]]
      }, {
        path: '**',
        component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"],
        data: {
          title: '404 Not Found'
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bt3r":
    /*!********************************************************************!*\
      !*** ./src/app/front-office/components/footer/footer.component.ts ***!
      \********************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function bt3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.currentDate = new Date().getFullYear();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-client-footer"]],
        decls: 7,
        vars: 1,
        consts: [[1, "footer"], [1, "container-fluid"], [1, "copyright"], ["href", "https://oussama-hassani.netlify.app/", "target", "_blank"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Copyright \xA9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentDate, ". Tous droits r\xE9serv\xE9s. ");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LW9mZmljZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "e1qJ":
    /*!*****************************************************!*\
      !*** ./src/app/lockScreen/lockcScreen.component.ts ***!
      \*****************************************************/

    /*! exports provided: LockcScreenComponent */

    /***/
    function e1qJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LockcScreenComponent", function () {
        return LockcScreenComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function LockcScreenComponent_ul_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Pour plus d'informations, vous devez contacter votre administration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.error, " ");
        }
      }

      function LockcScreenComponent_ul_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.validation, " ");
        }
      }

      function LockcScreenComponent_i_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 19);
        }
      }

      var awsUrlUri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].awsUrl;

      var LockcScreenComponent = /*#__PURE__*/function () {
        function LockcScreenComponent(authservice, router, activatedRoute) {
          var _this24 = this;

          _classCallCheck(this, LockcScreenComponent);

          this.authservice = authservice;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.loginIn = false;
          this.user = {
            email: '',
            username: '',
            image: ''
          };
          this.image = '';
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['id'] && params['id'] !== 'false') {
              _this24.id = params['id'];

              _this24.authservice.getOneUserLogin(_this24.id).subscribe(function (res) {
                if (!res.success) {
                  _this24.router.navigate(['/login']);
                } else {
                  _this24.user = res.user[0];
                  console.log(_this24.user);
                  _this24.image = awsUrlUri + _this24.user.image;
                }
              }, function (err) {
                console.log(err);
              });
            } else {
              _this24.router.navigate(['/login']);
            }
          });
        }

        _createClass(LockcScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this25 = this;

            this.loginIn = true;
            var user = {
              email: this.user.email,
              password: this.password
            };

            if (!this.user.email || !this.password) {
              this.validation = 'Les champs email et mot de passe sont obligatoires';
              this.loginIn = false;
            } else {
              this.authservice.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                  _this25.authservice.sotreUserData(data.token, data.user);

                  _this25.router.navigate(['/dashboard']);
                } else {
                  _this25.authservice.authenticateClient(user).subscribe(function (data) {
                    if (data.success) {
                      _this25.authservice.sotreUserData(data.token, data.client);

                      _this25.router.navigate(['/home']);
                    } else {
                      _this25.error = data.msg;
                    }
                  });
                }

                _this25.loginIn = false;
              });
            }
          }
        }]);

        return LockcScreenComponent;
      }();

      LockcScreenComponent.ɵfac = function LockcScreenComponent_Factory(t) {
        return new (t || LockcScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      LockcScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LockcScreenComponent,
        selectors: [["app-lockcScreen"]],
        decls: 29,
        vars: 7,
        consts: [[1, "main-content"], [1, "container-fluid", "my"], [1, "row"], [1, "col-md-4", "mx-auto"], [1, "card-title", "bettersafe"], [1, "card", "card-profile"], ["loading", "lazy", 1, "card-avatar", "image", "col-md-3", 2, "top", "-30px", 3, "src"], [1, "card-body", 2, "margin-top", "-31px"], [1, "card-title"], ["class", "error", 4, "ngIf"], [3, "submit"], [1, "col-md-12"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email", "type", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Mot De Passe", "type", "password", "name", "password", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info"], ["class", "fa fa-spinner fa-spin mr-2", 4, "ngIf"], [1, "clearfix"], [1, "error"], [1, "fa", "fa-spinner", "fa-spin", "mr-2"]],
        template: function LockcScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xC9cran verrouill\xE9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Il vaut mieux \xEAtre prudent que d\xE9sol\xE9.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LockcScreenComponent_ul_14_Template, 5, 1, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LockcScreenComponent_ul_15_Template, 3, 1, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LockcScreenComponent_Template_form_submit_16_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LockcScreenComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LockcScreenComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LockcScreenComponent_i_26_Template, 1, 0, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "D\xE9verrouiller ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validation && !ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: ["@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n.main-content[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-bottom: auto;\n}\n.bettersafe[_ngcontent-%COMP%] {\n  margin-bottom: 6rem;\n  margin-top: -6rem;\n  text-align: center;\n}\n#grayOutDiv[_ngcontent-%COMP%] {\n  background-color: #333;\n  opacity: 0.7;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 9999;\n}\n.flash-message[_ngcontent-%COMP%] {\n  z-index: 10000;\n  position: relative;\n}\n.error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: -15px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ja1NjcmVlbi9sb2NrY1NjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUlSO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBRko7QUFLQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0E7RUFFSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUhKO0FBTUE7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQVFBO0VBQ0UsZ0JBQUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7QUFMSCIsImZpbGUiOiJzcmMvYXBwL2xvY2tTY3JlZW4vbG9ja2NTY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG5cclxuXHJcbi5tYWluLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOjEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5iZXR0ZXJzYWZle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcclxuICAgIG1hcmdpbi10b3A6IC02cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZ3JheU91dERpdlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uZmxhc2gtbWVzc2FnZVxyXG57XHJcbiAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5lcnJvcntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockcScreenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-lockcScreen',
            templateUrl: './lockcScreen.component.html',
            styleUrls: ['./lockcScreen.component.scss']
          }]
        }], function () {
          return [{
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "guuj":
    /*!*************************************************************!*\
      !*** ./src/app/back-office/components/components.module.ts ***!
      \*************************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function guuj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer/footer.component */
      "UmXy");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "plff");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "H+l3");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
          declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]],
          exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "iABN":
    /*!****************************************************!*\
      !*** ./src/app/services/auth/token.interceptor.ts ***!
      \****************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function iABN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "9ans");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(auth) {
          _classCallCheck(this, TokenInterceptor);

          this.auth = auth;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (request.url.includes('/auth') || request.url.includes('/login') || request.url.includes('/shared') || request.url.includes('/myClient/resend') || request.url.includes('/verification')) {
              return next.handle(request);
            }

            request = request.clone({
              setHeaders: {
                Authorization: this.auth.getToken()
              }
            });
            return next.handle(request);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iWfN":
    /*!**************************************************!*\
      !*** ./src/app/firstTime/firstTime.component.ts ***!
      \**************************************************/

    /*! exports provided: FirstTimeComponent */

    /***/
    function iWfN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirstTimeComponent", function () {
        return FirstTimeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _services_user_Rh_user_rh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user-Rh/user-rh.service */
      "8jqe");
      /* harmony import */


      var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/admin/admin.service */
      "VKgo");
      /* harmony import */


      var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/employee/employee.service */
      "8ZfG");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _services_validations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/validations */
      "u06s");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "DejY");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-file-upload */
      "pYyI");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/configuration/configuration.service */
      "rHPJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var mat_select_filter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! mat-select-filter */
      "Ekh6");

      function FirstTimeComponent_mat_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 2);
        }
      }

      var _c0 = function _c0() {
        return ["/"];
      };

      function FirstTimeComponent_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " D\xE9sol\xE9!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Le lien de verification est expir\xE9e ou incorrect, cliquer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstTimeComponent_div_2_ng_container_1_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.resend();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ici");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " pour r\xE9envoyer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Vous pouvez nous contacter pour ressoudre ce probl\xE8me ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Accueil ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Support ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Donn\xE9es personnelles");
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le nom est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le prenom est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Veuillez choisir un choix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_26_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Numero de cin est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_26_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Format invalide (8 chiffres)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_26_mat_error_1_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_26_mat_error_2_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.personalForm.controls.cin.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.personalForm.controls.cin.errors.isError && !ctx_r12.personalForm.controls.cin.errors.required);
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Numero de telephone requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Format invalide (8 chiffres)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La date de naissance est requise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "L' adresse est requise ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Donn\xE9es de connexion");
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le username est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "L'email' est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le mot de passe est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le mot de passe ne correspond pas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_select_filter_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select-filter", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filteredReturn", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_select_filter_73_Template_mat_select_filter_filteredReturn_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r63.filteredPermissionslist = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("array", ctx_r24.permissionslist)("noResultsMessage", "Aucun groupe")("displayMember", "groupename");
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_option_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var permo_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", permo_r65._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", permo_r65.groupename, " ");
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vous devez choisir au moins un secteur d'activit\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Donn\xE9es professionnelles");
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_option_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var depart_r66 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", depart_r66._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", depart_r66.name, " ");
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le departement est requis ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_93_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var service_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", service_r68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r68);
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_93_mat_option_1_Template, 2, 2, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.myDepart == null ? null : ctx_r30.myDepart.services);
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le service est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_100_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r70 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", post_r70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r70);
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_100_mat_option_1_Template, 2, 2, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.postes);
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Veuillez choisir un poste ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Associ\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Veuillez choisir un grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La date de commencement est requise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "L'anciennet\xE9 est requise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Contrat ");
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Veuillez choisir un choix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_151_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La date de debut Contrat est requise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_div_152_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La date de fin Contrat est requise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_div_152_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-datepicker-toggle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker", null, 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_div_152_mat_error_6_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r49.secondFormGroup.controls.datefinc.valid);
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_157_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le diplome est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_161_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le specialite est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_166_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La nationalit\xE9 est requise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_170_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Numero de rib est requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_170_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Format invalide (20 chiffres)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_170_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_170_mat_error_1_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_170_mat_error_2_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.secondFormGroup.controls.rib.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.secondFormGroup.controls.rib.errors.isError && !ctx_r53.secondFormGroup.controls.rib.errors.required);
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_175_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La banque est requise ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_186_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le cong\xE9 est requis ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_200_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La situation familiale est requise ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_205_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Salaire brut requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_209_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Salaire net requis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_220_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Valider");
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_i_228_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 96);
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_4_Template, 1, 0, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_9_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_13_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "M\xE2le ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Femelle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_21_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_26_Template, 3, 2, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_30_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_31_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-datepicker-toggle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-datepicker", null, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_38_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_43_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Suivant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-step", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_49_Template, 1, 0, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_54_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_58_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_63_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_67_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-select", 47, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_select_filter_73_Template, 1, 3, "mat-select-filter", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_option_74_Template, 2, 2, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_75_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Retour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Suivant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-step", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "form", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_83_Template, 1, 0, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template_mat_select_ngModelChange_87_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r75.onChangeDpart($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_option_88_Template, 2, 2, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_89_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_93_Template, 2, 1, "ng-container", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_94_Template, 2, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_96_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_100_Template, 2, 1, "ng-container", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_101_Template, 2, 0, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_103_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_container_108_Template, 3, 0, "ng-container", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_109_Template, 2, 0, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_111_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template_input_dateChange_115_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r77.calculanc($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "mat-datepicker-toggle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "mat-datepicker", null, 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_119_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_123_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Retour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Suivant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-step", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "form", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_131_Template, 1, 0, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template_mat_select_ngModelChange_135_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r78.onChangeType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-option", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "CIVP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-option", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "CDD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "CDI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Stagiaire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_144_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "mat-datepicker-toggle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "mat-datepicker", null, 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_151_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_div_152_Template, 7, 3, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_157_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_161_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_166_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_170_Template, 3, 2, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_175_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_186_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-select", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "mari\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-option", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "divorc\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "mat-option", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "s\xE9par\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "mat-option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "c\xE9libataire ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "veuf ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](200, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_200_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template_input_keypress_204_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r79.numericOnly($event);
          })("blur", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template_input_blur_204_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r80.estwi($event, "salairebrut");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](205, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_205_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template_input_keypress_208_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r81.numericOnly($event);
          })("blur", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template_input_blur_208_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r82.estwi($event, "salairenet");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](209, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_mat_error_209_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Retour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Suivant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](220, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_ng_template_220_Template, 1, 0, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Vous avez maintenant termin\xE9. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Retour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template_button_click_225_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r7.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "R\xE9initialiser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "button", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template_button_click_227_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r84.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](228, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_i_228_Template, 1, 0, "i", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Confirmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](95);

          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](102);

          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110);

          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118);

          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](150);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx_r6.isLinear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.personalForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.personalForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.personalForm.controls.lname.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.personalForm.controls.fname.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.personalForm.controls.sexe.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.personalForm.controls.cin.invalid && (ctx_r6.personalForm.controls.cin.dirty || ctx_r6.personalForm.controls.cin.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.personalForm.controls.tel.invalid && ctx_r6.personalForm.controls.tel.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.personalForm.controls.tel.invalid && (ctx_r6.personalForm.controls.tel.errors.min || ctx_r6.personalForm.controls.tel.errors.max));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.personalForm.controls.datenaissance.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.personalForm.controls.adress.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.personalForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.accountForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.accountForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.accountForm.controls.username.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.accountForm.controls.email.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.accountForm.controls.password.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.accountForm.controls.cpassword.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableOptionCentering", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r23.focused);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.filteredPermissionslist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.accountForm.controls.permissions.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.accountForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.firstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.firstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.departs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.firstFormGroup.controls.departement.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.myDepart)("ngIfElse", _r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.firstFormGroup.controls.service.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.postes)("ngIfElse", _r35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.firstFormGroup.controls.poste.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.firstFormGroup.controls.poste.value)("ngIfElse", _r39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.firstFormGroup.controls.grade.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.firstFormGroup.controls.datecommencement.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.firstFormGroup.controls.anciente.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.firstFormGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.secondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.secondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.secondFormGroup.controls.type.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.secondFormGroup.controls.datedebutc.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.isCDI);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.secondFormGroup.controls.diplome.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.secondFormGroup.controls.specialite.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.secondFormGroup.controls.nationalite.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.secondFormGroup.controls.rib.invalid && (ctx_r6.secondFormGroup.controls.rib.dirty || ctx_r6.secondFormGroup.controls.rib.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.secondFormGroup.controls.banque.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.secondFormGroup.controls.conge.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.secondFormGroup.controls.situationfamiliale.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.secondFormGroup.controls.salairebrut.invalid && ctx_r6.secondFormGroup.controls.salairebrut.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.secondFormGroup.controls.salairenet.invalid && ctx_r6.secondFormGroup.controls.salairenet.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.secondFormGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.creating);
        }
      }

      function FirstTimeComponent_div_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bienvenu - Cr\xE9e votre premier compte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FirstTimeComponent_div_2_ng_container_2_mat_horizontal_stepper_8_Template, 230, 61, "mat-horizontal-stepper", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isMobile);
        }
      }

      function FirstTimeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstTimeComponent_div_2_ng_container_1_Template, 25, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FirstTimeComponent_div_2_ng_container_2_Template, 9, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.exists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.exists);
        }
      }

      var awsUrlUri = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].awsUrl;

      var FirstTimeComponent = /*#__PURE__*/function () {
        function FirstTimeComponent(fb, sanitizer, userRhService, adminService, cService, employeeService, authservice, router, activatedRoute, snackBar) {
          var _this26 = this;

          _classCallCheck(this, FirstTimeComponent);

          this.fb = fb;
          this.sanitizer = sanitizer;
          this.userRhService = userRhService;
          this.adminService = adminService;
          this.cService = cService;
          this.employeeService = employeeService;
          this.authservice = authservice;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.snackBar = snackBar;
          this.exists = true;
          this.loaded = false;
          this.creating = false;
          this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].baseUrl;
          this.awsuri = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].awsUrl;
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploader"]({
            url: this.uri + '/file/upload/'
          });
          this.tab = 0;
          this.isMobile = false;
          this.isCDI = false;
          this.depart = [];
          this.isLinear = true;
          this.firstdate = new Date();
          this.email = '';
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['token']) {
              _this26.token = params['token'];

              _this26.authservice.getVerification(_this26.token).subscribe(function (res) {
                console.log(res);
                _this26.loaded = true;

                if (res.client && res.client.verified) {
                  _this26.router.navigate(['/login']);
                }

                if (res.exist) {
                  _this26.exists = true;
                  _this26.client = res.client;

                  _this26.fetchGroupes();

                  _this26.fetchPostes();

                  _this26.fetchDeparts();

                  _this26.image = 'user.png';

                  _this26.uploader.onBeforeUploadItem = function (item) {
                    item.withCredentials = false;
                  };

                  _this26.uploader.onAfterAddingFile = function (fileItem) {
                    _this26.filePreviewPath = _this26.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileItem._file));
                    console.log(_this26.filePreviewPath);
                  };

                  _this26.personalForm = _this26.fb.group({
                    fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    cin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _services_validations__WEBPACK_IMPORTED_MODULE_6__["cinValidation"]]),
                    adress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    sexe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    datenaissance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    tel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(99999999)]),
                    image: ''
                  });

                  _this26.personalForm.patchValue({
                    adress: _this26.client.adress,
                    fname: _this26.client.fname,
                    lname: _this26.client.lname,
                    tel: _this26.client.tel
                  });

                  _this26.accountForm = _this26.fb.group({
                    username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _services_validations__WEBPACK_IMPORTED_MODULE_6__["emailValidation"]]),
                    password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _services_validations__WEBPACK_IMPORTED_MODULE_6__["passValidation"]]),
                    permissions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                  });

                  _this26.accountForm.patchValue({
                    email: _this26.client.email
                  });

                  _this26.firstFormGroup = _this26.fb.group({
                    poste: [{
                      value: '',
                      disabled: true
                    }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    grade: [{
                      value: '',
                      disabled: true
                    }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    departement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    service: [{
                      value: '',
                      disabled: true
                    }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    anciente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    datecommencement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                  });
                  _this26.secondFormGroup = _this26.fb.group({
                    salairebrut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    salairenet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    cnss: [''],
                    type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    datedebutc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    datefinc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    diplome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    specialite: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    rib: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _services_validations__WEBPACK_IMPORTED_MODULE_6__["ribValidation"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10000000000000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(99999999999999999999)]),
                    banque: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    avantageNature: [''],
                    avantageNatureValeur: [''],
                    conge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    situationfamiliale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    nationalite: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                  });
                } else {
                  _this26.exists = false;
                  _this26.email = res.email;
                }
              }, function (err) {
                console.log(err);
              });
            } else {
              _this26.router.navigate(['/login']);
            }
          });
        }

        _createClass(FirstTimeComponent, [{
          key: "arrayOne",
          value: function arrayOne(n) {
            return Array(n);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this27 = this;

            if (this.secondFormGroup.valid && this.personalForm.valid && this.firstFormGroup.valid) {
              this.user = Object.assign(Object.assign(Object.assign({}, this.accountForm.value), this.personalForm.value), this.firstFormGroup.value);
              this.user.contrat = this.secondFormGroup.value;

              if (this.uploader.queue.length > 0) {
                this.uploader.queue[this.uploader.queue.length - 1].upload();

                this.uploader.onCompleteItem = function (item, response, status, headers) {
                  _this27.user.image = JSON.parse(response).uploadname;

                  _this27.updateUser();
                };
              } else {
                this.user.image = this.image;
                this.updateUser();
              }

              console.log(this.user);
            }
          }
        }, {
          key: "updateUser",
          value: function updateUser() {
            var _this28 = this;

            this.creating = true;
            this.userRhService.registerUserShared(this.user).subscribe(function (data) {
              console.log(data);

              if (data.success) {
                _this28.client.verified = true;

                _this28.cService.finish(_this28.client._id, _this28.client).subscribe(function (res) {
                  var user = _this28.accountForm.value;

                  _this28.authservice.authenticateUser(user).subscribe(function (data) {
                    if (data.success) {
                      _this28.creating = false;

                      _this28.authservice.sotreUserData(data.token, data.user, 'true');

                      _this28.authservice.startIntroJs();
                    } else {
                      _this28.creating = false;

                      _this28.router.navigate(['/login']);
                    }
                  });
                }, function (err) {
                  _this28.creating = false;
                  console.log(err);
                });
              } else {
                _this28.exists = false;
              }
            });
          }
        }, {
          key: "selectTab",
          value: function selectTab(index) {
            this.tab = index;
          }
        }, {
          key: "numericOnly",
          value: function numericOnly(event) {
            var patt = /^\d*\.?\d*$/;
            return patt.test(event.key);
          }
        }, {
          key: "estwi",
          value: function estwi(event, control) {
            console.log(control);
            var tmp = Number(event.target.value.replace(/\s/g, '')).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
            this.secondFormGroup.controls[control].setValue(tmp);
          }
        }, {
          key: "calculanc",
          value: function calculanc(event) {
            var dateCom = event.target.value; //let declarer une variable 

            var date1 = new Date();
            var date2 = new Date(dateCom);
            var diff = Math.floor(date1.getTime() - date2.getTime());
            var day = 1000 * 60 * 60 * 24;
            var days = Math.floor(diff / day); //5151

            var years = Math.floor(days / 365.25); //14

            days = days - 365.25 * years;
            var months = Math.floor(days / 30);
            days = Math.floor(days - months * 30);
            var message = '';

            if (days < 1) {
              message += days + " Jour, ";
            } else {
              message += days + " Jours, ";
            }

            message += months + " Mois, ";

            if (years < 1) {
              message += years + " An ";
            } else {
              message += years + " Ans ";
            }

            this.firstFormGroup.controls['anciente'].setValue(message);
          }
        }, {
          key: "onChangeDpart",
          value: function onChangeDpart(newValue) {
            var _this29 = this;

            if (newValue) {
              this.firstFormGroup.controls['service'].enable();
              this.firstFormGroup.controls['poste'].enable();
              this.firstFormGroup.controls['poste'].updateValueAndValidity();
              this.firstFormGroup.controls['grade'].enable();
              this.firstFormGroup.controls['grade'].updateValueAndValidity();
            } else {
              this.firstFormGroup.controls['poste'].setValue('');
              this.firstFormGroup.controls['grade'].setValue('');
              this.firstFormGroup.controls['service'].disable();
              this.firstFormGroup.controls['poste'].disable();
              this.firstFormGroup.controls['grade'].disable();
            }

            if (this.user && this.user.departement && newValue == this.user.departement) this.firstFormGroup.patchValue({
              service: this.user.service
            });
            this.myDepart = this.departs.filter(function (depart) {
              return newValue.some(function (newVal) {
                return newVal === depart._id;
              });
            });
            this.myDepart.services = [];
            this.myDepart.forEach(function (depart) {
              var _this29$myDepart$serv;

              (_this29$myDepart$serv = _this29.myDepart.services).push.apply(_this29$myDepart$serv, _toConsumableArray(depart.services));
            });
            this.depart = newValue;
          }
        }, {
          key: "onChangeType",
          value: function onChangeType(newValue) {
            if (newValue && newValue == 'CDI') {
              this.secondFormGroup.controls['datefinc'].clearValidators();
              this.secondFormGroup.controls['datefinc'].updateValueAndValidity();
              this.isCDI = true;
            } else {
              this.secondFormGroup.controls['datefinc'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
              this.isCDI = false;
            }
          }
        }, {
          key: "fetchGroupes",
          value: function fetchGroupes() {
            var _this30 = this;

            this.cService.getGroupesShared().subscribe(function (res) {
              _this30.permissionslist = res;
              _this30.filteredPermissionslist = _this30.permissionslist.slice();
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "fetchPostes",
          value: function fetchPostes() {
            var _this31 = this;

            this.cService.getPostesShared().subscribe(function (res) {
              _this31.postes = res.postes;
              console.log(_this31.postes);
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            if (event.target.innerWidth > 1283) {
              this.isMobile = false;
            } else {
              this.isMobile = true;
            }
          }
        }, {
          key: "fetchDeparts",
          value: function fetchDeparts() {
            var _this32 = this;

            this.cService.getAllDepartsShared().subscribe(function (res) {
              _this32.departs = res;
              console.log(_this32.departs);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "resend",
          value: function resend() {
            var _this33 = this;

            var data = {
              email: this.email
            };
            this.adminService.resendVer(data).subscribe(function (res) {
              if (res.success) {
                _this33.snackBar.open(res.msg, 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack']
                });
              } else {
                _this33.snackBar.open(res.msg, 'X', {
                  duration: 6000,
                  verticalPosition: 'top',
                  panelClass: ['custom-snack']
                });
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return FirstTimeComponent;
      }();

      FirstTimeComponent.ɵfac = function FirstTimeComponent_Factory(t) {
        return new (t || FirstTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_Rh_user_rh_service__WEBPACK_IMPORTED_MODULE_2__["UserRhService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_14__["ConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"]));
      };

      FirstTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FirstTimeComponent,
        selectors: [["app-firstTime"]],
        hostBindings: function FirstTimeComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FirstTimeComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"],
          useValue: 'fr'
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MomentDateAdapter"],
          deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"]]
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],
          useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MAT_MOMENT_DATE_FORMATS"]
        }])],
        decls: 3,
        vars: 2,
        consts: [[1, "main-content"], ["class", "container-fluid my", 4, "ngIf"], [1, "container-fluid", "my"], [4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "error-template"], [1, "far", "fa-frown-open"], [1, "fas", "fa-frown"], [1, "error-details"], ["href", "javascript:;", 3, "click"], [1, "error-actions"], [1, "btn", "btn-primary", "btn-lg", 3, "routerLink"], [1, "material-icons", "md-24"], ["href", "https://oussama-hassani.netlify.app/", "target", "_blank", 1, "btn", "btn-default", "btn-lg"], [1, "col-md-10", "mx-auto"], [1, "card"], [1, "card-header", "card-header-info"], [1, "card-title"], [1, "card-body"], ["class", "stepper", 3, "linear", 4, "ngIf"], [1, "stepper", 3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "col-md-5"], [1, "example-full-width"], ["matInput", "", "placeholder", "Nom", "formControlName", "lname"], [1, "col-md-4"], ["matInput", "", "placeholder", "Pr\xE9nom", "formControlName", "fname"], [1, "col-md-3"], ["placeholder", "Sexe", "formControlName", "sexe"], ["value", "male"], ["value", "female"], ["matInput", "", "placeholder", "Carte d'identit\xE9 nationale", "formControlName", "cin", "type", "text"], ["matInput", "", "placeholder", "Numero de telephone", "type", "number", "maxlength", "8", "formControlName", "tel"], ["matInput", "", "placeholder", "Date de naissance ", "formControlName", "datenaissance", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "Adresse", "formControlName", "adress"], ["mat-button", "", "matStepperNext", "", 3, "disabled"], [1, "col-md-6"], ["matInput", "", "placeholder", "Nom d'utilisateur", "formControlName", "username"], ["matInput", "", "placeholder", "Adresse email", "formControlName", "email"], ["matInput", "", "placeholder", "Mot de passe", "type", "password", "formControlName", "password"], ["matInput", "", "placeholder", "Confirmer mot de passe", "type", "password", "formControlName", "cpassword"], ["formControlName", "permissions", "placeholder", "P\xE9rmission", "multiple", "", 3, "disableOptionCentering"], ["select", ""], [3, "array", "noResultsMessage", "displayMember", "filteredReturn", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperPrevious", ""], ["placeholder", "Departement", "formControlName", "departement", "multiple", "", 3, "ngModelChange"], ["placeholder", "Service", "formControlName", "service"], [4, "ngIf", "ngIfElse"], ["empty_service", ""], ["placeholder", "Poste", "formControlName", "poste"], ["empty_poste", ""], ["placeholder", "Grade", "formControlName", "grade"], ["other_content", ""], ["matInput", "", "placeholder", "Date de commencement ", "formControlName", "datecommencement", 3, "matDatepicker", "dateChange"], ["picker2", ""], ["matInput", "", "placeholder", "Anciennete", "formControlName", "anciente"], ["placeholder", "Type", "formControlName", "type", 3, "ngModelChange"], ["value", "SIVP"], ["value", "CDD"], ["value", "CDI"], ["value", "STAGIAIRE"], ["matInput", "", "placeholder", "Date de debut Contrat ", "formControlName", "datedebutc", 3, "matDatepicker"], ["picker3", ""], ["class", "col-md-3", 4, "ngIf"], ["matInput", "", "placeholder", "Dipl\xF4me", "formControlName", "diplome"], ["matInput", "", "placeholder", "Specialite", "formControlName", "specialite"], ["matInput", "", "placeholder", "Nationalit\xE9", "formControlName", "nationalite"], ["matInput", "", "placeholder", "RIB", "type", "text", "formControlName", "rib"], ["matInput", "", "placeholder", "Banque", "formControlName", "banque"], ["matInput", "", "placeholder", "Avantage en nature", "formControlName", "avantageNature"], ["matInput", "", "placeholder", "Valeur de l'avantage", "formControlName", "avantageNatureValeur"], ["matInput", "", "placeholder", "Conge", "formControlName", "conge"], ["placeholder", "Situation familiale", "formControlName", "situationfamiliale"], ["value", "mari\xE9"], ["value", "divorc\xE9"], ["value", "s\xE9par\xE9"], ["value", "c\xE9libataire "], ["value", "veuf"], ["matInput", "", "placeholder", "Salaire brut", "type", "text", "formControlName", "salairebrut", 3, "keypress", "blur"], ["matInput", "", "placeholder", "Salaire net", "type", "text", "formControlName", "salairenet", 3, "keypress", "blur"], ["matInput", "", "placeholder", "CNSS", "type", "text", "formControlName", "cnss"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-danger", "pull-right", 3, "click"], ["class", "fa fa-spinner fa-spin mr-2", 4, "ngIf"], [3, "array", "noResultsMessage", "displayMember", "filteredReturn"], [3, "value"], ["value", "100"], ["matInput", "", "placeholder", "Date de fin Contrat ", "formControlName", "datefinc", 3, "matDatepicker"], ["picker4", ""], [1, "fa", "fa-spinner", "fa-spin", "mr-2"]],
        template: function FirstTimeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirstTimeComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FirstTimeComponent_div_2_Template, 3, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperPrevious"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatError"], mat_select_filter__WEBPACK_IMPORTED_MODULE_23__["MatSelectFilterComponent"]],
        styles: ["@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n.main-content[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-bottom: auto;\n}\n#grayOutDiv[_ngcontent-%COMP%] {\n  background-color: #333;\n  opacity: 0.7;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 9999;\n}\n.flash-message[_ngcontent-%COMP%] {\n  z-index: 10000;\n  position: relative;\n}\n.error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: -15px;\n}\n.error-template[_ngcontent-%COMP%] {\n  margin-top: -5%;\n  text-align: center;\n}\n.error-actions[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.error-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.material-icons.md-24[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.showButton[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 5%;\n}\n.image[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.middle[_ngcontent-%COMP%] {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n.showButton[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.showButton[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.text[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 11px;\n  padding: 16px 32px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-bottom: 50%;\n  height: 60%;\n  \n}\n.stepper[_ngcontent-%COMP%] {\n  display: inline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3RUaW1lL2ZpcnN0VGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUlSO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBRko7QUFLQTtFQUVJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBSEo7QUFNQTtFQUVJLGNBQUE7RUFDQSxrQkFBQTtBQUpKO0FBUUE7RUFDRSxnQkFBQTtFQUNDLGtCQUFBO0FBTEg7QUFTQTtFQUFpQixlQUFBO0VBQWdCLGtCQUFBO0FBSmpDO0FBS0E7RUFBZ0IsZ0JBQUE7RUFBZ0IsbUJBQUE7QUFBaEM7QUFDQTtFQUFzQixrQkFBQTtBQUd0QjtBQUZBO0VBQXdCLGVBQUE7QUFNeEI7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQU9KO0FBSkU7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQU9KO0FBSkU7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBT0o7QUFKRTtFQUNFLFlBQUE7QUFPSjtBQUpFO0VBQ0UsVUFBQTtBQU9KO0FBSkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUFhLDZCQUFBO0FBUWpCO0FBTEU7RUFDRSwwQkFBQTtBQVFKIiwiZmlsZSI6InNyYy9hcHAvZmlyc3RUaW1lL2ZpcnN0VGltZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcblxyXG5cclxuLm1haW4tY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6MTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG4gXHJcbiNncmF5T3V0RGl2XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5mbGFzaC1tZXNzYWdlXHJcbntcclxuICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmVycm9ye1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuXHJcbi5lcnJvci10ZW1wbGF0ZSB7bWFyZ2luLXRvcDogLTUlO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5lcnJvci1hY3Rpb25zIHttYXJnaW4tdG9wOjE1cHg7bWFyZ2luLWJvdHRvbToxNXB4O31cclxuLmVycm9yLWFjdGlvbnMgLmJ0biB7IG1hcmdpbi1yaWdodDoxMHB4OyB9XHJcbi5tYXRlcmlhbC1pY29ucy5tZC0yNCB7IGZvbnQtc2l6ZTogMjBweDsgfVxyXG5cclxuLnNob3dCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlXHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZSB7XHJcbiAgICBvYmplY3QtZml0OmNvdmVyO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLm1pZGRsZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuc2hvd0J1dHRvbjpob3ZlciAuaW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuICBcclxuICAuc2hvd0J1dHRvbjpob3ZlciAubWlkZGxlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICAgIG9iamVjdC1maXQ6Y29udGFpbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwJTtcclxuICAgIGhlaWdodDogNjAlOyAvKiBhcyB0aGUgaGFsZiBvZiB0aGUgd2lkdGggKi9cclxuICB9XHJcblxyXG4gIC5zdGVwcGVyIHsgICAgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstTimeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-firstTime',
            templateUrl: './firstTime.component.html',
            styleUrls: ['./firstTime.component.scss'],
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"],
              useValue: 'fr'
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
              useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MomentDateAdapter"],
              deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"]]
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],
              useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MAT_MOMENT_DATE_FORMATS"]
            }]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
          }, {
            type: _services_user_Rh_user_rh_service__WEBPACK_IMPORTED_MODULE_2__["UserRhService"]
          }, {
            type: _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
          }, {
            type: _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_14__["ConfigurationService"]
          }, {
            type: _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "n4jB":
    /*!*************************************************************!*\
      !*** ./src/app/services/appeldoffre/appeldoffre.service.ts ***!
      \*************************************************************/

    /*! exports provided: AppeldoffreService */

    /***/
    function n4jB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppeldoffreService", function () {
        return AppeldoffreService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var AppeldoffreService = /*#__PURE__*/function () {
        function AppeldoffreService(http) {
          _classCallCheck(this, AppeldoffreService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        }

        _createClass(AppeldoffreService, [{
          key: "addAppel",
          value: function addAppel(appeldoffre) {
            return this.http.post(this.baseUrl + '/api/Appeldoffre/create', appeldoffre, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteAppel",
          value: function deleteAppel(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            return this.http["delete"](this.baseUrl + '/api/Appeldoffre/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateAppel",
          value: function updateAppel(id, appeldoffre) {
            return this.http.put(this.baseUrl + '/api/Appeldoffre/update/' + id, appeldoffre, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateAppelFiles",
          value: function updateAppelFiles(id, appeldoffre) {
            return this.http.put(this.baseUrl + '/api/Appeldoffre/updateFiles/' + id, appeldoffre, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addFiles",
          value: function addFiles(id, appeldoffre) {
            return this.http.put(this.baseUrl + '/api/Appeldoffre/addFiles/' + id, appeldoffre, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getAllAppels",
          value: function getAllAppels() {
            return this.http.get(this.baseUrl + '/api/Appeldoffre', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getRefs",
          value: function getRefs() {
            return this.http.get(this.baseUrl + '/api/Appeldoffre/refs', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getOneAppel",
          value: function getOneAppel(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            var user;
            return this.http.get(this.baseUrl + '/api/Appeldoffre/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addCategorie",
          value: function addCategorie(cat) {
            return this.http.post(this.baseUrl + '/api/categoryAppel/create', cat, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            return this.http.get(this.baseUrl + '/api/categoryAppel', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addDocument",
          value: function addDocument(cat) {
            return this.http.post(this.baseUrl + '/api/documentAppel/create', cat, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getDocuments",
          value: function getDocuments() {
            return this.http.get(this.baseUrl + '/api/documentAppel', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addRaison",
          value: function addRaison(raison) {
            return this.http.post(this.baseUrl + '/api/raisonAppel/create', raison, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getRaisons",
          value: function getRaisons() {
            return this.http.get(this.baseUrl + '/api/raisonAppel', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addModalite",
          value: function addModalite(cat) {
            return this.http.post(this.baseUrl + '/api/modaliteDepot/create', cat, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getModalites",
          value: function getModalites() {
            return this.http.get(this.baseUrl + '/api/modaliteDepot', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getGroupes",
          value: function getGroupes() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            return this.http.get(this.baseUrl + '/api/groupe', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "downloadDoc",
          value: function downloadDoc(file) {
            var body = {
              filename: file
            };
            return this.http.post(this.baseUrl + '/api/documents/download', body, {
              responseType: 'blob',
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }]);

        return AppeldoffreService;
      }();

      AppeldoffreService.ɵfac = function AppeldoffreService_Factory(t) {
        return new (t || AppeldoffreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AppeldoffreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppeldoffreService,
        factory: AppeldoffreService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppeldoffreService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nZgt":
    /*!***********************************************************************!*\
      !*** ./src/app/front-office/profil-client/profil-client.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ProfilClientComponent */

    /***/
    function nZgt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilClientComponent", function () {
        return ProfilClientComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/admin/admin.service */
      "VKgo");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _services_validations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/validations */
      "u06s");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-file-upload */
      "pYyI");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function ProfilClientComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.user == null ? null : ctx_r0.user.name, " ");
        }
      }

      function ProfilClientComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.user == null ? null : ctx_r1.user.fname, " ", ctx_r1.user == null ? null : ctx_r1.user.lname, " ");
        }
      }

      function ProfilClientComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user == null ? null : ctx_r2.user.name, " ");
        }
      }

      function ProfilClientComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r3.user == null ? null : ctx_r3.user.fname, " ", ctx_r3.user == null ? null : ctx_r3.user.lname, " ");
        }
      }

      function ProfilClientComponent_mat_error_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Saisir votre Mot de passe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfilClientComponent_mat_error_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le mot de passe ne correspond pas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfilClientComponent_i_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
        }
      }

      var uploadUri = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].uri;

      var ProfilClientComponent = /*#__PURE__*/function () {
        function ProfilClientComponent(snackBar, adminService, authservice, activatedRoute, fb, sanitizer) {
          var _this34 = this;

          _classCallCheck(this, ProfilClientComponent);

          this.snackBar = snackBar;
          this.adminService = adminService;
          this.authservice = authservice;
          this.activatedRoute = activatedRoute;
          this.fb = fb;
          this.sanitizer = sanitizer;
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({
            url: uploadUri
          });

          this.uploader.onAfterAddingFile = function (fileItem) {
            _this34.filePreviewPath = _this34.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileItem._file)); //this.imageChange();
          };

          this.form = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_services_validations__WEBPACK_IMPORTED_MODULE_5__["passValidation"]])
          });
        }

        _createClass(ProfilClientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this35 = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              if (params['id']) _this35.id = params['id'];else _this35.id = _this35.authservice.getUserfromToken()._id;

              _this35.getoneclient(_this35.id);
            });
          }
        }, {
          key: "getoneclient",
          value: function getoneclient(id) {
            var _this36 = this;

            this.adminService.getOneClient(id).subscribe(function (res) {
              return _this36.user = res;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this37 = this;

            if (!this.form.invalid && this.form.controls.password.value !== '') {
              var client = {
                password: this.form.controls.password.value
              };
              this.adminService.updateClient(this.id, client).subscribe(function (data) {
                console.log(data);

                if (data.success) {
                  _this37.snackBar.open(data.msg, 'X', {
                    duration: 6000,
                    verticalPosition: 'top',
                    panelClass: ['custom-snack']
                  });
                } else {
                  console.log(data);

                  _this37.snackBar.open(data.msg, 'X', {
                    duration: 6000,
                    verticalPosition: 'top',
                    panelClass: ['custom-snack-error']
                  });
                }
              });
            }
          }
        }]);

        return ProfilClientComponent;
      }();

      ProfilClientComponent.ɵfac = function ProfilClientComponent_Factory(t) {
        return new (t || ProfilClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]));
      };

      ProfilClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfilClientComponent,
        selectors: [["app-profil-client"]],
        decls: 81,
        vars: 12,
        consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "card"], [1, "card-header", "card-header-info"], [1, "nav-tabs-navigation"], [1, "nav-tabs-wrapper"], ["data-tabs", "tabs", 1, "nav", "nav-tabs"], [1, "nav-item"], ["mat-button", "", "href", "#perso", "data-toggle", "tab", 1, "nav-link", "active"], [1, "material-icons"], [1, "ripple-container"], [1, "card-body"], [1, "tab-content"], ["id", "perso", 1, "tab-pane", "active"], [1, "container"], [1, "col-lg-12"], [1, "card-header-primary", "pull-left", "faza"], [1, "nav", "nav-tabs"], ["href", "", "data-target", "#personnelles", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "", "data-target", "#connexion", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content", "py-4", "mt-5"], ["id", "personnelles", 1, "tab-pane", "active"], [1, "col-md-3"], [2, "font-weight", "bold"], ["class", "col-md-3 border-right border-md", 4, "ngIf"], [1, "col-md-6"], [1, "col-md-9"], ["id", "connexion", 1, "tab-pane"], [1, "row", "mb-3"], [1, "col-md-2"], [1, "col-md-4"], [3, "formGroup", "submit"], ["matInput", "", "placeholder", "Mot de passe", "formControlName", "password", "type", "password"], [4, "ngIf"], ["matInput", "", "placeholder", "Confirmer mot de passe", "formControlName", "cpassword", "type", "password"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", "pull-right"], ["class", "fa fa-spinner fa-spin mr-2", 4, "ngIf"], [1, "col-md-3", "border-right", "border-md"], [1, "fa", "fa-spinner", "fa-spin", "mr-2"]],
        template: function ProfilClientComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Informations personnelles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Donn\xE9es personnelles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Donn\xE9es de connexion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Nom :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProfilClientComponent_div_37_Template, 2, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProfilClientComponent_div_38_Template, 2, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Adress:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Num\xE9ro Bank:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Adresse:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Nom :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ProfilClientComponent_div_61_Template, 2, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ProfilClientComponent_div_62_Template, 2, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Adresse email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "form", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProfilClientComponent_Template_form_submit_68_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ProfilClientComponent_mat_error_73_Template, 2, 0, "mat-error", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ProfilClientComponent_mat_error_77_Template, 2, 0, "mat-error", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ProfilClientComponent_i_79_Template, 1, 0, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Connexion ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.pm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.pm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.adress, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.bank, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.adress, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.pm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.pm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.email, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.password.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.cpassword.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginIn);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LW9mZmljZS9wcm9maWwtY2xpZW50L3Byb2ZpbC1jbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilClientComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profil-client',
            templateUrl: './profil-client.component.html',
            styleUrls: ['./profil-client.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }, {
            type: _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nak+":
    /*!***************************************************************!*\
      !*** ./src/app/services/notification/notification.service.ts ***!
      \***************************************************************/

    /*! exports provided: NotificationService */

    /***/
    function nak(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(http) {
          _classCallCheck(this, NotificationService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        }

        _createClass(NotificationService, [{
          key: "createNotification",
          value: function createNotification(notification) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.post(this.baseUrl + '/api/notification/create', notification, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getNotification",
          value: function getNotification(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/notification/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('id_token');
          }
        }, {
          key: "getIdfromToken",
          value: function getIdfromToken() {
            var jwtData = this.getToken().split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData);
            console.log('id: ' + decodedJwtData._id);
            return decodedJwtData._id;
          }
        }, {
          key: "seennotification",
          value: function seennotification(userId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/notification/seen/' + userId, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            var token = localStorage.getItem('id_token');
            this.authToken = token;
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
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

    },

    /***/
    "plff":
    /*!*******************************************************************!*\
      !*** ./src/app/back-office/components/navbar/navbar.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function plff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../services/notification/notification.service */
      "nak+");
      /* harmony import */


      var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/admin/admin.service */
      "VKgo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! howler */
      "HlzF");
      /* harmony import */


      var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR"); //import { ROUTES } from '../sidebar/sidebar.component';


      function NavbarComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.readchange);
        }
      }

      var _c0 = function _c0() {
        return ["/admin-config"];
      };

      var _c1 = function _c1() {
        return ["active"];
      };

      function NavbarComponent_a_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
        }
      }

      function NavbarComponent_img_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 35);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.awsUrl, "", ctx_r2.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function NavbarComponent_a_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_a_32_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.startguide(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "help_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Continuer le guide");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_span_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.unseen_notifications);
        }
      }

      function NavbarComponent_a_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Aucune Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_ng_container_48_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "", ctx_r10.awsUrl, "", notification_r9.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function NavbarComponent_ng_container_48_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 46);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "", ctx_r12.awsUrl, "1575494319217.icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function NavbarComponent_ng_container_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_ng_container_48_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var notification_r9 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.notifRedirect(notification_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NavbarComponent_ng_container_48_div_4_Template, 2, 2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NavbarComponent_ng_container_48_ng_template_5_Template, 1, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var notification_r9 = ctx.$implicit;

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", notification_r9.image)("ngIfElse", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](notification_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](notification_r9.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.timeAgo(notification_r9.createdAt));
        }
      }

      var _c2 = function _c2() {
        return ["/feedback"];
      };

      var _c3 = function _c3() {
        return ["/user-profile"];
      };

      var _c4 = function _c4(a0) {
        return {
          id: a0
        };
      };

      var _c5 = function _c5() {
        return ["/notifications"];
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, element, router, authservice, changeDetectorRef, notificationService, adminService) {
          var _this38 = this;

          _classCallCheck(this, NavbarComponent);

          this.element = element;
          this.router = router;
          this.authservice = authservice;
          this.changeDetectorRef = changeDetectorRef;
          this.notificationService = notificationService;
          this.adminService = adminService;
          this.sound = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
            src: ['../../../../assets/audio/light.mp3']
          });
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
          this.awsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].awsUrl;
          this.mobile_menu_visible = 0;
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7__["connect"](this.baseUrl);
          this.location = location;
          this.sidebarVisible = false;
          this.userId = authservice.getIdfromToken();
          this.authservice.getOneUser(this.userId).subscribe(function (res) {
            _this38.userName = res.lname + ' ' + res.fname;
            _this38.image = res.image;
          }, function (err) {
            console.log(err);
          });
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this39 = this;

            this.getPermissions();
            this.getNonReadFeeback();
            this.listTitles = [];
            var navbar = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
            this.router.events.subscribe(function (event) {
              _this39.sidebarClose();

              var $layer = document.getElementsByClassName('close-layer')[0];

              if ($layer) {
                $layer.remove();
                _this39.mobile_menu_visible = 0;
              }
            });
            this.loadnotification(true);

            if (this.isNotMobileMenu()) {
              this.socket.on(this.userId, function (message) {
                if (this.isNotMobileMenu()) {
                  this.loadnotification(false);
                }
              }.bind(this));
            }

            this.socket.emit('logedin', {
              userId: this.userId
            });
          }
        }, {
          key: "isNotMobileMenu",
          value: function isNotMobileMenu() {
            if ($(window).width() > 991) {
              return true;
            }

            return false;
          }
        }, {
          key: "loadnotification",
          value: function loadnotification(oninit) {
            var _this40 = this;

            this.notificationService.getNotification(this.userId).subscribe(function (res) {
              console.log(res);
              _this40.notifications = res;
              _this40.unseen_notifications = _this40.count_unseen_notifications(res);

              if (oninit === false && _this40.unseen_notifications > 0) {
                _this40.showNotification(res[0]);

                _this40.sound.play();
              }
            }, function (err) {
              console.log(err);
            });
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var body = document.getElementsByTagName('body')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var body = document.getElementsByTagName('body')[0];
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
          }
        }, {
          key: "getNonReadFeeback",
          value: function getNonReadFeeback() {
            var _this41 = this;

            this.adminService.getFeedbacks().subscribe(function (res) {
              _this41.readchange = res.filter(function (el) {
                return el.changestatue == true;
              }).length;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "consultationfeedback",
          value: function consultationfeedback() {
            this.adminService.changestautefeddback().subscribe(function (res) {
              return console.log(res);
            });
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            // const toggleButton = this.toggleButton;
            // const body = document.getElementsByTagName('body')[0];
            var $toggle = document.getElementsByClassName('navbar-toggler')[0];

            if (this.sidebarVisible === false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }

            var body = document.getElementsByTagName('body')[0];

            if (this.mobile_menu_visible == 1) {
              // $('html').removeClass('nav-open');
              body.classList.remove('nav-open');

              if ($layer) {
                $layer.remove();
              }

              setTimeout(function () {
                $toggle.classList.remove('toggled');
              }, 400);
              this.mobile_menu_visible = 0;
            } else {
              setTimeout(function () {
                $toggle.classList.add('toggled');
              }, 430);
              var $layer = document.createElement('div');
              $layer.setAttribute('class', 'close-layer');

              if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
              } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
              }

              setTimeout(function () {
                $layer.classList.add('visible');
              }, 100);

              $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
                }, 400);
              }.bind(this);

              body.classList.add('nav-open');
              this.mobile_menu_visible = 1;
            }
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());
            var display;

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(2);
            }

            titlee = titlee.split('/').pop();

            for (var item = 0; item < this.listTitles.length; item++) {
              if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
              }
            }

            switch (titlee) {
              case 'user-profile':
                {
                  display = 'Votre profil';
                  break;
                }
            }

            return display;
          }
        }, {
          key: "onLogoutClick",
          value: function onLogoutClick() {
            this.authservice.logout();
          }
        }, {
          key: "count_unseen_notifications",
          value: function count_unseen_notifications(notifications) {
            var count = 0;

            for (var i = 0; i < notifications.length; ++i) {
              for (var k in notifications[i].read_by) {
                if (Object.values(notifications[i].read_by[k]).indexOf(this.userId) >= 0) {
                  count++;
                }
              }
            }

            return notifications.length - count;
          }
        }, {
          key: "notification_seen",
          value: function notification_seen() {
            var _this42 = this;

            if (this.unseen_notifications > 0) {
              this.notificationService.seennotification(this.userId).subscribe(function (res) {
                console.log(res);
                _this42.unseen_notifications = 0;
              }, function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "timeAgo",
          value: function timeAgo(date) {
            var NOW = new Date();
            var times = [['seconde', 1], ['minute', 60], ['heure', 3600], ['jour', 86400], ['semaine', 604800], ['moi', 2592000], ['an', 31536000]];
            var diff = Math.round((new Date(NOW).valueOf() - new Date(date).valueOf()) / 1000);

            for (var t = 0; t < times.length; t++) {
              if (diff < times[t][1]) {
                if (t === 0) {
                  return 'à l\'instant';
                } else {
                  diff = Math.round(diff / +times[t - 1][1]);
                  return 'Il y a ' + diff + ' ' + times[t - 1][0] + (diff === 1 && t !== 6 ? '' : 's');
                }
              }
            }

            diff = Math.round(diff / +times[6][1]);
            return 'Il y a ' + diff + ' an' + (diff === 1 ? '' : 's');
          }
        }, {
          key: "showNotification",
          value: function showNotification(notification) {
            var type = ['', 'info', 'success', 'warning', 'danger'];
            $.notify({
              icon: 'notifications',
              message: notification.title + ' - ' + notification.message + '</br>' + this.timeAgo(notification.createdAt)
            }, {
              type: 'info',
              timer: 4000,
              placement: {
                from: 'bottom',
                align: 'left'
              },
              template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' + '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' + '<i class="material-icons" data-notify="icon">notifications</i> ' + '<span data-notify="title">{1}</span> ' + '<span data-notify="message">{2}</span>' + '<div class="progress" data-notify="progressbar">' + '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' + '</div>' + '<a href="{3}" target="{4}" data-notify="url"></a>' + '</div>'
            });
          }
        }, {
          key: "notifRedirect",
          value: function notifRedirect(notif) {
            var _this43 = this;

            console.log(notif);

            if (notif.link.params) {
              this.router.navigateByUrl('/', {
                skipLocationChange: true
              }).then(function () {
                return _this43.router.navigate([notif.link.url], {
                  queryParams: _defineProperty({}, notif.link.params, notif.link.paramsValue)
                });
              });
            } else {
              this.router.navigateByUrl('/', {
                skipLocationChange: true
              }).then(function () {
                return _this43.router.navigate([notif.link.url]);
              });
            }
          }
        }, {
          key: "startguide",
          value: function startguide(step) {
            var _this44 = this;

            if (step == 0) {
              localStorage.setItem('stepNumber', '0');
              this.router.navigate(['dashboard']);
              setTimeout(function () {
                _this44.authservice.startIntroJs();
              }, 500);
            } else {
              this.authservice.startIntroJs();
            }
          }
        }, {
          key: "guideStep",
          value: function guideStep() {
            if (parseInt(localStorage.getItem('stepNumber')) != 0) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "getPermissions",
          value: function getPermissions() {
            var _this45 = this;

            var permessionId = [];
            this.authservice.getOneUser(this.authservice.getIdfromToken()).subscribe(function (res) {
              res.permissions.forEach(function (permission) {
                permessionId.push(permission);
              });

              _this45.authservice.getGroupes(permessionId).subscribe(function (res) {
                permessionId = res;
                var role = [];
                permessionId.forEach(function (groupe) {
                  role = role.concat(groupe.permissions);
                });
                _this45.permissions = role;
                console.log("permission", permessionId);
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_0__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 56,
        vars: 18,
        consts: [[1, "navbar", "navbar-expand-lg", "bg-white", "navbar-absolute", "fixed-top"], [1, "container-fluid"], [1, "navbar-wrapper"], ["href", "#", 1, "navbar-brand"], ["mat-raised-button", "", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "sr-only"], [1, "navbar-toggler-icon", "icon-bar"], ["id", "navigation", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item", "takeleft"], [1, "nav-link", 3, "routerLink", "click"], ["title", "feedback", 1, "material-icons"], ["class", "notification", 4, "ngIf"], ["class", "abc ", "id", "step1", "title", "settings", 3, "routerLink", "routerLinkActive", 4, "ngIf"], [1, "nav-item", "dropdown", "mr-1"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["style", "width:25px;height:25px;", "class", "rounded-circle mr-1", 3, "src", 4, "ngIf"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "nav-link", 3, "routerLink", "queryParams"], [1, "material-icons"], [1, "nav-link", 3, "click"], ["class", "nav-link", 3, "click", 4, "ngIf"], ["href", "https://www.youtube.com/channel/UC9ea8orj157sgbuix7yN-pg", "target", "_blank", 1, "nav-link"], [1, "dropdown-divider"], [1, "nav-item", "dropdown", 3, "click"], ["href", "", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-header"], [1, "scroll"], ["class", "dropdown-item", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "routerLink"], [1, "text-primary", "mx-auto"], [1, "notification"], ["id", "step1", "title", "settings", 1, "abc", 3, "routerLink", "routerLinkActive"], [1, "rounded-circle", "mr-1", 2, "width", "25px", "height", "25px", 3, "src"], [1, "dropdown-item"], [1, "text-black", "mx-auto"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "row", "justify-content-start"], [1, "col-3"], [4, "ngIf", "ngIfElse"], ["defaultImage", ""], [1, "card-title", "font-weight-bold"], [1, "text-muted", "longtext"], [1, "card-text", "text-info"], [1, "rounded-circle", 2, "width", "60px", "height", "60px", 3, "src"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_5_listener() {
              return ctx.sidebarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Toggle navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() {
              return ctx.consultationfeedback();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, NavbarComponent_span_17_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, NavbarComponent_a_18_Template, 3, 4, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, NavbarComponent_img_21_Template, 1, 2, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_28_listener() {
              return ctx.startguide(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "help_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " D\xE9marrer le guide");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, NavbarComponent_a_32_Template, 4, 0, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "support");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " demo video");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_38_listener() {
              return ctx.notification_seen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, NavbarComponent_span_42_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h6", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Notifications:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, NavbarComponent_a_47_Template, 3, 0, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, NavbarComponent_ng_container_48_Template, 15, 5, "ng-container", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Voir Tout");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_53_listener() {
              return ctx.onLogoutClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.readchange > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.permissions == null ? null : ctx.permissions.includes("configUpdate"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.userName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c4, ctx.userId));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.guideStep());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.unseen_notifications > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.notifications == null ? null : ctx.notifications.length) <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.notifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c5));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: [".scroll[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 400px;\r\n    max-height: 275px;\r\n    overflow: scroll;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: rgb(228, 225, 225); \r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: rgb(173, 170, 170); \r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar:hover {\r\n    width: 15px;\r\n}\r\n.longtext[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    max-width: 250px;\r\n    width: auto;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform: none !important;}\r\n.nav-link[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\na[_ngcontent-%COMP%]:focus {\r\n    color: red ;\r\n \r\n}\r\na[_ngcontent-%COMP%] {\r\n    color: gray;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    color:#FF4519;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFjay1vZmZpY2UvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQSxVQUFVO0FBQ1Y7SUFDSSxVQUFVO0FBQ2Q7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxtQkFBbUI7O0FBRXZCO0FBRUEsV0FBVztBQUNYO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjs7QUFFdkI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7QUFDQSxVQUFVLCtCQUErQixDQUFDO0FBQzFDO0lBQ0ksZUFBZTtBQUNuQjtBQUVDO0lBQ0csV0FBVzs7QUFFZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYmFjay1vZmZpY2UvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI3NXB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjgsIDIyNSwgMjI1KTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE3MywgMTcwLCAxNzApOyBcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG5cclxuXHJcbi5sb25ndGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLm5hdmJhciBhe3RleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7fVxyXG4ubmF2LWxpbmt7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiByZWQgO1xyXG4gXHJcbn1cclxuYSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgY29sb3I6I0ZGNDUxOTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_0__["NotificationService"]
          }, {
            type: _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rHPJ":
    /*!*****************************************************************!*\
      !*** ./src/app/services/configuration/configuration.service.ts ***!
      \*****************************************************************/

    /*! exports provided: ConfigurationService */

    /***/
    function rHPJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationService", function () {
        return ConfigurationService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var ConfigurationService = /*#__PURE__*/function () {
        function ConfigurationService(http) {
          _classCallCheck(this, ConfigurationService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl;
        }

        _createClass(ConfigurationService, [{
          key: "createBanque",
          value: function createBanque(data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.post(this.baseUrl + '/api/banque/create', data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getBanque",
          value: function getBanque(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.get(this.baseUrl + '/api/banque/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getAllBanques",
          value: function getAllBanques() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/banque', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateBanque",
          value: function updateBanque(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/banque/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteBanque",
          value: function deleteBanque(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http["delete"](this.baseUrl + '/api/banque/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          } ///////////////////////////////
          ///////// departement /////////

        }, {
          key: "createDepart",
          value: function createDepart(data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.post(this.baseUrl + '/api/departement/create', data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getDepart",
          value: function getDepart(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.get(this.baseUrl + '/api/departement/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getAllDeparts",
          value: function getAllDeparts() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/departement', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateDepart",
          value: function updateDepart(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.put(this.baseUrl + '/api/departement/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteDepart",
          value: function deleteDepart(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http["delete"](this.baseUrl + '/api/departement/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          } ///////////////////////////////
          ///////// Configuration /////////

        }, {
          key: "createConfig",
          value: function createConfig(data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            headers.append('Authorization', this.authToken);
            headers.append('Content-type', 'application/json');
            return this.http.post(this.baseUrl + '/api/configuration/create', data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "addConfig",
          value: function addConfig(id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            return this.http.put(this.baseUrl + '/api/configuration/addStruct' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getConfig",
          value: function getConfig() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/configuration', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getPostes",
          value: function getPostes() {
            this.loadToken();
            return this.http.get(this.baseUrl + '/api/configuration/postes', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "postnewPost",
          value: function postnewPost(id, data) {
            return this.http.put(this.baseUrl + '/api/configuration/postesupdate/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteposts",
          value: function deleteposts(data, id) {
            return this.http.put(this.baseUrl + '/api/configuration/postesdelate/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "updateConfig",
          value: function updateConfig(id, confid, data) {
            data.structId = confid;
            return this.http.put(this.baseUrl + '/api/configuration/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "deleteConfig",
          value: function deleteConfig(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            this.loadToken();
            return this.http["delete"](this.baseUrl + '/api/configuration/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getAllDepartsShared",
          value: function getAllDepartsShared() {
            return this.http.get(this.baseUrl + '/api/shared/departs', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getUsersShared",
          value: function getUsersShared() {
            return this.http.get(this.baseUrl + '/api/shared/users', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getPostesShared",
          value: function getPostesShared() {
            return this.http.get(this.baseUrl + '/api/shared/postes', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "getGroupesShared",
          value: function getGroupesShared() {
            return this.http.get(this.baseUrl + '/api/shared/groupes', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "finish",
          value: function finish(id, data) {
            return this.http.put(this.baseUrl + '/api/shared/finish/' + id, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-type', 'application/json')
            });
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            var token = localStorage.getItem('id_token');
            this.authToken = token;
          }
        }]);

        return ConfigurationService;
      }();

      ConfigurationService.ɵfac = function ConfigurationService_Factory(t) {
        return new (t || ConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ConfigurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ConfigurationService,
        factory: ConfigurationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
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

    },

    /***/
    "sTU/":
    /*!***********************************************!*\
      !*** ./src/app/services/auth/client.guard.ts ***!
      \***********************************************/

    /*! exports provided: ClientGuard */

    /***/
    function sTU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientGuard", function () {
        return ClientGuard;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "9ans");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jwt-decode */
      "BOF4");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);

      var ClientGuard = /*#__PURE__*/function () {
        function ClientGuard(authservice, router) {
          _classCallCheck(this, ClientGuard);

          this.authservice = authservice;
          this.router = router;
        }

        _createClass(ClientGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var token = localStorage.getItem('id_token');
            var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);

            if (token && this.authservice.loggedIn()) {
              if (tokenPayload.isClient) {
                return true;
              } else {
                this.router.navigate(['/dashboard']);
                return false;
              }
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return ClientGuard;
      }();

      ClientGuard.ɵfac = function ClientGuard_Factory(t) {
        return new (t || ClientGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ClientGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ClientGuard,
        factory: ClientGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tKmh":
    /*!********************************************************************!*\
      !*** ./src/app/dashbord-component/dashbord-component.component.ts ***!
      \********************************************************************/

    /*! exports provided: DashbordComponentComponent */

    /***/
    function tKmh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashbordComponentComponent", function () {
        return DashbordComponentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var DashbordComponentComponent = /*#__PURE__*/function () {
        function DashbordComponentComponent() {
          _classCallCheck(this, DashbordComponentComponent);
        }

        _createClass(DashbordComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashbordComponentComponent;
      }();

      DashbordComponentComponent.ɵfac = function DashbordComponentComponent_Factory(t) {
        return new (t || DashbordComponentComponent)();
      };

      DashbordComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashbordComponentComponent,
        selectors: [["app-dashbord-component"]],
        decls: 21,
        vars: 0,
        consts: [[1, "slide"], [1, "navithem"], [1, "iconcontenu"], [1, "material-icons", "iconecontainer"], [1, "iconecontainer"]],
        template: function DashbordComponentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "first items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "sacand items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "folder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "tird items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "forth items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " attach_money");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
        styles: [".slide[_ngcontent-%COMP%] {\n  padding: 0px;\n  transform: translate(-250px, 0);\n}\n\n.iconecontainer[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: #ff4519;\n  background: white;\n  padding: 10px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  transform: rotate(0deg);\n  text-align: center;\n  font-size: 20px;\n}\n\n.iconcontenu[_ngcontent-%COMP%] {\n  font-weight: 300;\n  color: white;\n}\n\n.navithem[_ngcontent-%COMP%] {\n  display: block;\n  margin: 5px;\n  background: rgba(32, 45, 89, 0.9);\n  width: 300px;\n  text-align: right;\n  padding: 10px;\n  border-radius: 10px;\n  transition: all 1.5s;\n}\n\n.navithem[_ngcontent-%COMP%]:hover {\n  transform: translate(120px, 0);\n  background: #ff4519;\n  transition: all 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvcmQtY29tcG9uZW50L2Rhc2hib3JkLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFHSiwrQkFBQTtBQUNBOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUdBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFFUSxnQkFBQTtFQUNBLFlBQUE7QUFBUjs7QUFHQTtFQUNJLGNBQUE7RUFDSixXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtBQUFBOztBQUNBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9yZC1jb21wb25lbnQvZGFzaGJvcmQtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRle1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNTBweCwwKTtcclxuLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNTBweCwwKTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1MHB4LDApO1xyXG59XHJcblxyXG4uaWNvbmVjb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmNDUxOTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaWNvbmNvbnRlbnUge1xyXG4gICAgICBcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdml0aGVte1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbm1hcmdpbjogNXB4O1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDMyLDQ1LDg5LDAuOSk7XHJcbndpZHRoOiAzMDBweDtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbnBhZGRpbmc6IDEwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEuNXM7XHJcbnRyYW5zaXRpb246IGFsbCAxLjVzO1xyXG4mOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwcHgsMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY0NTE5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbn1cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashbordComponentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashbord-component',
            templateUrl: './dashbord-component.component.html',
            styleUrls: ['./dashbord-component.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "u06s":
    /*!*****************************************!*\
      !*** ./src/app/services/validations.ts ***!
      \*****************************************/

    /*! exports provided: passValidation, emailValidation, cinValidation, ribValidation */

    /***/
    function u06s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "passValidation", function () {
        return passValidation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emailValidation", function () {
        return emailValidation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cinValidation", function () {
        return cinValidation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ribValidation", function () {
        return ribValidation;
      });

      function passValidation(control) {
        if (control && (control.value !== null || control.value !== undefined)) {
          var cpass = control.value;
          var pass = control.root.get('password');

          if (pass) {
            var passVal = pass.value;

            if (passVal != cpass) {
              return {
                isError: true
              };
            }
          }
        }

        return null;
      }

      function emailValidation(control) {
        if (control && (control.value !== null || control.value !== undefined)) {
          var regex = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

          if (!regex.test(control.value)) {
            return {
              isError: true
            };
          }
        }

        return null;
      }

      function cinValidation(control) {
        if (control && (control.value !== null || control.value !== undefined)) {
          var regex = new RegExp(/^\d{4}-?\d{4}$/);

          if (!regex.test(control.value)) {
            return {
              isError: true
            };
          }
        }

        return null;
      }

      function ribValidation(control) {
        if (control && (control.value !== null || control.value !== undefined)) {
          var regex = new RegExp(/^\d{10}-?\d{10}$/);

          if (!regex.test(control.value)) {
            return {
              isError: true
            };
          }
        }

        return null;
      }
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function LoginComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_h3_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Authentification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ul_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pour plus d'informations, vous devez contacter votre administrateur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.error);
        }
      }

      function LoginComponent_ul_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.validation, " ");
        }
      }

      function LoginComponent_i_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 24);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authservice, router) {
          _classCallCheck(this, LoginComponent);

          this.authservice = authservice;
          this.router = router;
          this.loginIn = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isMobileMenu",
          value: function isMobileMenu() {
            if ($(window).width() > 991) {
              return false;
            }

            return true;
          }
        }, {
          key: "onLoginSubmit",
          value: function onLoginSubmit() {
            var _this46 = this;

            this.loginIn = true;
            var user = {
              email: this.email,
              password: this.password
            };

            if (!this.email || !this.password) {
              this.validation = 'Les champs email et mot de passe sont obligatoires';
              this.loginIn = false;
            } else {
              this.authservice.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                  _this46.authservice.sotreUserData(data.token, data.user);

                  console.log(data);

                  if (data.grade && data.grade == 100) {
                    _this46.router.navigate(['/dashboard']);
                  } else {
                    _this46.router.navigate(['/user-profile']);
                  }
                } else {
                  _this46.authservice.authenticateClient(user).subscribe(function (data) {
                    if (data.success) {
                      _this46.authservice.sotreUserData(data.token, data.client);

                      _this46.router.navigate(['/home']);
                    } else {
                      _this46.error = data.msg;
                    }
                  });
                }

                _this46.loginIn = false;
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 30,
        vars: 9,
        consts: [[1, "main-content", "bg"], [1, "container-fluid", "my"], [2, "height", "550px", 3, "className"], ["class", "col-md-6 my-auto", 4, "ngIf"], [1, "col-md-6", "my-auto"], [1, "text-center", 3, "className"], [1, "d-flex", "justify-content-center"], ["mat-card-avatar", "", 1, "iconlogin"], [1, "cardcolr", "card-header-info"], ["class", "text-white", 4, "ngIf"], ["style", "text-align: left;", "class", "error", 4, "ngIf"], [1, "card-body"], [3, "submit"], [1, "row", "justify-content-center"], [1, "example-full-width", "col-md-10"], ["matSuffix", ""], ["matInput", "", "placeholder", "Email", "type", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Mot de passe", "type", "password", "name", "password", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-login", "col-md-7", "btn-outline-primary", "mx-auto"], ["class", "fa fa-spinner fa-spin mr-2", 4, "ngIf"], [1, "clearfix"], ["src", "../../assets//img/xprged.jpg", "alt", "xpr-tilt", "loading", "lazy", 1, "w-100", "round-border"], [1, "text-white"], [1, "error", 2, "text-align", "left"], [1, "fa", "fa-spinner", "fa-spin", "mr-2"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_h3_10_Template, 2, 0, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_ul_11_Template, 5, 1, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_ul_12_Template, 3, 1, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_14_listener() {
              return ctx.onLoginSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "lock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_i_26_Template, 1, 0, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Se connecter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", !ctx.isMobileMenu() ? " row" : " row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileMenu());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", !ctx.isMobileMenu() ? "col-md-12 " : "col-md-12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validation && !ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validation && !ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
        styles: ["@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n.main-content[_ngcontent-%COMP%] {\n  margin-bottom: auto;\n}\n.round-border[_ngcontent-%COMP%] {\n  border-radius: 5%;\n}\n.mt-5[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.mt-13[_ngcontent-%COMP%] {\n  margin-top: 13%;\n}\n#grayOutDiv[_ngcontent-%COMP%] {\n  background-color: #fff;\n  opacity: 0.7;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 9999;\n}\n.flash-message[_ngcontent-%COMP%] {\n  z-index: 10000;\n  position: relative;\n}\n.error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: -15px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  color: #495057;\n}\n.bg[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #ffffff;\n}\n.cardcolr[_ngcontent-%COMP%] {\n  background-color: #EF543D;\n  padding: 10px;\n}\n.iconlogin[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: auto;\n  vertical-align: middle;\n  align-items: center;\n  font-size: 60px;\n  height: 60px;\n  width: 60px;\n  border: 1px solid;\n  margin: 20px;\n  border-radius: 50px;\n  background-image: linear-gradient(180deg, #F32304, #04174d);\n  color: white;\n}\n.underlineHover[_ngcontent-%COMP%] {\n  color: #EF543D;\n}\n.underlineHover[_ngcontent-%COMP%]:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #1E2D56;\n  content: \"\";\n  transition: width 0.2s;\n}\n.underlineHover[_ngcontent-%COMP%]:hover {\n  color: #0d0d0d;\n}\n.underlineHover[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFJUjtFQUNJLG1CQUFBO0FBRko7QUFJQTtFQUNJLGlCQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7QUFESjtBQUdBO0VBQ0ksZUFBQTtBQUFKO0FBR0E7RUFFSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQURKO0FBS0E7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQyxrQkFBQTtBQUpIO0FBT0E7RUFDSSxjQUFBO0FBSko7QUFPQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUpKO0FBU0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7QUFOSjtBQVFBO0VBQ0ksa0JBQUE7RUFDSixZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkRBQUE7RUFDQSxZQUFBO0FBTEE7QUFPQTtFQUVJLGNBQUE7QUFMSjtBQU9JO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUxKO0FBT0U7RUFDRSxjQUFBO0FBTEo7QUFNRztFQUNDLFdBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuXHJcblxyXG4ubWFpbi1jb250ZW50e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG4ucm91bmQtYm9yZGVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbn1cclxuXHJcbi5tdC01e1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLm10LTEze1xyXG4gICAgbWFyZ2luLXRvcDogMTMlO1xyXG59XHJcblxyXG4jZ3JheU91dERpdlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG5cclxuLmZsYXNoLW1lc3NhZ2Vcclxue1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uZXJyb3J7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcblxyXG5tYXQtaWNvbntcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4uYmd7XHJcbiAgICBoZWlnaHQ6MTAwdmg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbiBcclxufVxyXG5cclxuLmNhcmRjb2xye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGNTQzRDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG4uaWNvbmxvZ2lue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5tYXJnaW46IGF1dG87XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmZvbnQtc2l6ZTogNjBweDtcclxuaGVpZ2h0OiA2MHB4O1xyXG53aWR0aDogNjBweDtcclxuYm9yZGVyOiAxcHggc29saWQ7XHJcbm1hcmdpbjogMjBweDtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0YzMjMwNCwgIzA0MTc0ZCkgO1xyXG5jb2xvciA6IHdoaXRlIDtcclxufVxyXG4udW5kZXJsaW5lSG92ZXJcclxueyBcclxuICAgIGNvbG9yOiNFRjU0M0QgO1xyXG4gICAgXHJcbiAgICAmOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMkQ1NjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG4gICAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICY6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9fX1cclxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();

        if (window) {
          window.console.log = function () {};
        }
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map