webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UserForm.js":
/*!********************************!*\
  !*** ./components/UserForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Address */ "./components/Address.js");
/* harmony import */ var _components_Commute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Commute */ "./components/Commute.js");
/* harmony import */ var _components_Confirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Confirm */ "./components/Confirm.js");
/* harmony import */ var _components_Success__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Success */ "./components/Success.js");







var _jsxFileName = "/Users/inoue/Desktop/rally-next/components/UserForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var UserForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UserForm, _Component);

  function UserForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      step: 1,
      personalNum: "",
      personalName: "",
      addressNum: "",
      address1: "",
      address2: "",
      address3: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "nextStep", function () {
      var step = _this.state.step;

      _this.setState({
        step: step + 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "prevStep", function () {
      var step = _this.state.step;

      _this.setState({
        step: step - 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (input) {
      return function (e) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, input, e.target.value));
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserForm, [{
    key: "render",
    value: function render() {
      var step = this.state.step;
      var _this$state = this.state,
          personalNum = _this$state.personalNum,
          personalName = _this$state.personalName,
          addressNum = _this$state.addressNum,
          address1 = _this$state.address1,
          address2 = _this$state.address2,
          address3 = _this$state.address3,
          method = _this$state.method;
      var values = {
        personalNum: personalNum,
        personalName: personalName,
        addressNum: addressNum,
        address1: address1,
        address2: address2,
        address3: address3,
        method: method
      }; //step1-4の分岐

      switch (step) {
        case 1:
          return __jsx(_components_Address__WEBPACK_IMPORTED_MODULE_8__["default"], {
            nextStep: this.nextStep,
            handleChange: this.handleChange,
            values: values,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          });

        case 2:
          return __jsx(_components_Commute__WEBPACK_IMPORTED_MODULE_9__["default"], {
            nextStep: this.nextStep,
            handleChange: this.handleChange,
            values: values,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          });

        case 3:
          return __jsx(_components_Confirm__WEBPACK_IMPORTED_MODULE_10__["default"], {
            nextStep: this.nextStep,
            values: values,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          });

        case 4:
          return __jsx(_components_Success__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          });

        default:
          console.log('switch構文のテストです');
      }
    }
  }]);

  return UserForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.7b599afd5971a4fc7662.hot-update.js.map