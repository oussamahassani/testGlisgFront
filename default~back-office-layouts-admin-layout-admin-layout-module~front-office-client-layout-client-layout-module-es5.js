(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~back-office-layouts-admin-layout-admin-layout-module~front-office-client-layout-client-layout-module"], {
    /***/
    "Dh3D":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule, matSortAnimations */

    /***/
    function Dh3D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
        return MAT_SORT_HEADER_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
        return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSort", function () {
        return MatSort;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
        return MatSortHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
        return MatSortHeaderIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
        return MatSortModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
        return matSortAnimations;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/sort/sort-errors.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * \@docs-private
       * @param {?} id
       * @return {?}
       */


      var _c0 = ["mat-sort-header", ""];

      function MatSortHeader_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1._disableViewStateAnimation = true;
          })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3._disableViewStateAnimation = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
        }
      }

      var _c1 = ["*"];

      function getSortDuplicateSortableIdError(id) {
        return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
      }
      /**
       * \@docs-private
       * @return {?}
       */


      function getSortHeaderNotContainedWithinSortError() {
        return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
      }
      /**
       * \@docs-private
       * @return {?}
       */


      function getSortHeaderMissingIdError() {
        return Error("MatSortHeader must be provided with a unique id.");
      }
      /**
       * \@docs-private
       * @param {?} direction
       * @return {?}
       */


      function getSortInvalidDirectionError(direction) {
        return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/sort/sort.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Interface for a directive that holds sorting state consumed by `MatSortHeader`.
       * @record
       */


      function MatSortable() {}

      if (false) {}
      /**
       * The current sort state.
       * @record
       */


      function Sort() {}

      if (false) {} // Boilerplate for applying mixins to MatSort.

      /**
       * \@docs-private
       */


      var MatSortBase = function MatSortBase() {
        _classCallCheck(this, MatSortBase);
      };
      /** @type {?} */


      var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
      /**
       * Container for MatSortables to manage the sort state and provide default sort parameters.
       */


      var MatSort = /*#__PURE__*/function (_MatSortMixinBase2) {
        _inherits(MatSort, _MatSortMixinBase2);

        var _super = _createSuper(MatSort);

        function MatSort() {
          var _this;

          _classCallCheck(this, MatSort);

          _this = _super.apply(this, arguments);
          /**
           * Collection of all registered sortables that this directive manages.
           */

          _this.sortables = new Map();
          /**
           * Used to notify any child components listening to state changes.
           */

          _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /**
           * The direction to set when an MatSortable is initially sorted.
           * May be overriden by the MatSortable's sort start.
           */

          _this.start = 'asc';
          _this._direction = '';
          /**
           * Event emitted when the user changes either the active sort or sort direction.
           */

          _this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this;
        }
        /**
         * The sort direction of the currently active MatSortable.
         * @return {?}
         */


        _createClass(MatSort, [{
          key: "register",

          /**
           * Register function to be used by the contained MatSortables. Adds the MatSortable to the
           * collection of MatSortables.
           * @param {?} sortable
           * @return {?}
           */
          value: function register(sortable) {
            if (!sortable.id) {
              throw getSortHeaderMissingIdError();
            }

            if (this.sortables.has(sortable.id)) {
              throw getSortDuplicateSortableIdError(sortable.id);
            }

            this.sortables.set(sortable.id, sortable);
          }
          /**
           * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
           * collection of contained MatSortables.
           * @param {?} sortable
           * @return {?}
           */

        }, {
          key: "deregister",
          value: function deregister(sortable) {
            this.sortables["delete"](sortable.id);
          }
          /**
           * Sets the active sort id and determines the new sort direction.
           * @param {?} sortable
           * @return {?}
           */

        }, {
          key: "sort",
          value: function sort(sortable) {
            if (this.active != sortable.id) {
              this.active = sortable.id;
              this.direction = sortable.start ? sortable.start : this.start;
            } else {
              this.direction = this.getNextSortDirection(sortable);
            }

            this.sortChange.emit({
              active: this.active,
              direction: this.direction
            });
          }
          /**
           * Returns the next sort direction of the active sortable, checking for potential overrides.
           * @param {?} sortable
           * @return {?}
           */

        }, {
          key: "getNextSortDirection",
          value: function getNextSortDirection(sortable) {
            if (!sortable) {
              return '';
            } // Get the sort direction cycle with the potential sortable overrides.

            /** @type {?} */


            var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
            /** @type {?} */

            var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

            /** @type {?} */

            var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

            if (nextDirectionIndex >= sortDirectionCycle.length) {
              nextDirectionIndex = 0;
            }

            return sortDirectionCycle[nextDirectionIndex];
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._markInitialized();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          }
          /**
           * @param {?} direction
           * @return {?}
           */
          ,
          set: function set(direction) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
              throw getSortInvalidDirectionError(direction);
            }

            this._direction = direction;
          }
          /**
           * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
           * May be overriden by the MatSortable's disable clear input.
           * @return {?}
           */

        }, {
          key: "disableClear",
          get: function get() {
            return this._disableClear;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
          }
        }]);

        return MatSort;
      }(_MatSortMixinBase);

      MatSort.ɵfac = function MatSort_Factory(t) {
        return ɵMatSort_BaseFactory(t || MatSort);
      };

      MatSort.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatSort,
        selectors: [["", "matSort", ""]],
        hostAttrs: [1, "mat-sort"],
        inputs: {
          disabled: ["matSortDisabled", "disabled"],
          start: ["matSortStart", "start"],
          direction: ["matSortDirection", "direction"],
          disableClear: ["matSortDisableClear", "disableClear"],
          active: ["matSortActive", "active"]
        },
        outputs: {
          sortChange: "matSortChange"
        },
        exportAs: ["matSort"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      MatSort.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortActive']
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortStart']
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortDirection']
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortDisableClear']
        }],
        sortChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['matSortChange']
        }]
      };

      var ɵMatSort_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSort);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSort, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matSort]',
            exportAs: 'matSort',
            host: {
              'class': 'mat-sort'
            },
            inputs: ['disabled: matSortDisabled']
          }]
        }], null, {
          start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortStart']
          }],
          sortChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['matSortChange']
          }],
          direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDirection']
          }],
          disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDisableClear']
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortActive']
          }]
        });
      })();

      if (false) {}
      /**
       * Returns the sort direction cycle to use given the provided parameters of order and clear.
       * @param {?} start
       * @param {?} disableClear
       * @return {?}
       */


      function getSortDirectionCycle(start, disableClear) {
        /** @type {?} */
        var sortOrder = ['asc', 'desc'];

        if (start == 'desc') {
          sortOrder.reverse();
        }

        if (!disableClear) {
          sortOrder.push('');
        }

        return sortOrder;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/sort/sort-animations.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
      /**
       * Animations used by MatSort.
       * \@docs-private
       * @type {?}
       */

      var matSortAnimations = {
        /**
         * Animation that moves the sort indicator.
         */
        indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(0px)'
        })), // 10px is the height of the sort indicator, minus the width of the pointers
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(10px)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /**
         * Animation that rotates the left pointer of the indicator based on the sorting direction.
         */
        leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'rotate(-45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'rotate(45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /**
         * Animation that rotates the right pointer of the indicator based on the sorting direction.
         */
        rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'rotate(45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'rotate(-45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /**
         * Animation that controls the arrow opacity.
         */
        arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('arrowOpacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          opacity: .54
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          opacity: 0
        })), // Transition between all states except for immediate transitions
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /**
         * Animation for the translation of the arrow as a whole. States are separated into two
         * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
         * peek, and active. The other states define a specific animation (source-to-destination)
         * and are determined as a function of their prev user-perceived state and what the next state
         * should be.
         */
        arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('arrowPosition', [// Hidden Above => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(-25%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Below
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(25%)'
        })]))), // Hidden Below => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(25%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Above
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(-25%)'
        })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(-25%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(25%)'
        }))]),

        /**
         * Necessary trigger that calls animate on children animations.
         */
        allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animateChild"])(), {
          optional: true
        })])])
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/sort/sort-header-intl.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
       * include it in a custom provider.
       */

      var MatSortHeaderIntl = function MatSortHeaderIntl() {
        _classCallCheck(this, MatSortHeaderIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * ARIA label for the sorting button.
         */

        this.sortButtonLabel =
        /**
        * @param {?} id
        * @return {?}
        */
        function (id) {
          return "Change sorting for ".concat(id);
        };
      };

      MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
        return new (t || MatSortHeaderIntl)();
      };
      /** @nocollapse */


      MatSortHeaderIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MatSortHeaderIntl_Factory() {
          return new MatSortHeaderIntl();
        },
        token: MatSortHeaderIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * \@docs-private
       * @param {?} parentIntl
       * @return {?}
       */


      function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatSortHeaderIntl();
      }
      /**
       * \@docs-private
       * @type {?}
       */


      var MAT_SORT_HEADER_INTL_PROVIDER = {
        // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
        provide: MatSortHeaderIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatSortHeaderIntl]],
        useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/sort/sort-header.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Boilerplate for applying mixins to the sort header.

      /**
       * \@docs-private
       */

      var MatSortHeaderBase = function MatSortHeaderBase() {
        _classCallCheck(this, MatSortHeaderBase);
      };
      /** @type {?} */


      var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
      /**
       * States describing the arrow's animated position (animating fromState to toState).
       * If the fromState is not defined, there will be no animated transition to the toState.
       * \@docs-private
       * @record
       */


      function ArrowViewStateTransition() {}

      if (false) {}
      /**
       * Column definition associated with a `MatSortHeader`.
       * @record
       */


      function MatSortHeaderColumnDef() {}

      if (false) {}
      /**
       * Applies sorting behavior (click to change sort) and styles to an element, including an
       * arrow to display the current sort direction.
       *
       * Must be provided with an id and contained within a parent MatSort directive.
       *
       * If used on header cells in a CdkTable, it will automatically default its id from its containing
       * column definition.
       */


      var MatSortHeader = /*#__PURE__*/function (_MatSortHeaderMixinBa) {
        _inherits(MatSortHeader, _MatSortHeaderMixinBa);

        var _super2 = _createSuper(MatSortHeader);

        /**
         * @param {?} _intl
         * @param {?} changeDetectorRef
         * @param {?} _sort
         * @param {?} _columnDef
         * @param {?=} _focusMonitor
         * @param {?=} _elementRef
         */
        function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef) {
          var _this2;

          _classCallCheck(this, MatSortHeader);

          // Note that we use a string token for the `_columnDef`, because the value is provided both by
          // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
          // and we want to avoid having the sort header depending on the CDK table because
          // of this single reference.
          _this2 = _super2.call(this);
          _this2._intl = _intl;
          _this2._sort = _sort;
          _this2._columnDef = _columnDef;
          _this2._focusMonitor = _focusMonitor;
          _this2._elementRef = _elementRef;
          /**
           * Flag set to true when the indicator should be displayed while the sort is not active. Used to
           * provide an affordance that the header is sortable by showing on focus and hover.
           */

          _this2._showIndicatorHint = false;
          /**
           * The direction the arrow should be facing according to the current state.
           */

          _this2._arrowDirection = '';
          /**
           * Whether the view state animation should show the transition between the `from` and `to` states.
           */

          _this2._disableViewStateAnimation = false;
          /**
           * Sets the position of the arrow that displays when sorted.
           */

          _this2.arrowPosition = 'after';

          if (!_sort) {
            throw getSortHeaderNotContainedWithinSortError();
          }

          _this2._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this2._isSorted()) {
              _this2._updateArrowDirection();
            } // If this header was recently active and now no longer sorted, animate away the arrow.


            if (!_this2._isSorted() && _this2._viewState && _this2._viewState.toState === 'active') {
              _this2._disableViewStateAnimation = false;

              _this2._setAnimationTransitionState({
                fromState: 'active',
                toState: _this2._arrowDirection
              });
            }

            changeDetectorRef.markForCheck();
          });

          if (_focusMonitor && _elementRef) {
            // We use the focus monitor because we also want to style
            // things differently based on the focus origin.
            _focusMonitor.monitor(_elementRef, true).subscribe(
            /**
            * @param {?} origin
            * @return {?}
            */
            function (origin) {
              return _this2._setIndicatorHintVisible(!!origin);
            });
          }

          return _this2;
        }
        /**
         * Overrides the disable clear value of the containing MatSort for this MatSortable.
         * @return {?}
         */


        _createClass(MatSortHeader, [{
          key: "ngOnInit",

          /**
           * @return {?}
           */
          value: function ngOnInit() {
            if (!this.id && this._columnDef) {
              this.id = this._columnDef.name;
            } // Initialize the direction of the arrow and set the view state to be immediately that state.


            this._updateArrowDirection();

            this._setAnimationTransitionState({
              toState: this._isSorted() ? 'active' : this._arrowDirection
            });

            this._sort.register(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // @breaking-change 10.0.0 Remove null check for _focusMonitor and _elementRef.
            if (this._focusMonitor && this._elementRef) {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }

            this._sort.deregister(this);

            this._rerenderSubscription.unsubscribe();
          }
          /**
           * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
           * user showing what the active sort will become. If set to false, the arrow will fade away.
           * @param {?} visible
           * @return {?}
           */

        }, {
          key: "_setIndicatorHintVisible",
          value: function _setIndicatorHintVisible(visible) {
            // No-op if the sort header is disabled - should not make the hint visible.
            if (this._isDisabled() && visible) {
              return;
            }

            this._showIndicatorHint = visible;

            if (!this._isSorted()) {
              this._updateArrowDirection();

              if (this._showIndicatorHint) {
                this._setAnimationTransitionState({
                  fromState: this._arrowDirection,
                  toState: 'hint'
                });
              } else {
                this._setAnimationTransitionState({
                  fromState: 'hint',
                  toState: this._arrowDirection
                });
              }
            }
          }
          /**
           * Sets the animation transition view state for the arrow's position and opacity. If the
           * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
           * no animation appears.
           * @param {?} viewState
           * @return {?}
           */

        }, {
          key: "_setAnimationTransitionState",
          value: function _setAnimationTransitionState(viewState) {
            this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
            // remove the fromState so that it jumps right to the toState.

            if (this._disableViewStateAnimation) {
              this._viewState = {
                toState: viewState.toState
              };
            }
          }
          /**
           * Triggers the sort on this sort header and removes the indicator hint.
           * @return {?}
           */

        }, {
          key: "_handleClick",
          value: function _handleClick() {
            if (this._isDisabled()) {
              return;
            }

            this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


            if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
              this._disableViewStateAnimation = true;
            } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
            // the direction it is facing.

            /** @type {?} */


            var viewState = this._isSorted() ? {
              fromState: this._arrowDirection,
              toState: 'active'
            } : {
              fromState: 'active',
              toState: this._arrowDirection
            };

            this._setAnimationTransitionState(viewState);

            this._showIndicatorHint = false;
          }
          /**
           * Whether this MatSortHeader is currently sorted in either ascending or descending order.
           * @return {?}
           */

        }, {
          key: "_isSorted",
          value: function _isSorted() {
            return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
          }
          /**
           * Returns the animation state for the arrow direction (indicator and pointers).
           * @return {?}
           */

        }, {
          key: "_getArrowDirectionState",
          value: function _getArrowDirectionState() {
            return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
          }
          /**
           * Returns the arrow position state (opacity, translation).
           * @return {?}
           */

        }, {
          key: "_getArrowViewState",
          value: function _getArrowViewState() {
            /** @type {?} */
            var fromState = this._viewState.fromState;
            return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
          }
          /**
           * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
           * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
           * active sorted direction. The reason this is updated through a function is because the direction
           * should only be changed at specific times - when deactivated but the hint is displayed and when
           * the sort is active and the direction changes. Otherwise the arrow's direction should linger
           * in cases such as the sort becoming deactivated but we want to animate the arrow away while
           * preserving its direction, even though the next sort direction is actually different and should
           * only be changed once the arrow displays again (hint or activation).
           * @return {?}
           */

        }, {
          key: "_updateArrowDirection",
          value: function _updateArrowDirection() {
            this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_isDisabled",
          value: function _isDisabled() {
            return this._sort.disabled || this.disabled;
          }
          /**
           * Gets the aria-sort attribute that should be applied to this sort header. If this header
           * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
           * says that the aria-sort property should only be present on one header at a time, so removing
           * ensures this is true.
           * @return {?}
           */

        }, {
          key: "_getAriaSortAttribute",
          value: function _getAriaSortAttribute() {
            if (!this._isSorted()) {
              return null;
            }

            return this._sort.direction == 'asc' ? 'ascending' : 'descending';
          }
          /**
           * Whether the arrow inside the sort header should be rendered.
           * @return {?}
           */

        }, {
          key: "_renderArrow",
          value: function _renderArrow() {
            return !this._isDisabled() || this._isSorted();
          }
        }, {
          key: "disableClear",
          get: function get() {
            return this._disableClear;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
          }
        }]);

        return MatSortHeader;
      }(_MatSortHeaderMixinBase);

      MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
        return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatSortHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSortHeader,
        selectors: [["", "mat-sort-header", ""]],
        hostAttrs: [1, "mat-sort-header"],
        hostVars: 3,
        hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
              return ctx._handleClick();
            })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(true);
            })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(false);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
          }
        },
        inputs: {
          disabled: "disabled",
          arrowPosition: "arrowPosition",
          disableClear: "disableClear",
          id: ["mat-sort-header", "id"],
          start: "start"
        },
        exportAs: ["matSortHeader"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 7,
        consts: [[1, "mat-sort-header-container"], ["type", "button", 1, "mat-sort-header-button", "mat-focus-indicator"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
        template: function MatSortHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx._isDisabled() || null)("aria-label", ctx._intl.sortButtonLabel(ctx.id));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor;position:relative}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-button,[mat-sort-header].cdk-program-focused .mat-sort-header-button{border-bottom:solid 1px currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],
        encapsulation: 2,
        data: {
          animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
        },
        changeDetection: 0
      });
      /** @nocollapse */

      MatSortHeader.ctorParameters = function () {
        return [{
          type: MatSortHeaderIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: MatSort,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['MAT_SORT_HEADER_COLUMN_DEF']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      MatSortHeader.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['mat-sort-header']
        }],
        arrowPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[mat-sort-header]',
            exportAs: 'matSortHeader',
            template: "<div class=\"mat-sort-header-container\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\">\n  <button class=\"mat-sort-header-button mat-focus-indicator\" type=\"button\"\n          [attr.disabled]=\"_isDisabled() || null\"\n          [attr.aria-label]=\"_intl.sortButtonLabel(id)\">\n    <ng-content></ng-content>\n  </button>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
            host: {
              'class': 'mat-sort-header',
              '(click)': '_handleClick()',
              '(mouseenter)': '_setIndicatorHintVisible(true)',
              '(mouseleave)': '_setIndicatorHintVisible(false)',
              '[attr.aria-sort]': '_getAriaSortAttribute()',
              '[class.mat-sort-header-disabled]': '_isDisabled()'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled'],
            animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
            styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor;position:relative}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-button,[mat-sort-header].cdk-program-focused .mat-sort-header-button{border-bottom:solid 1px currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
          }]
        }], function () {
          return [{
            type: MatSortHeaderIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: MatSort,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['MAT_SORT_HEADER_COLUMN_DEF']
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          arrowPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mat-sort-header']
          }],
          start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/sort/sort-module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatSortModule = function MatSortModule() {
        _classCallCheck(this, MatSortModule);
      };

      MatSortModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatSortModule
      });
      MatSortModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatSortModule_Factory(t) {
          return new (t || MatSortModule)();
        },
        providers: [MAT_SORT_HEADER_INTL_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSortModule, {
          declarations: function declarations() {
            return [MatSort, MatSortHeader];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]];
          },
          exports: function exports() {
            return [MatSort, MatSortHeader];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
            exports: [MatSort, MatSortHeader],
            declarations: [MatSort, MatSortHeader],
            providers: [MAT_SORT_HEADER_INTL_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/sort/sort-direction.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/sort/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=sort.js.map

      /***/

    },

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
    "M9IT":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
      \***************************************************************************/

    /*! exports provided: MAT_PAGINATOR_DEFAULT_OPTIONS, MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent */

    /***/
    function M9IT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_DEFAULT_OPTIONS", function () {
        return MAT_PAGINATOR_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () {
        return MAT_PAGINATOR_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () {
        return MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginator", function () {
        return MatPaginator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () {
        return MatPaginatorIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () {
        return MatPaginatorModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageEvent", function () {
        return PageEvent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/paginator/paginator-intl.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
       * include it in a custom provider
       */


      function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pageSizeOption_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pageSizeOption_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
        }
      }

      function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7._changePageSize($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
        }
      }

      function MatPaginator_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.pageSize);
        }
      }

      function MatPaginator_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 5, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
        }
      }

      function MatPaginator_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.firstPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
        }
      }

      function MatPaginator_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.lastPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
        }
      }

      var MatPaginatorIntl = function MatPaginatorIntl() {
        _classCallCheck(this, MatPaginatorIntl);

        /**
         * Stream to emit from when labels are changed. Use this to notify components when the labels have
         * changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * A label for the page size selector.
         */

        this.itemsPerPageLabel = 'Items per page:';
        /**
         * A label for the button that increments the current page.
         */

        this.nextPageLabel = 'Next page';
        /**
         * A label for the button that decrements the current page.
         */

        this.previousPageLabel = 'Previous page';
        /**
         * A label for the button that moves to the first page.
         */

        this.firstPageLabel = 'First page';
        /**
         * A label for the button that moves to the last page.
         */

        this.lastPageLabel = 'Last page';
        /**
         * A label for the range of items within the current page and the length of the whole list.
         */

        this.getRangeLabel =
        /**
        * @param {?} page
        * @param {?} pageSize
        * @param {?} length
        * @return {?}
        */
        function (page, pageSize, length) {
          if (length == 0 || pageSize == 0) {
            return "0 of ".concat(length);
          }

          length = Math.max(length, 0);
          /** @type {?} */

          var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

          /** @type {?} */

          var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
          return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
        };
      };

      MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
        return new (t || MatPaginatorIntl)();
      };
      /** @nocollapse */


      MatPaginatorIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function MatPaginatorIntl_Factory() {
          return new MatPaginatorIntl();
        },
        token: MatPaginatorIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginatorIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * \@docs-private
       * @param {?} parentIntl
       * @return {?}
       */


      function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatPaginatorIntl();
      }
      /**
       * \@docs-private
       * @type {?}
       */


      var MAT_PAGINATOR_INTL_PROVIDER = {
        // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
        provide: MatPaginatorIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatPaginatorIntl]],
        useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/paginator/paginator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The default page size if there is no page size and there are no provided page size options.
       * @type {?}
       */

      var DEFAULT_PAGE_SIZE = 50;
      /**
       * Change event object that is emitted when the user selects a
       * different page size or navigates to another page.
       */

      var PageEvent = function PageEvent() {
        _classCallCheck(this, PageEvent);
      };

      if (false) {}
      /**
       * Object that can be used to configure the default options for the paginator module.
       * @record
       */


      function MatPaginatorDefaultOptions() {}

      if (false) {}
      /**
       * Injection token that can be used to provide the default options for the paginator module.
       * @type {?}
       */


      var MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatPaginator.

      /**
       * \@docs-private
       */

      var MatPaginatorBase = function MatPaginatorBase() {
        _classCallCheck(this, MatPaginatorBase);
      };
      /** @type {?} */


      var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinInitialized"])(MatPaginatorBase));
      /**
       * Component to provide navigation between paged information. Displays the size of the current
       * page, user-selectable options to change that size, what items are being shown, and
       * navigational button to go to the previous or next page.
       */


      var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
        _inherits(MatPaginator, _MatPaginatorBase2);

        var _super3 = _createSuper(MatPaginator);

        /**
         * @param {?} _intl
         * @param {?} _changeDetectorRef
         * @param {?=} defaults
         */
        function MatPaginator(_intl, _changeDetectorRef, defaults) {
          var _this3;

          _classCallCheck(this, MatPaginator);

          _this3 = _super3.call(this);
          _this3._intl = _intl;
          _this3._changeDetectorRef = _changeDetectorRef;
          _this3._pageIndex = 0;
          _this3._length = 0;
          _this3._pageSizeOptions = [];
          _this3._hidePageSize = false;
          _this3._showFirstLastButtons = false;
          /**
           * Event emitted when the paginator changes the page size or page index.
           */

          _this3.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this3._intlChanges = _intl.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this3._changeDetectorRef.markForCheck();
          });

          if (defaults) {
            var pageSize = defaults.pageSize,
                pageSizeOptions = defaults.pageSizeOptions,
                hidePageSize = defaults.hidePageSize,
                showFirstLastButtons = defaults.showFirstLastButtons;

            if (pageSize != null) {
              _this3._pageSize = pageSize;
            }

            if (pageSizeOptions != null) {
              _this3._pageSizeOptions = pageSizeOptions;
            }

            if (hidePageSize != null) {
              _this3._hidePageSize = hidePageSize;
            }

            if (showFirstLastButtons != null) {
              _this3._showFirstLastButtons = showFirstLastButtons;
            }
          }

          return _this3;
        }
        /**
         * The zero-based page index of the displayed list of items. Defaulted to 0.
         * @return {?}
         */


        _createClass(MatPaginator, [{
          key: "ngOnInit",

          /**
           * @return {?}
           */
          value: function ngOnInit() {
            this._initialized = true;

            this._updateDisplayedPageSizeOptions();

            this._markInitialized();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlChanges.unsubscribe();
          }
          /**
           * Advances to the next page if it exists.
           * @return {?}
           */

        }, {
          key: "nextPage",
          value: function nextPage() {
            if (!this.hasNextPage()) {
              return;
            }
            /** @type {?} */


            var previousPageIndex = this.pageIndex;
            this.pageIndex++;

            this._emitPageEvent(previousPageIndex);
          }
          /**
           * Move back to the previous page if it exists.
           * @return {?}
           */

        }, {
          key: "previousPage",
          value: function previousPage() {
            if (!this.hasPreviousPage()) {
              return;
            }
            /** @type {?} */


            var previousPageIndex = this.pageIndex;
            this.pageIndex--;

            this._emitPageEvent(previousPageIndex);
          }
          /**
           * Move to the first page if not already there.
           * @return {?}
           */

        }, {
          key: "firstPage",
          value: function firstPage() {
            // hasPreviousPage being false implies at the start
            if (!this.hasPreviousPage()) {
              return;
            }
            /** @type {?} */


            var previousPageIndex = this.pageIndex;
            this.pageIndex = 0;

            this._emitPageEvent(previousPageIndex);
          }
          /**
           * Move to the last page if not already there.
           * @return {?}
           */

        }, {
          key: "lastPage",
          value: function lastPage() {
            // hasNextPage being false implies at the end
            if (!this.hasNextPage()) {
              return;
            }
            /** @type {?} */


            var previousPageIndex = this.pageIndex;
            this.pageIndex = this.getNumberOfPages() - 1;

            this._emitPageEvent(previousPageIndex);
          }
          /**
           * Whether there is a previous page.
           * @return {?}
           */

        }, {
          key: "hasPreviousPage",
          value: function hasPreviousPage() {
            return this.pageIndex >= 1 && this.pageSize != 0;
          }
          /**
           * Whether there is a next page.
           * @return {?}
           */

        }, {
          key: "hasNextPage",
          value: function hasNextPage() {
            /** @type {?} */
            var maxPageIndex = this.getNumberOfPages() - 1;
            return this.pageIndex < maxPageIndex && this.pageSize != 0;
          }
          /**
           * Calculate the number of pages
           * @return {?}
           */

        }, {
          key: "getNumberOfPages",
          value: function getNumberOfPages() {
            if (!this.pageSize) {
              return 0;
            }

            return Math.ceil(this.length / this.pageSize);
          }
          /**
           * Changes the page size so that the first item displayed on the page will still be
           * displayed using the new page size.
           *
           * For example, if the page size is 10 and on the second page (items indexed 10-19) then
           * switching so that the page size is 5 will set the third page as the current page so
           * that the 10th item will still be displayed.
           * @param {?} pageSize
           * @return {?}
           */

        }, {
          key: "_changePageSize",
          value: function _changePageSize(pageSize) {
            // Current page needs to be updated to reflect the new page size. Navigate to the page
            // containing the previous page's first item.

            /** @type {?} */
            var startIndex = this.pageIndex * this.pageSize;
            /** @type {?} */

            var previousPageIndex = this.pageIndex;
            this.pageIndex = Math.floor(startIndex / pageSize) || 0;
            this.pageSize = pageSize;

            this._emitPageEvent(previousPageIndex);
          }
          /**
           * Checks whether the buttons for going forwards should be disabled.
           * @return {?}
           */

        }, {
          key: "_nextButtonsDisabled",
          value: function _nextButtonsDisabled() {
            return this.disabled || !this.hasNextPage();
          }
          /**
           * Checks whether the buttons for going backwards should be disabled.
           * @return {?}
           */

        }, {
          key: "_previousButtonsDisabled",
          value: function _previousButtonsDisabled() {
            return this.disabled || !this.hasPreviousPage();
          }
          /**
           * Updates the list of page size options to display to the user. Includes making sure that
           * the page size is an option and that the list is sorted.
           * @private
           * @return {?}
           */

        }, {
          key: "_updateDisplayedPageSizeOptions",
          value: function _updateDisplayedPageSizeOptions() {
            if (!this._initialized) {
              return;
            } // If no page size is provided, use the first page size option or the default page size.


            if (!this.pageSize) {
              this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
            }

            this._displayedPageSizeOptions = this.pageSizeOptions.slice();

            if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
              this._displayedPageSizeOptions.push(this.pageSize);
            } // Sort the numbers using a number-specific sort function.


            this._displayedPageSizeOptions.sort(
            /**
            * @param {?} a
            * @param {?} b
            * @return {?}
            */
            function (a, b) {
              return a - b;
            });

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Emits an event notifying that a change of the paginator's properties has been triggered.
           * @private
           * @param {?} previousPageIndex
           * @return {?}
           */

        }, {
          key: "_emitPageEvent",
          value: function _emitPageEvent(previousPageIndex) {
            this.page.emit({
              previousPageIndex: previousPageIndex,
              pageIndex: this.pageIndex,
              pageSize: this.pageSize,
              length: this.length
            });
          }
        }, {
          key: "pageIndex",
          get: function get() {
            return this._pageIndex;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

            this._changeDetectorRef.markForCheck();
          }
          /**
           * The length of the total number of items that are being paginated. Defaulted to 0.
           * @return {?}
           */

        }, {
          key: "length",
          get: function get() {
            return this._length;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Number of items to display on a page. By default set to 50.
           * @return {?}
           */

        }, {
          key: "pageSize",
          get: function get() {
            return this._pageSize;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

            this._updateDisplayedPageSizeOptions();
          }
          /**
           * The set of provided page size options to display to the user.
           * @return {?}
           */

        }, {
          key: "pageSizeOptions",
          get: function get() {
            return this._pageSizeOptions;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._pageSizeOptions = (value || []).map(
            /**
            * @param {?} p
            * @return {?}
            */
            function (p) {
              return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(p);
            });

            this._updateDisplayedPageSizeOptions();
          }
          /**
           * Whether to hide the page size selection UI from the user.
           * @return {?}
           */

        }, {
          key: "hidePageSize",
          get: function get() {
            return this._hidePageSize;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether to show the first/last buttons UI to the user.
           * @return {?}
           */

        }, {
          key: "showFirstLastButtons",
          get: function get() {
            return this._showFirstLastButtons;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatPaginator;
      }(_MatPaginatorBase);

      MatPaginator.ɵfac = function MatPaginator_Factory(t) {
        return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
      };

      MatPaginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatPaginator,
        selectors: [["mat-paginator"]],
        hostAttrs: [1, "mat-paginator"],
        inputs: {
          disabled: "disabled",
          pageIndex: "pageIndex",
          length: "length",
          pageSize: "pageSize",
          pageSizeOptions: "pageSizeOptions",
          hidePageSize: "hidePageSize",
          showFirstLastButtons: "showFirstLastButtons",
          color: "color"
        },
        outputs: {
          page: "page"
        },
        exportAs: ["matPaginator"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 14,
        consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
        template: function MatPaginator_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
              return ctx.previousPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
              return ctx.nextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
        styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      MatPaginator.ctorParameters = function () {
        return [{
          type: MatPaginatorIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatPaginator.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        length: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hidePageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFirstLastButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-paginator',
            exportAs: 'matPaginator',
            template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
            inputs: ['disabled'],
            host: {
              'class': 'mat-paginator'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
          }]
        }], function () {
          return [{
            type: MatPaginatorIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          hidePageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          showFirstLastButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/paginator/paginator-module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatPaginatorModule = function MatPaginatorModule() {
        _classCallCheck(this, MatPaginatorModule);
      };

      MatPaginatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatPaginatorModule
      });
      MatPaginatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatPaginatorModule_Factory(t) {
          return new (t || MatPaginatorModule)();
        },
        providers: [MAT_PAGINATOR_INTL_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatPaginatorModule, {
          declarations: function declarations() {
            return [MatPaginator];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]];
          },
          exports: function exports() {
            return [MatPaginator];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginatorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]],
            exports: [MatPaginator],
            declarations: [MatPaginator],
            providers: [MAT_PAGINATOR_INTL_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/paginator/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=paginator.js.map

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

    },

    /***/
    "l0rg":
    /*!************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/toolbar.js ***!
      \************************************************************/

    /*! exports provided: MatToolbar, MatToolbarModule, MatToolbarRow, throwToolbarMixedModesError */

    /***/
    function l0rg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbar", function () {
        return MatToolbar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function () {
        return MatToolbarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function () {
        return MatToolbarRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function () {
        return throwToolbarMixedModesError;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/toolbar/toolbar.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Boilerplate for applying mixins to MatToolbar.

      /**
       * \@docs-private
       */


      var _c0 = ["*", [["mat-toolbar-row"]]];
      var _c1 = ["*", "mat-toolbar-row"];

      var MatToolbarBase =
      /**
       * @param {?} _elementRef
       */
      function MatToolbarBase(_elementRef) {
        _classCallCheck(this, MatToolbarBase);

        this._elementRef = _elementRef;
      };

      if (false) {}
      /** @type {?} */


      var _MatToolbarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatToolbarBase);

      var MatToolbarRow = function MatToolbarRow() {
        _classCallCheck(this, MatToolbarRow);
      };

      MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
        return new (t || MatToolbarRow)();
      };

      MatToolbarRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatToolbarRow,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-toolbar-row',
            exportAs: 'matToolbarRow',
            host: {
              'class': 'mat-toolbar-row'
            }
          }]
        }], null, null);
      })();

      var MatToolbar = /*#__PURE__*/function (_MatToolbarMixinBase2) {
        _inherits(MatToolbar, _MatToolbarMixinBase2);

        var _super4 = _createSuper(MatToolbar);

        /**
         * @param {?} elementRef
         * @param {?} _platform
         * @param {?=} document
         */
        function MatToolbar(elementRef, _platform, document) {
          var _this4;

          _classCallCheck(this, MatToolbar);

          _this4 = _super4.call(this, elementRef);
          _this4._platform = _platform; // TODO: make the document a required param when doing breaking changes.

          _this4._document = document;
          return _this4;
        }
        /**
         * @return {?}
         */


        _createClass(MatToolbar, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this5 = this;

            if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || !this._platform.isBrowser) {
              return;
            }

            this._checkToolbarMixedModes();

            this._toolbarRows.changes.subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this5._checkToolbarMixedModes();
            });
          }
          /**
           * Throws an exception when developers are attempting to combine the different toolbar row modes.
           * @private
           * @return {?}
           */

        }, {
          key: "_checkToolbarMixedModes",
          value: function _checkToolbarMixedModes() {
            var _this6 = this;

            if (!this._toolbarRows.length) {
              return;
            } // Check if there are any other DOM nodes that can display content but aren't inside of
            // a <mat-toolbar-row> element.

            /** @type {?} */


            var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return !(node.classList && node.classList.contains('mat-toolbar-row'));
            }).filter(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return node.nodeType !== (_this6._document ? _this6._document.COMMENT_NODE : 8);
            }).some(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return !!(node.textContent && node.textContent.trim());
            });

            if (isCombinedUsage) {
              throwToolbarMixedModesError();
            }
          }
        }]);

        return MatToolbar;
      }(_MatToolbarMixinBase);

      MatToolbar.ɵfac = function MatToolbar_Factory(t) {
        return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      MatToolbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatToolbar,
        selectors: [["mat-toolbar"]],
        contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 4,
        hostBindings: function MatToolbar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matToolbar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatToolbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      MatToolbar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      MatToolbar.propDecorators = {
        _toolbarRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatToolbarRow, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-toolbar',
            exportAs: 'matToolbar',
            template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
            inputs: ['color'],
            host: {
              'class': 'mat-toolbar',
              '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
              '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          _toolbarRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatToolbarRow, {
              descendants: true
            }]
          }]
        });
      })();

      if (false) {}
      /**
       * Throws an exception when attempting to combine the different toolbar row modes.
       * \@docs-private
       * @return {?}
       */


      function throwToolbarMixedModesError() {
        throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/toolbar/toolbar-module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatToolbarModule = function MatToolbarModule() {
        _classCallCheck(this, MatToolbarModule);
      };

      MatToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatToolbarModule
      });
      MatToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatToolbarModule_Factory(t) {
          return new (t || MatToolbarModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatToolbarModule, {
          declarations: function declarations() {
            return [MatToolbar, MatToolbarRow];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatToolbar, MatToolbarRow]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/toolbar/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=toolbar.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~back-office-layouts-admin-layout-admin-layout-module~front-office-client-layout-client-layout-module-es5.js.map