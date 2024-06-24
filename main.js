/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./JS/Api.js":
/*!*******************!*\
  !*** ./JS/Api.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Api; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  return _createClass(Api, [{
    key: "_checkResponse",
    value: function _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Erro: ".concat(res.status));
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        headers: this._headers
      }).then(this._checkResponse).catch(function (err) {
        console.error("Erro ao buscar os cards iniciais:", err);
      });
    }
  }, {
    key: "createCard",
    value: function createCard(card) {
      return fetch("".concat(this._baseUrl, "/cards"), {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify(card)
      }).then(this._checkResponse).then(function (createdCard) {
        return createdCard;
      }).catch(function (err) {
        console.error("Erro ao criar o card:", err);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId), {
        headers: this._headers,
        method: "DELETE"
      }).then(this._checkResponse).catch(function (err) {
        console.error("Erro ao excluir o card:", err);
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(cardId), {
        headers: this._headers,
        method: 'PUT'
      }).then(this._checkResponse).catch(function (err) {
        console.error("Erro ao curtir o card:", err);
      });
    }
  }, {
    key: "unlikeCard",
    value: function unlikeCard(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(cardId), {
        headers: this._headers,
        method: 'DELETE'
      }).then(this._checkResponse).catch(function (err) {
        console.error("Erro ao descurtir o card:", err);
      });
    }
  }, {
    key: "getCardLikes",
    value: function getCardLikes(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId, "/likes"), {
        headers: this._headers
      }).then(this._checkResponse).catch(function (err) {
        console.error("Erro ao buscar os likes do card:", err);
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        headers: this._headers
      }).then(this._checkResponse).catch(function (err) {
        console.error("Erro ao buscar informações do usuário:", err);
      });
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(userInfo) {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(userInfo)
      }).then(this._checkResponse).catch(function (err) {
        console.error("Erro ao atualizar as informações do usuário:", err);
      });
    }
  }, {
    key: "updateUserAvatar",
    value: function updateUserAvatar(avatarUrl) {
      return fetch("".concat(this._baseUrl, "/users/me/avatar"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatarUrl
        })
      }).then(this._checkResponse).catch(function (err) {
        console.error("Erro ao atualizar o avatar do usuário:", err);
      });
    }
  }]);
}();


/***/ }),

/***/ "./JS/FormValidator.js":
/*!*****************************!*\
  !*** ./JS/FormValidator.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Validation; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Validation = /*#__PURE__*/function () {
  function Validation(config, formElement) {
    _classCallCheck(this, Validation);
    this._config = config;
    this._formElement = formElement;
    this._inputList = this._formElement.querySelectorAll(this._config.inputSelector);
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
  }
  return _createClass(Validation, [{
    key: "enableValidation",
    value: function enableValidation() {
      var _this = this;
      this._formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        _this._checkFormValidity();
      });
      this._inputList.forEach(function (input) {
        input.addEventListener('input', function () {
          _this._checkInputValidity(input);
          _this._checkFormValidity();
        });
      });
    }
  }, {
    key: "_checkFormValidity",
    value: function _checkFormValidity() {
      var isFormValid = true;
      this._inputList.forEach(function (input) {
        if (!input.checkValidity()) {
          isFormValid = false;
          // this._inputList.classList.toggle()
        }
      });
      if (!isFormValid) {
        this._submitButton.classList.add(this._config.buttonError);
      } else {
        this._submitButton.classList.remove(this._config.buttonError);
      }
      this._submitButton.disabled = !isFormValid;
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(input) {
      var isInputValid = input.checkValidity();
      var errorElement = input.nextElementSibling;
      if (isInputValid) {
        input.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = "";
      } else {
        input.classList.add(this._config.inputErrorClass);
        errorElement.textContent = input.validationMessage;
      }
    }
  }]);
}();


/***/ }),

/***/ "./JS/Popup.js":
/*!*********************!*\
  !*** ./JS/Popup.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    if (!popupSelector) {
      throw new Error("Popup selector is required!!");
    }
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
    this._isOpened = false;
  }
  return _createClass(Popup, [{
    key: "open",
    value: function open() {
      if (!this._isOpened) {
        document.addEventListener("keydown", this._handleEscClose);
        this._popup.classList.add("fade");
        this.setEventListeners();
        this._isOpened = true;
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (this._isOpened) {
        document.removeEventListener("keydown", this._handleEscClose);
        this._popup.classList.remove("fade");
        this.removeEventListeners();
        this._isOpened = false;
      }
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "_handleOutsideClick",
    value: function _handleOutsideClick(evt) {
      if (evt.target === this._popup) {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._popup.addEventListener("click", this._handleOutsideClick);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this._popup.removeEventListener("click", this._handleOutsideClick);
    }
  }]);
}();


/***/ }),

/***/ "./JS/PopupWithConfirmation.js":
/*!*************************************!*\
  !*** ./JS/PopupWithConfirmation.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithConfirmation; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./JS/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PopupWithConfirmation = /*#__PURE__*/function (_Popup) {
  function PopupWithConfirmation(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithConfirmation);
    _this = _callSuper(this, PopupWithConfirmation, [popupSelector]);
    _this._form = _this._popup.querySelector('.popup-confirm__form');
    _this._submitButton = _this._form.querySelector('.popup-confirm__delete-button');
    _this._handleFormSubmit = _this._handleFormSubmit.bind(_this);
    _this.setEventListeners();
    return _this;
  }
  _inherits(PopupWithConfirmation, _Popup);
  return _createClass(PopupWithConfirmation, [{
    key: "setSubmitAction",
    value: function setSubmitAction(action) {
      this._handleFormSubmit = action;
    }
  }, {
    key: "_handleFormSubmit",
    value: function _handleFormSubmit(evt) {
      evt.preventDefault();
      if (this._handleFormSubmit) {
        this._handleFormSubmit();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._submitButton.addEventListener('click', this._handleFormSubmit);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this._submitButton.removeEventListener('click', this._handleFormSubmit);
    }
  }]);
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./JS/PopupWithForm.js":
/*!*****************************!*\
  !*** ./JS/PopupWithForm.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./JS/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  function PopupWithForm(submitCallback, popupSelector, formSelector) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _callSuper(this, PopupWithForm, [popupSelector]);
    _this._formSelector = formSelector;
    _this._submitCallback = submitCallback;
    _this._formElement = _this._popup.querySelector(_this._formSelector);
    _this._submitHandler = _this._submitHandler.bind(_this);
    _this._formValues = {};
    return _this;
  }
  _inherits(PopupWithForm, _Popup);
  return _createClass(PopupWithForm, [{
    key: "open",
    value: function open() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "open", this).call(this);
      this._formElement.addEventListener("submit", this._submitHandler);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      if (this._formElement) {
        this._formElement.reset();
      }
      this._formElement.removeEventListener("submit", this._submitHandler);
    }
  }, {
    key: "_submitHandler",
    value: function _submitHandler(evt) {
      var _this2 = this;
      evt.preventDefault();
      var formData = this._getInputValues();
      this._submitCallback(formData);
      //delay para fechar
      setTimeout(function () {
        _this2.close();
      }, 2000);
    }
  }, {
    key: "_getInputValues",
    value: function _getInputValues() {
      var formData = new FormData(this._formElement);
      return Object.fromEntries(formData.entries());
    }
  }]);
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./JS/PopupWithImage.js":
/*!******************************!*\
  !*** ./JS/PopupWithImage.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./JS/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _callSuper(this, PopupWithImage, [popupSelector]);
    _this._imageElement = _this._popup.querySelector(".image__full");
    _this._descriptionElement = _this._popup.querySelector(".image__subtitle");
    return _this;
  }
  _inherits(PopupWithImage, _Popup);
  return _createClass(PopupWithImage, [{
    key: "_updateImage",
    value: function _updateImage(imageUrl, imageAlt) {
      this._imageElement.src = imageUrl;
      this._imageElement.alt = imageAlt;
    }
  }, {
    key: "_updateDescription",
    value: function _updateDescription(description) {
      this._descriptionElement.textContent = description;
    }
  }, {
    key: "_addFadeClass",
    value: function _addFadeClass() {
      this._popup.classList.add("fade");
    }
  }, {
    key: "open",
    value: function open(imageUrl, imageAlt, description) {
      this._updateImage(imageUrl, imageAlt);
      this._updateDescription(description);
      this._addFadeClass();
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./JS/Section.js":
/*!***********************!*\
  !*** ./JS/Section.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  return _createClass(Section, [{
    key: "rendererItems",
    value: function rendererItems() {
      var _this = this;
      this._items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.append(element);
    }
  }]);
}();


/***/ }),

/***/ "./JS/UserInfo.js":
/*!************************!*\
  !*** ./JS/UserInfo.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      descriptionSelector = _ref.descriptionSelector,
      avatarSelector = _ref.avatarSelector;
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }
  return _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._nameElement.textContent,
        description: this._descriptionElement.textContent,
        avatar: this._avatarElement.src
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        description = _ref2.description,
        avatar = _ref2.avatar;
      if (name) {
        this._nameElement.textContent = name;
      }
      if (description) {
        this._descriptionElement.textContent = description;
      }
      if (avatar) {
        this._avatarElement.src = avatar;
      }
    }
  }]);
}();


/***/ }),

/***/ "./JS/card.js":
/*!********************!*\
  !*** ./JS/card.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Card = /*#__PURE__*/function () {
  function Card(_ref) {
    var name = _ref.name,
      link = _ref.link,
      likes = _ref.likes,
      id = _ref.id,
      userId = _ref.userId,
      api = _ref.api,
      ownerId = _ref.ownerId,
      popupWithConfirmation = _ref.popupWithConfirmation;
    _classCallCheck(this, Card);
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._api = api;
    this._ownerId = ownerId;
    this._popupWithConfirmation = popupWithConfirmation;
    this._element = this._getTemplate();
  }
  return _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(".places_card_template").content.querySelector(".places__card").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      var cardImage = this._element.querySelector('.places__image');
      var cardTitle = this._element.querySelector('.places__title');
      var likeCount = this._element.querySelector('.places__like-counter');
      var likeButton = this._element.querySelector('.places__button');
      var buttonDelete = this._element.querySelector('.places__button_delete');
      cardImage.src = this._link;
      cardImage.alt = this._name;
      cardTitle.textContent = this._name;
      this._updateLikes(this._likes);
      likeCount.textContent = this._likes.length;
      this._element.setAttribute("data-card-id", this._id);

      // Verifique se o card pertence ao usuário atual para mostrar o botão de deletar
      if (this._userId === this._ownerId) {
        buttonDelete.classList.add("fade");
        buttonDelete.addEventListener("click", this._handleDeleteClick.bind(this));
        console.log("Classe 'fade' adicionada ao botão de deletar.");
      }
      this._setEventListeners();
      return this._element;
    }
  }, {
    key: "_updateLikes",
    value: function _updateLikes(likes) {
      var _this = this;
      var likeButton = this._element.querySelector(".places__button");
      var likeCounter = this._element.querySelector(".places__like-counter");
      likeButton.classList.toggle("places__button-active", likes.some(function (user) {
        return user._id === _this._userId;
      }));
      likeCounter.textContent = "".concat(likes.length);
    }
  }, {
    key: "_likeButtonAction",
    value: function _likeButtonAction() {
      var _this2 = this;
      var likeButton = this._element.querySelector(".places__button");
      if (likeButton.classList.contains("places__button-active")) {
        this._api.unlikeCard(this._id).then(function (updatedCard) {
          _this2._updateLikes(updatedCard.likes);
          likeButton.classList.remove("places__button-active");
        }).catch(function (err) {
          console.error("Erro ao descurtir o card:", err);
        });
      } else {
        this._api.likeCard(this._id).then(function (updatedCard) {
          _this2._updateLikes(updatedCard.likes);
          likeButton.classList.add("places__button-active");
        }).catch(function (err) {
          console.error("Erro ao curtir o card:", err);
        });
      }
    }
  }, {
    key: "_handleDeleteClick",
    value: function _handleDeleteClick(event) {
      var _this3 = this;
      var cardElement = event.target.closest(".places__card");
      var cardId = cardElement.getAttribute("data-card-id");
      var buttonConfirm = document.querySelector(".popup-confirm__delete-button");
      buttonConfirm.textContent = "Sim";
      this._popupWithConfirmation.setSubmitAction(function () {
        buttonConfirm.textContent = "Excluindo...";
        _this3._api.deleteCard(cardId).then(function () {
          setTimeout(function () {
            cardElement.remove();
            _this3._popupWithConfirmation.close();
          }, 1000);
        }).catch(function (err) {
          console.error("Erro ao excluir o card:", err);
        });
      });
      this._popupWithConfirmation.open();
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this4 = this;
      var likeButton = this._element.querySelector(".places__button");
      if (likeButton) {
        likeButton.addEventListener("click", function () {
          return _this4._likeButtonAction();
        });
      } else {
        console.error("Botão de Like não foi encontrado!");
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.css */ "./src/index.css");
/* harmony import */ var _JS_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../JS/FormValidator.js */ "./JS/FormValidator.js");
/* harmony import */ var _JS_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../JS/card.js */ "./JS/card.js");
/* harmony import */ var _JS_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../JS/Section.js */ "./JS/Section.js");
/* harmony import */ var _JS_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JS/PopupWithForm.js */ "./JS/PopupWithForm.js");
/* harmony import */ var _JS_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../JS/PopupWithImage.js */ "./JS/PopupWithImage.js");
/* harmony import */ var _JS_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../JS/PopupWithConfirmation.js */ "./JS/PopupWithConfirmation.js");
/* harmony import */ var _JS_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../JS/UserInfo.js */ "./JS/UserInfo.js");
/* harmony import */ var _JS_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../JS/Api.js */ "./JS/Api.js");


//------------------------------------ importando os métodos --------------------------------------------









//---------------------------- Validações dos Formulários ----------------------------//
var validationProfile = new _JS_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  formSelector: ".popups__form",
  inputSelector: ".popups__input",
  submitButtonSelector: ".popups__form-submit",
  buttonError: "popups__form-submit_error",
  inputErrorClass: "popups__input_error"
}, document.querySelector(".popups__form"));
validationProfile.enableValidation();
var validationProfileAtavar = new _JS_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  buttonError: ".popup__button_error",
  inputErrorClass: ".popup__error"
}, document.querySelector(".popup__form"));
validationProfileAtavar.enableValidation();
var validationCards = new _JS_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  formSelector: ".popup-cards__form",
  inputSelector: ".popup-cards__input",
  submitButtonSelector: ".popup-cards__submit",
  buttonError: "popups__cards-submit_error",
  inputErrorClass: "popup__cards-input_error"
}, document.querySelector(".popup-cards__form"));
validationCards.enableValidation();

//------------------------------- APIs -----------------------------------------------//
var api = new _JS_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-10",
  headers: {
    authorization: "efb1f05d-289b-4c85-b51a-6f31e98731ae",
    "Content-Type": "application/json"
  }
});

//---------------------------- Instanciação do UserInfo ----------------------------//
var userInfo = new _JS_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__description",
  avatarSelector: ".profile__avatar"
});

//-------------Carregar os dados do usuário-----------------//
var currentUserId;
api.getUserInfo().then(function (userData) {
  userInfo.setUserInfo({
    name: userData.name,
    description: userData.about,
    avatar: userData.avatar
  });
  currentUserId = userData._id;
  console.log("Current User ID:", currentUserId);
}).catch(function (err) {
  console.error("Erro ao carregar informações do usuário:", err);
});

//----------------------------------------------------------- FUNÇÕES DE POPUP -------------------------------------------------------------//
//------------------------------------- popup para o delete -----------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  var popupWithConfirmation = new _JS_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_6__["default"](".popup-confirm");
  var closeDeleteCards = document.querySelector(".popup-confirm__close");
  if (closeDeleteCards) {
    closeDeleteCards.addEventListener("click", function () {
      return popupWithConfirmation.close();
    });
  }

  //-------------------------------- popup para criar cards ---------------------------------//
  var openCreateCard = document.querySelector(".profile__card-create");
  var closeCreateCard = document.querySelector(".popup-cards__close");
  openCreateCard.addEventListener("click", function () {
    return popupFormCards.open();
  });
  closeCreateCard.addEventListener("click", function () {
    return popupFormCards.close();
  });
  var handleSubmitFormCard = function handleSubmitFormCard(formData) {
    var valueTitle = formData["profile__card_name"];
    var valueUrl = formData["profile__card_url"];
    var saveButton = document.querySelector("#saveButtonCard");
    if (valueTitle && valueUrl) {
      saveButton.textContent = "Salvando...";
      var newCardData = {
        name: valueTitle,
        link: valueUrl
      };
      api.createCard(newCardData).then(function (createdCard) {
        var newCard = new _JS_card_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
          name: createdCard.name,
          link: createdCard.link,
          likes: createdCard.likes,
          id: createdCard._id,
          userId: "664cbfd9889c8e0019de4e1f",
          api: api
        });
        var newCardElement = newCard.generateCard();
        var section = document.querySelector(".places");
        section.prepend(newCardElement);
        addDeleteButtonListeners();
        saveButton.textContent = "Salvar";
      }).catch(function (err) {
        console.error("Erro ao criar o card:", err);
        saveButton.textContent = "Salvar";
      });
    }
  };
  var popupFormCards = new _JS_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](handleSubmitFormCard, ".popup-cards", ".popup-cards__form");

  //---------------------------- PopupWithForm do Profile ---------------------------------------------//
  var openButtonProfile = document.querySelector(".profile__button");
  var closeButtonProfile = document.querySelector("#closeButton");
  openButtonProfile.addEventListener("click", function () {
    popupFormProfile.open();
  });
  closeButtonProfile.addEventListener("click", function () {
    return popupFormProfile.close();
  });
  var handleSubmitFormProfile = function handleSubmitFormProfile(formData) {
    var valueName = formData["profile__name"];
    var valueDescription = formData["profile__description"];
    var saveButton = document.querySelector("#saveButtonPopup");
    console.log("Nome do perfil:", valueName); // Registra o nome no console
    if (valueName && valueDescription) {
      // Modificar o botão quando for salvar

      saveButton.textContent = "Salvando...";
      api.updateUserInfo({
        name: valueName,
        about: valueDescription
      }).then(function (updatedUserInfo) {
        // Delay para salvar
        setTimeout(function () {
          var profileNameElement = document.querySelector(".profile__name");
          var profileDescriptionElement = document.querySelector(".profile__description");
          profileNameElement.textContent = updatedUserInfo.name;
          profileDescriptionElement.textContent = updatedUserInfo.about;
          // Restaurar o botão para salvar
          saveButton.textContent = "Salvar";
        }, 2000);
      }).catch(function (err) {
        console.error("Erro ao atualizar as informações do usuário:", err);
        // Restaurar o botão em caso de erro
        saveButton.textContent = "Salvar";
      });
    }
  };
  var popupFormProfile = new _JS_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](handleSubmitFormProfile, ".popups", ".popups__form");

  //--------------------------- criação dos cards iniciais---------------------------------------------//

  api.getInitialCards().then(function (initialCards) {
    var section = new _JS_Section_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      items: initialCards,
      renderer: function renderer(item) {
        var userId = "664cbfd9889c8e0019de4e1f"; // ID do usuário atual
        var name = item.name,
          link = item.link,
          likes = item.likes,
          _id = item._id,
          owner = item.owner;
        var card = new _JS_card_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
          name: name,
          link: link,
          likes: likes,
          id: _id,
          userId: currentUserId,
          api: api,
          ownerId: owner._id,
          popupWithConfirmation: popupWithConfirmation
        });
        var cardElement = card.generateCard();
        section.addItem(cardElement);
      }
    }, ".places");
    section.rendererItems();
  }).catch(function (err) {
    console.error("Erro ao carregar os cards iniciais:", err);
  });
});

//------------------------------- PopupWithForm do Profile-Avatar -----------------------------------------//
var openButtonAvatarEdit = document.querySelector(".profile__avatar-edit");
var closeButtonAvatarEdit = document.querySelector("#closeButtonEdit");
openButtonAvatarEdit.addEventListener("click", function () {
  return popupFormAvatar.open();
});
closeButtonAvatarEdit.addEventListener("click", function () {
  return popupFormAvatar.close();
});
var handleSubmitFormAvatar = function handleSubmitFormAvatar(formData) {
  var avatarUrl = formData["profile__avatar"];
  var saveButton = document.querySelector("#saveButtonAvatar");
  if (avatarUrl) {
    saveButton.textContent = "Salvando...";
    api.updateUserAvatar(avatarUrl).then(function (updatedUserInfo) {
      setTimeout(function () {
        var profileAvatarElement = document.querySelector(".profile__avatar");
        profileAvatarElement.src = updatedUserInfo.avatar;
        saveButton.textContent = "Salvar";
      }, 2000);
    }).catch(function (err) {
      console.error("Erro ao atualizar o avatar do usuário:", err);
      saveButton.textContent = "Salvar";
    });
  }
};
var popupFormAvatar = new _JS_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](handleSubmitFormAvatar, ".popup", ".popup__form");

//------------------------------- Popup das Imagens --------------------------------------------------------
var popupWithImage = new _JS_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"](".image");

// Adiciona os eventos aos cards para abrir as imagens
document.querySelector(".places").addEventListener("click", function (event) {
  if (event.target.classList.contains("places__image")) {
    var clickedCard = event.target;
    var imageUrl = clickedCard.getAttribute("src");
    var imageAlt = clickedCard.getAttribute("alt");
    var description = clickedCard.nextElementSibling.textContent;
    popupWithImage.open(imageUrl, imageAlt, description);
  }
});

// Botão para fechar a imagem
var closeButtonImage = document.querySelector(".image__close");
closeButtonImage.addEventListener("click", function () {
  popupWithImage.close();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO01BQzVEOEwsVUFBVSxDQUFDekksV0FBVyxHQUFHLFFBQVE7SUFDbkMsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDO0FBRUQsSUFBTTZKLGVBQWUsR0FBRyxJQUFJbkksNERBQWEsQ0FBQ29JLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUM7O0FBRTNGO0FBQ0EsSUFBTUUsY0FBYyxHQUFHLElBQUlsSCw2REFBYyxDQUFDLFFBQVEsQ0FBQzs7QUFFbkQ7QUFDQXhDLFFBQVEsQ0FBQzVCLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUNyRSxJQUFJQSxLQUFLLENBQUNrQyxNQUFNLENBQUMxQixTQUFTLENBQUM2SCxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7SUFDcEQsSUFBTTZDLFdBQVcsR0FBR2xMLEtBQUssQ0FBQ2tDLE1BQU07SUFDaEMsSUFBTWlDLFFBQVEsR0FBRytHLFdBQVcsQ0FBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDaEQsSUFBTXJFLFFBQVEsR0FBRzhHLFdBQVcsQ0FBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDaEQsSUFBTWpFLFdBQVcsR0FBRzBHLFdBQVcsQ0FBQ25LLGtCQUFrQixDQUFDRSxXQUFXO0lBQzlEZ0ssY0FBYyxDQUFDckosSUFBSSxDQUFDdUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVJLFdBQVcsQ0FBQztFQUN0RDtBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQU0yRyxnQkFBZ0IsR0FBRzVKLFFBQVEsQ0FBQzVCLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDaEV3TCxnQkFBZ0IsQ0FBQ3BMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQy9Da0wsY0FBYyxDQUFDbkosS0FBSyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9KUy9BcGkuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vSlMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9KUy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9KUy9Qb3B1cFdpdGhDb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vSlMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9KUy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9KUy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL0pTL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL0pTL2NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2luZGV4LmNzcz85OWM5Iiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVycyB9KSB7XHJcbiAgICB0aGlzLl9iYXNlVXJsID0gYmFzZVVybDtcclxuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrUmVzcG9uc2UocmVzKSB7XHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBFcnJvOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciBvcyBjYXJkcyBpbmljaWFpczpcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDYXJkKGNhcmQpe1xyXG4gICAgcmV0dXJuIGZldGNoKCBgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyZCksXHJcbiAgICB9KVxyXG4gICAgLnRoZW4odGhpcy5fY2hlY2tSZXNwb25zZSlcclxuICAgIC50aGVuKChjcmVhdGVkQ2FyZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVkQ2FyZDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBjcmlhciBvIGNhcmQ6XCIsIGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuICBkZWxldGVDYXJkKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4odGhpcy5fY2hlY2tSZXNwb25zZSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBleGNsdWlyIG8gY2FyZDpcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaWtlQ2FyZChjYXJkSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGN1cnRpciBvIGNhcmQ6XCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdW5saWtlQ2FyZChjYXJkSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy9saWtlcy8ke2NhcmRJZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGRlc2N1cnRpciBvIGNhcmQ6XCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FyZExpa2VzKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfS9saWtlc2AsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHRoaXMuX2NoZWNrUmVzcG9uc2UpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYnVzY2FyIG9zIGxpa2VzIGRvIGNhcmQ6XCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvOlwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXJJbmZvKHVzZXJJbmZvKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VySW5mbyksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGF0dWFsaXphciBhcyBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvOlwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXJBdmF0YXIoYXZhdGFyVXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhdmF0YXI6IGF2YXRhclVybCB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHRoaXMuX2NoZWNrUmVzcG9uc2UpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIG8gYXZhdGFyIGRvIHVzdcOhcmlvOlwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2NvbmZpZy5pbnB1dFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tGb3JtVmFsaWRpdHkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrRm9ybVZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfY2hlY2tGb3JtVmFsaWRpdHkoKSB7XHJcbiAgICAgICAgbGV0IGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAvLyB0aGlzLl9pbnB1dExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWlzRm9ybVZhbGlkKXtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmJ1dHRvbkVycm9yKVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmJ1dHRvbkVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSAhaXNGb3JtVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGlzSW5wdXRWYWxpZCA9IGlucHV0LmNoZWNrVmFsaWRpdHkoKTtcclxuICAgICAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgICAgIGlmIChpc0lucHV0VmFsaWQpIHtcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgICAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICAgIGlmICghcG9wdXBTZWxlY3Rvcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUG9wdXAgc2VsZWN0b3IgaXMgcmVxdWlyZWQhIVwiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5faGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5faGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuX2lzT3BlbmVkID0gZmFsc2U7IFxyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgICAgaWYgKCF0aGlzLl9pc09wZW5lZCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XHJcbiAgICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICB0aGlzLl9pc09wZW5lZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgICBpZiAodGhpcy5faXNPcGVuZWQpIHtcclxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgICAgICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgICAgdGhpcy5faXNPcGVuZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xyXG4gICAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlT3V0c2lkZUNsaWNrKGV2dCkge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gdGhpcy5fcG9wdXApIHtcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVPdXRzaWRlQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVPdXRzaWRlQ2xpY2spO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoQ29uZmlybWF0aW9uIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb25maXJtX19mb3JtJyk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb25maXJtX19kZWxldGUtYnV0dG9uJyk7XHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gdGhpcy5faGFuZGxlRm9ybVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc2V0U3VibWl0QWN0aW9uKGFjdGlvbikge1xyXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGFjdGlvbjtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVGb3JtU3VibWl0KGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5faGFuZGxlRm9ybVN1Ym1pdCkge1xyXG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdWJtaXRDYWxsYmFjaywgcG9wdXBTZWxlY3RvciwgZm9ybVNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gZm9ybVNlbGVjdG9yOyBcclxuICAgICAgICB0aGlzLl9zdWJtaXRDYWxsYmFjayA9IHN1Ym1pdENhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3Rvcih0aGlzLl9mb3JtU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIgPSB0aGlzLl9zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICBzdXBlci5vcGVuKCk7IFxyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5fc3VibWl0SGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Zvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5fc3VibWl0SGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9zdWJtaXRIYW5kbGVyKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gdGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRDYWxsYmFjayhmb3JtRGF0YSk7XHJcbiAgICAgICAgLy9kZWxheSBwYXJhIGZlY2hhclxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuX2Zvcm1FbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlRWxlbWVudCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VfX2Z1bGxcIik7XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb25FbGVtZW50ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5pbWFnZV9fc3VidGl0bGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZUltYWdlKGltYWdlVXJsLCBpbWFnZUFsdCl7XHJcbiAgICAgICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlVXJsO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hbHQgPSBpbWFnZUFsdDtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pe1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIF9hZGRGYWRlQ2xhc3MoKXtcclxuICAgICAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKGltYWdlVXJsLCBpbWFnZUFsdCwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVJbWFnZShpbWFnZVVybCwgaW1hZ2VBbHQpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcclxuICAgICAgICB0aGlzLl9hZGRGYWRlQ2xhc3MoKTtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcmVySXRlbXMoKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKHtuYW1lU2VsZWN0b3IsIGRlc2NyaXB0aW9uU2VsZWN0b3IsIGF2YXRhclNlbGVjdG9yfSkge1xyXG4gICAgICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGVzY3JpcHRpb25TZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXZhdGFyU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5fZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBhdmF0YXI6IHRoaXMuX2F2YXRhckVsZW1lbnQuc3JjLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckluZm8oe25hbWUsIGRlc2NyaXB0aW9uLCBhdmF0YXJ9KSB7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGF2YXRhcikge1xyXG4gICAgICAgICAgICB0aGlzLl9hdmF0YXJFbGVtZW50LnNyYyA9IGF2YXRhcjtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZSwgbGluaywgbGlrZXMsIGlkLCB1c2VySWQsIGFwaSwgb3duZXJJZCwgcG9wdXBXaXRoQ29uZmlybWF0aW9uIH0pIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGxpbms7XHJcbiAgICB0aGlzLl9saWtlcyA9IGxpa2VzO1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMuX3VzZXJJZCA9IHVzZXJJZDtcclxuICAgIHRoaXMuX2FwaSA9IGFwaTtcclxuICAgIHRoaXMuX293bmVySWQgPSBvd25lcklkO1xyXG4gICAgdGhpcy5fcG9wdXBXaXRoQ29uZmlybWF0aW9uID0gcG9wdXBXaXRoQ29uZmlybWF0aW9uO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlc19jYXJkX3RlbXBsYXRlXCIpXHJcbiAgICAgIC5jb250ZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlc19fY2FyZFwiKVxyXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgY29uc3QgY2FyZEltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VzX19pbWFnZScpO1xyXG4gICAgY29uc3QgY2FyZFRpdGxlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VzX190aXRsZScpO1xyXG4gICAgY29uc3QgbGlrZUNvdW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VzX19saWtlLWNvdW50ZXInKTtcclxuICAgIGNvbnN0IGxpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZXNfX2J1dHRvbicpO1xyXG4gICAgY29uc3QgYnV0dG9uRGVsZXRlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VzX19idXR0b25fZGVsZXRlJyk7XHJcblxyXG4gICAgY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICBjYXJkSW1hZ2UuYWx0ID0gdGhpcy5fbmFtZTtcclxuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcbiAgICB0aGlzLl91cGRhdGVMaWtlcyh0aGlzLl9saWtlcyk7XHJcbiAgICBsaWtlQ291bnQudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jYXJkLWlkXCIsIHRoaXMuX2lkKTtcclxuXHJcbiAgICAvLyBWZXJpZmlxdWUgc2UgbyBjYXJkIHBlcnRlbmNlIGFvIHVzdcOhcmlvIGF0dWFsIHBhcmEgbW9zdHJhciBvIGJvdMOjbyBkZSBkZWxldGFyXHJcbiAgICBpZiAodGhpcy5fdXNlcklkID09PSB0aGlzLl9vd25lcklkKSB7XHJcbiAgICAgIGJ1dHRvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcclxuICAgICAgYnV0dG9uRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVEZWxldGVDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJDbGFzc2UgJ2ZhZGUnIGFkaWNpb25hZGEgYW8gYm90w6NvIGRlIGRlbGV0YXIuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUxpa2VzKGxpa2VzKSB7XHJcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlc19fYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgbGlrZUNvdW50ZXIgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2VzX19saWtlLWNvdW50ZXJcIik7XHJcblxyXG4gICAgbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwicGxhY2VzX19idXR0b24tYWN0aXZlXCIsIGxpa2VzLnNvbWUodXNlciA9PiB1c2VyLl9pZCA9PT0gdGhpcy5fdXNlcklkKSk7XHJcbiAgICBsaWtlQ291bnRlci50ZXh0Q29udGVudCA9IGAke2xpa2VzLmxlbmd0aH1gO1xyXG4gIH1cclxuXHJcbiAgX2xpa2VCdXR0b25BY3Rpb24oKSB7XHJcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlc19fYnV0dG9uXCIpO1xyXG4gICAgaWYgKGxpa2VCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxhY2VzX19idXR0b24tYWN0aXZlXCIpKSB7XHJcbiAgICAgIHRoaXMuX2FwaS51bmxpa2VDYXJkKHRoaXMuX2lkKVxyXG4gICAgICAgIC50aGVuKCh1cGRhdGVkQ2FyZCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdXBkYXRlTGlrZXModXBkYXRlZENhcmQubGlrZXMpO1xyXG4gICAgICAgICAgbGlrZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2VzX19idXR0b24tYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGRlc2N1cnRpciBvIGNhcmQ6XCIsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcGkubGlrZUNhcmQodGhpcy5faWQpXHJcbiAgICAgICAgLnRoZW4oKHVwZGF0ZWRDYXJkKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl91cGRhdGVMaWtlcyh1cGRhdGVkQ2FyZC5saWtlcyk7XHJcbiAgICAgICAgICBsaWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwbGFjZXNfX2J1dHRvbi1hY3RpdmVcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gY3VydGlyIG8gY2FyZDpcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVEZWxldGVDbGljayhldmVudCkge1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5wbGFjZXNfX2NhcmRcIik7XHJcbiAgICBjb25zdCBjYXJkSWQgPSBjYXJkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcmQtaWRcIik7XHJcbiAgICBjb25zdCBidXR0b25Db25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb25maXJtX19kZWxldGUtYnV0dG9uXCIpXHJcblxyXG4gICAgYnV0dG9uQ29uZmlybS50ZXh0Q29udGVudCA9IFwiU2ltXCI7XHJcbiAgICBcclxuICAgIHRoaXMuX3BvcHVwV2l0aENvbmZpcm1hdGlvbi5zZXRTdWJtaXRBY3Rpb24oKCkgPT4ge1xyXG4gICAgICBidXR0b25Db25maXJtLnRleHRDb250ZW50ID0gXCJFeGNsdWluZG8uLi5cIjtcclxuICAgICAgdGhpcy5fYXBpLmRlbGV0ZUNhcmQoY2FyZElkKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgIHRoaXMuX3BvcHVwV2l0aENvbmZpcm1hdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBleGNsdWlyIG8gY2FyZDpcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9wb3B1cFdpdGhDb25maXJtYXRpb24ub3BlbigpO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZXNfX2J1dHRvblwiKTtcclxuICAgIGlmIChsaWtlQnV0dG9uKSB7XHJcbiAgICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2xpa2VCdXR0b25BY3Rpb24oKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQm90w6NvIGRlIExpa2UgbsOjbyBmb2kgZW5jb250cmFkbyFcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3NyYy9pbmRleC5jc3NcIjtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW1wb3J0YW5kbyBvcyBtw6l0b2RvcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFZhbGlkYXRpb24gZnJvbSBcIi4uL0pTL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9KUy9jYXJkLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vSlMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL0pTL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vSlMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBQb3B1cFdpdGhDb25maXJtYXRpb24gZnJvbSBcIi4uL0pTL1BvcHVwV2l0aENvbmZpcm1hdGlvbi5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9KUy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vSlMvQXBpLmpzXCI7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBWYWxpZGHDp8O1ZXMgZG9zIEZvcm11bMOhcmlvcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbmNvbnN0IHZhbGlkYXRpb25Qcm9maWxlID0gbmV3IFZhbGlkYXRpb24oe1xuICBmb3JtU2VsZWN0b3I6IFwiLnBvcHVwc19fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cHNfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cHNfX2Zvcm0tc3VibWl0XCIsXG4gIGJ1dHRvbkVycm9yOiBcInBvcHVwc19fZm9ybS1zdWJtaXRfZXJyb3JcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwc19faW5wdXRfZXJyb3JcIixcbn0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzX19mb3JtXCIpKTtcblxudmFsaWRhdGlvblByb2ZpbGUuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCB2YWxpZGF0aW9uUHJvZmlsZUF0YXZhciA9IG5ldyBWYWxpZGF0aW9uKHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19idXR0b25cIixcbiAgYnV0dG9uRXJyb3I6IFwiLnBvcHVwX19idXR0b25fZXJyb3JcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIi5wb3B1cF9fZXJyb3JcIixcbn0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIikpO1xuXG52YWxpZGF0aW9uUHJvZmlsZUF0YXZhci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmNvbnN0IHZhbGlkYXRpb25DYXJkcyA9IG5ldyBWYWxpZGF0aW9uKHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cC1jYXJkc19fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cC1jYXJkc19faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwLWNhcmRzX19zdWJtaXRcIixcbiAgYnV0dG9uRXJyb3I6IFwicG9wdXBzX19jYXJkcy1zdWJtaXRfZXJyb3JcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19jYXJkcy1pbnB1dF9lcnJvclwiLFxufSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jYXJkc19fZm9ybVwiKSk7XG5cbnZhbGlkYXRpb25DYXJkcy5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBUElzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvd2ViLXB0YnItY29ob3J0LTEwXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcImVmYjFmMDVkLTI4OWItNGM4NS1iNTFhLTZmMzFlOTg3MzFhZVwiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gIH1cbn0pO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5zdGFuY2lhw6fDo28gZG8gVXNlckluZm8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIG5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fbmFtZVwiLFxuICBkZXNjcmlwdGlvblNlbGVjdG9yOiBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiLFxuICBhdmF0YXJTZWxlY3RvcjogXCIucHJvZmlsZV9fYXZhdGFyXCJcbn0pO1xuXG4vLy0tLS0tLS0tLS0tLS1DYXJyZWdhciBvcyBkYWRvcyBkbyB1c3XDoXJpby0tLS0tLS0tLS0tLS0tLS0tLy9cbmxldCBjdXJyZW50VXNlcklkO1xuXG5hcGkuZ2V0VXNlckluZm8oKS50aGVuKCh1c2VyRGF0YSkgPT4ge1xuICB1c2VySW5mby5zZXRVc2VySW5mbyh7XG4gICAgbmFtZTogdXNlckRhdGEubmFtZSxcbiAgICBkZXNjcmlwdGlvbjogdXNlckRhdGEuYWJvdXQsXG4gICAgYXZhdGFyOiB1c2VyRGF0YS5hdmF0YXJcbiAgfSk7XG4gIGN1cnJlbnRVc2VySWQgPSB1c2VyRGF0YS5faWQ7IFxuICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgVXNlciBJRDpcIiwgY3VycmVudFVzZXJJZCk7XG59KS5jYXRjaCgoZXJyKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGNhcnJlZ2FyIGluZm9ybWHDp8O1ZXMgZG8gdXN1w6FyaW86XCIsIGVycik7XG59KTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGVU7Dh8OVRVMgREUgUE9QVVAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcG9wdXAgcGFyYSBvIGRlbGV0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgcG9wdXBXaXRoQ29uZmlybWF0aW9uID0gbmV3IFBvcHVwV2l0aENvbmZpcm1hdGlvbihcIi5wb3B1cC1jb25maXJtXCIpO1xuXG4gIGNvbnN0IGNsb3NlRGVsZXRlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWNvbmZpcm1fX2Nsb3NlXCIpO1xuICBpZiAoY2xvc2VEZWxldGVDYXJkcykge1xuICAgIGNsb3NlRGVsZXRlQ2FyZHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHBvcHVwV2l0aENvbmZpcm1hdGlvbi5jbG9zZSgpKTtcbiAgfSBcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwb3B1cCBwYXJhIGNyaWFyIGNhcmRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIGNvbnN0IG9wZW5DcmVhdGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19jYXJkLWNyZWF0ZVwiKTtcbiAgY29uc3QgY2xvc2VDcmVhdGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jYXJkc19fY2xvc2VcIik7XG4gIG9wZW5DcmVhdGVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwb3B1cEZvcm1DYXJkcy5vcGVuKCkpO1xuICBjbG9zZUNyZWF0ZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHBvcHVwRm9ybUNhcmRzLmNsb3NlKCkpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEZvcm1DYXJkID0gKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgdmFsdWVUaXRsZSA9IGZvcm1EYXRhW1wicHJvZmlsZV9fY2FyZF9uYW1lXCJdO1xuICAgIGNvbnN0IHZhbHVlVXJsID0gZm9ybURhdGFbXCJwcm9maWxlX19jYXJkX3VybFwiXTtcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlQnV0dG9uQ2FyZFwiKTtcblxuICAgIGlmICh2YWx1ZVRpdGxlICYmIHZhbHVlVXJsKSB7XG4gICAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYWx2YW5kby4uLlwiO1xuXG4gICAgICBjb25zdCBuZXdDYXJkRGF0YSA9IHtcbiAgICAgICAgbmFtZTogdmFsdWVUaXRsZSxcbiAgICAgICAgbGluazogdmFsdWVVcmwsXG4gICAgICB9O1xuXG4gICAgICBhcGkuY3JlYXRlQ2FyZChuZXdDYXJkRGF0YSlcbiAgICAgICAgLnRoZW4oKGNyZWF0ZWRDYXJkKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKHtcbiAgICAgICAgICAgIG5hbWU6IGNyZWF0ZWRDYXJkLm5hbWUsXG4gICAgICAgICAgICBsaW5rOiBjcmVhdGVkQ2FyZC5saW5rLFxuICAgICAgICAgICAgbGlrZXM6IGNyZWF0ZWRDYXJkLmxpa2VzLFxuICAgICAgICAgICAgaWQ6IGNyZWF0ZWRDYXJkLl9pZCxcbiAgICAgICAgICAgIHVzZXJJZDogXCI2NjRjYmZkOTg4OWM4ZTAwMTlkZTRlMWZcIixcbiAgICAgICAgICAgIGFwaTogYXBpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgbmV3Q2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlc1wiKTtcbiAgICAgICAgICBzZWN0aW9uLnByZXBlbmQobmV3Q2FyZEVsZW1lbnQpO1xuXG4gICAgICAgICAgYWRkRGVsZXRlQnV0dG9uTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYWx2YXJcIjtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBjcmlhciBvIGNhcmQ6XCIsIGVycik7XG4gICAgICAgICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2FsdmFyXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwb3B1cEZvcm1DYXJkcyA9IG5ldyBQb3B1cFdpdGhGb3JtKGhhbmRsZVN1Ym1pdEZvcm1DYXJkLCBcIi5wb3B1cC1jYXJkc1wiLCBcIi5wb3B1cC1jYXJkc19fZm9ybVwiKTtcblxuXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQb3B1cFdpdGhGb3JtIGRvIFByb2ZpbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgY29uc3Qgb3BlbkJ1dHRvblByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvblwiKTtcbiAgY29uc3QgY2xvc2VCdXR0b25Qcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ1dHRvblwiKTtcblxuICBvcGVuQnV0dG9uUHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcHVwRm9ybVByb2ZpbGUub3BlbigpO1xuICB9KTtcbiAgY2xvc2VCdXR0b25Qcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwb3B1cEZvcm1Qcm9maWxlLmNsb3NlKCkpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEZvcm1Qcm9maWxlID0gKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgdmFsdWVOYW1lID0gZm9ybURhdGFbXCJwcm9maWxlX19uYW1lXCJdO1xuICAgIGNvbnN0IHZhbHVlRGVzY3JpcHRpb24gPSBmb3JtRGF0YVtcInByb2ZpbGVfX2Rlc2NyaXB0aW9uXCJdO1xuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVCdXR0b25Qb3B1cFwiKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIk5vbWUgZG8gcGVyZmlsOlwiLCB2YWx1ZU5hbWUpOyAvLyBSZWdpc3RyYSBvIG5vbWUgbm8gY29uc29sZVxuICAgIGlmICh2YWx1ZU5hbWUgJiYgdmFsdWVEZXNjcmlwdGlvbikge1xuICAgICAgLy8gTW9kaWZpY2FyIG8gYm90w6NvIHF1YW5kbyBmb3Igc2FsdmFyXG4gICAgICBcbiAgICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhbHZhbmRvLi4uXCI7XG5cbiAgICAgIGFwaS51cGRhdGVVc2VySW5mbyh7XG4gICAgICAgIG5hbWU6IHZhbHVlTmFtZSxcbiAgICAgICAgYWJvdXQ6IHZhbHVlRGVzY3JpcHRpb25cbiAgICAgIH0pLnRoZW4oKHVwZGF0ZWRVc2VySW5mbykgPT4ge1xuICAgICAgICAvLyBEZWxheSBwYXJhIHNhbHZhclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9maWxlTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG4gICAgICAgICAgY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgICBwcm9maWxlTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSB1cGRhdGVkVXNlckluZm8ubmFtZTtcbiAgICAgICAgICBwcm9maWxlRGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gdXBkYXRlZFVzZXJJbmZvLmFib3V0O1xuICAgICAgICAgIC8vIFJlc3RhdXJhciBvIGJvdMOjbyBwYXJhIHNhbHZhclxuICAgICAgICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhbHZhclwiO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIGFzIGluZm9ybWHDp8O1ZXMgZG8gdXN1w6FyaW86XCIsIGVycik7XG4gICAgICAgIC8vIFJlc3RhdXJhciBvIGJvdMOjbyBlbSBjYXNvIGRlIGVycm9cbiAgICAgICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2FsdmFyXCI7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcG9wdXBGb3JtUHJvZmlsZSA9IG5ldyBQb3B1cFdpdGhGb3JtKGhhbmRsZVN1Ym1pdEZvcm1Qcm9maWxlLCBcIi5wb3B1cHNcIiwgXCIucG9wdXBzX19mb3JtXCIpO1xuICBcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNyaWHDp8OjbyBkb3MgY2FyZHMgaW5pY2lhaXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIGFwaS5nZXRJbml0aWFsQ2FyZHMoKS50aGVuKChpbml0aWFsQ2FyZHMpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oe1xuICAgICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcbiAgICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB1c2VySWQgPSBcIjY2NGNiZmQ5ODg5YzhlMDAxOWRlNGUxZlwiOyAvLyBJRCBkbyB1c3XDoXJpbyBhdHVhbFxuICAgICAgICBjb25zdCB7IG5hbWUsIGxpbmssIGxpa2VzLCBfaWQsIG93bmVyIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoeyBcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxpbmssXG4gICAgICAgICAgbGlrZXMsXG4gICAgICAgICAgaWQ6IF9pZCxcbiAgICAgICAgICB1c2VySWQ6IGN1cnJlbnRVc2VySWQsXG4gICAgICAgICAgYXBpLFxuICAgICAgICAgIG93bmVySWQ6IG93bmVyLl9pZCxcbiAgICAgICAgICBwb3B1cFdpdGhDb25maXJtYXRpb24gfSk7XG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcbiAgICAgICAgc2VjdGlvbi5hZGRJdGVtKGNhcmRFbGVtZW50KTtcbiAgICAgIH0sXG4gICAgfSwgXCIucGxhY2VzXCIpO1xuICAgIHNlY3Rpb24ucmVuZGVyZXJJdGVtcygpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gY2FycmVnYXIgb3MgY2FyZHMgaW5pY2lhaXM6XCIsIGVycik7XG4gIH0pO1xuXG59KTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBvcHVwV2l0aEZvcm0gZG8gUHJvZmlsZS1BdmF0YXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuY29uc3Qgb3BlbkJ1dHRvbkF2YXRhckVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1lZGl0XCIpO1xuY29uc3QgY2xvc2VCdXR0b25BdmF0YXJFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ1dHRvbkVkaXRcIik7XG5vcGVuQnV0dG9uQXZhdGFyRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcG9wdXBGb3JtQXZhdGFyLm9wZW4oKSk7XG5jbG9zZUJ1dHRvbkF2YXRhckVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHBvcHVwRm9ybUF2YXRhci5jbG9zZSgpKTtcblxuY29uc3QgaGFuZGxlU3VibWl0Rm9ybUF2YXRhciA9IChmb3JtRGF0YSkgPT4ge1xuICBjb25zdCBhdmF0YXJVcmwgPSBmb3JtRGF0YVtcInByb2ZpbGVfX2F2YXRhclwiXTtcbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZUJ1dHRvbkF2YXRhclwiKTtcblxuICBpZiAoYXZhdGFyVXJsKSB7XG4gICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2FsdmFuZG8uLi5cIjtcblxuICAgIGFwaS51cGRhdGVVc2VyQXZhdGFyKGF2YXRhclVybCkudGhlbigodXBkYXRlZFVzZXJJbmZvKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZmlsZUF2YXRhckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhclwiKTtcbiAgICAgICAgcHJvZmlsZUF2YXRhckVsZW1lbnQuc3JjID0gdXBkYXRlZFVzZXJJbmZvLmF2YXRhcjtcbiAgICAgICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2FsdmFyXCI7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBhdHVhbGl6YXIgbyBhdmF0YXIgZG8gdXN1w6FyaW86XCIsIGVycik7XG4gICAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYWx2YXJcIjtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgcG9wdXBGb3JtQXZhdGFyID0gbmV3IFBvcHVwV2l0aEZvcm0oaGFuZGxlU3VibWl0Rm9ybUF2YXRhciwgXCIucG9wdXBcIiwgXCIucG9wdXBfX2Zvcm1cIik7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQb3B1cCBkYXMgSW1hZ2VucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIuaW1hZ2VcIik7XG5cbi8vIEFkaWNpb25hIG9zIGV2ZW50b3MgYW9zIGNhcmRzIHBhcmEgYWJyaXIgYXMgaW1hZ2Vuc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBsYWNlc19faW1hZ2VcIikpIHtcbiAgICBjb25zdCBjbGlja2VkQ2FyZCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBpbWFnZVVybCA9IGNsaWNrZWRDYXJkLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICBjb25zdCBpbWFnZUFsdCA9IGNsaWNrZWRDYXJkLmdldEF0dHJpYnV0ZShcImFsdFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNsaWNrZWRDYXJkLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgICBwb3B1cFdpdGhJbWFnZS5vcGVuKGltYWdlVXJsLCBpbWFnZUFsdCwgZGVzY3JpcHRpb24pO1xuICB9XG59KTtcblxuLy8gQm90w6NvIHBhcmEgZmVjaGFyIGEgaW1hZ2VtXG5jb25zdCBjbG9zZUJ1dHRvbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZV9fY2xvc2VcIik7XG5jbG9zZUJ1dHRvbkltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBvcHVwV2l0aEltYWdlLmNsb3NlKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBcGkiLCJfcmVmIiwiYmFzZVVybCIsImhlYWRlcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfY2hlY2tSZXNwb25zZSIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJjb25jYXQiLCJzdGF0dXMiLCJnZXRJbml0aWFsQ2FyZHMiLCJmZXRjaCIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNyZWF0ZUNhcmQiLCJjYXJkIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVkQ2FyZCIsImRlbGV0ZUNhcmQiLCJjYXJkSWQiLCJsaWtlQ2FyZCIsInVubGlrZUNhcmQiLCJnZXRDYXJkTGlrZXMiLCJnZXRVc2VySW5mbyIsInVwZGF0ZVVzZXJJbmZvIiwidXNlckluZm8iLCJ1cGRhdGVVc2VyQXZhdGFyIiwiYXZhdGFyVXJsIiwiYXZhdGFyIiwiZGVmYXVsdCIsIlZhbGlkYXRpb24iLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9jb25maWciLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJfY2hlY2tGb3JtVmFsaWRpdHkiLCJmb3JFYWNoIiwiaW5wdXQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiaXNGb3JtVmFsaWQiLCJjaGVja1ZhbGlkaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwiYnV0dG9uRXJyb3IiLCJyZW1vdmUiLCJkaXNhYmxlZCIsImlzSW5wdXRWYWxpZCIsImVycm9yRWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsImlucHV0RXJyb3JDbGFzcyIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJFcnJvciIsIl9wb3B1cCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIl9oYW5kbGVPdXRzaWRlQ2xpY2siLCJfaXNPcGVuZWQiLCJvcGVuIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImV2dCIsInRhcmdldCIsIlBvcHVwV2l0aENvbmZpcm1hdGlvbiIsIl9Qb3B1cCIsIl9jYWxsU3VwZXIiLCJfZm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2luaGVyaXRzIiwic2V0U3VibWl0QWN0aW9uIiwiYWN0aW9uIiwiUG9wdXBXaXRoRm9ybSIsInN1Ym1pdENhbGxiYWNrIiwiZm9ybVNlbGVjdG9yIiwiX2Zvcm1TZWxlY3RvciIsIl9zdWJtaXRDYWxsYmFjayIsIl9zdWJtaXRIYW5kbGVyIiwiX2Zvcm1WYWx1ZXMiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsInJlc2V0IiwiX3RoaXMyIiwiZm9ybURhdGEiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJzZXRUaW1lb3V0IiwiRm9ybURhdGEiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJQb3B1cFdpdGhJbWFnZSIsIl9pbWFnZUVsZW1lbnQiLCJfZGVzY3JpcHRpb25FbGVtZW50IiwiX3VwZGF0ZUltYWdlIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInNyYyIsImFsdCIsIl91cGRhdGVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiX2FkZEZhZGVDbGFzcyIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVyZXJJdGVtcyIsIml0ZW0iLCJhZGRJdGVtIiwiZWxlbWVudCIsImFwcGVuZCIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwiZGVzY3JpcHRpb25TZWxlY3RvciIsImF2YXRhclNlbGVjdG9yIiwiX25hbWVFbGVtZW50IiwiX2F2YXRhckVsZW1lbnQiLCJuYW1lIiwic2V0VXNlckluZm8iLCJfcmVmMiIsIkNhcmQiLCJsaW5rIiwibGlrZXMiLCJpZCIsInVzZXJJZCIsImFwaSIsIm93bmVySWQiLCJwb3B1cFdpdGhDb25maXJtYXRpb24iLCJfbmFtZSIsIl9saW5rIiwiX2xpa2VzIiwiX2lkIiwiX3VzZXJJZCIsIl9hcGkiLCJfb3duZXJJZCIsIl9wb3B1cFdpdGhDb25maXJtYXRpb24iLCJfZWxlbWVudCIsIl9nZXRUZW1wbGF0ZSIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsImdlbmVyYXRlQ2FyZCIsImNhcmRJbWFnZSIsImNhcmRUaXRsZSIsImxpa2VDb3VudCIsImxpa2VCdXR0b24iLCJidXR0b25EZWxldGUiLCJfdXBkYXRlTGlrZXMiLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJfaGFuZGxlRGVsZXRlQ2xpY2siLCJsb2ciLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJsaWtlQ291bnRlciIsInRvZ2dsZSIsInNvbWUiLCJ1c2VyIiwiX2xpa2VCdXR0b25BY3Rpb24iLCJjb250YWlucyIsInVwZGF0ZWRDYXJkIiwiX3RoaXMzIiwiY2xvc2VzdCIsImdldEF0dHJpYnV0ZSIsImJ1dHRvbkNvbmZpcm0iLCJfdGhpczQiLCJ2YWxpZGF0aW9uUHJvZmlsZSIsInZhbGlkYXRpb25Qcm9maWxlQXRhdmFyIiwidmFsaWRhdGlvbkNhcmRzIiwiYXV0aG9yaXphdGlvbiIsImN1cnJlbnRVc2VySWQiLCJ1c2VyRGF0YSIsImFib3V0IiwiY2xvc2VEZWxldGVDYXJkcyIsIm9wZW5DcmVhdGVDYXJkIiwiY2xvc2VDcmVhdGVDYXJkIiwicG9wdXBGb3JtQ2FyZHMiLCJoYW5kbGVTdWJtaXRGb3JtQ2FyZCIsInZhbHVlVGl0bGUiLCJ2YWx1ZVVybCIsInNhdmVCdXR0b24iLCJuZXdDYXJkRGF0YSIsIm5ld0NhcmQiLCJuZXdDYXJkRWxlbWVudCIsInNlY3Rpb24iLCJwcmVwZW5kIiwiYWRkRGVsZXRlQnV0dG9uTGlzdGVuZXJzIiwib3BlbkJ1dHRvblByb2ZpbGUiLCJjbG9zZUJ1dHRvblByb2ZpbGUiLCJwb3B1cEZvcm1Qcm9maWxlIiwiaGFuZGxlU3VibWl0Rm9ybVByb2ZpbGUiLCJ2YWx1ZU5hbWUiLCJ2YWx1ZURlc2NyaXB0aW9uIiwidXBkYXRlZFVzZXJJbmZvIiwicHJvZmlsZU5hbWVFbGVtZW50IiwicHJvZmlsZURlc2NyaXB0aW9uRWxlbWVudCIsImluaXRpYWxDYXJkcyIsIm93bmVyIiwib3BlbkJ1dHRvbkF2YXRhckVkaXQiLCJjbG9zZUJ1dHRvbkF2YXRhckVkaXQiLCJwb3B1cEZvcm1BdmF0YXIiLCJoYW5kbGVTdWJtaXRGb3JtQXZhdGFyIiwicHJvZmlsZUF2YXRhckVsZW1lbnQiLCJwb3B1cFdpdGhJbWFnZSIsImNsaWNrZWRDYXJkIiwiY2xvc2VCdXR0b25JbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=