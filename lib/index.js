"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractIpGeolocation = void 0;

var core = _interopRequireWildcard(require("@abstractapi/javascript-core"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AbstractIpGeolocation = function AbstractIpGeolocation() {
  _classCallCheck(this, AbstractIpGeolocation);
};

exports.AbstractIpGeolocation = AbstractIpGeolocation;

_defineProperty(AbstractIpGeolocation, "apiKey", void 0);

_defineProperty(AbstractIpGeolocation, "configure", function (apiKey) {
  AbstractIpGeolocation.apiKey = apiKey;
});

_defineProperty(AbstractIpGeolocation, "look_up", function (ipAddress) {
  var ipAddressParam = '';

  if (ipAddress) {
    ipAddressParam = "ip_address=".concat(ipAddress);
  }

  return core.makeApiCall('ipgeolocation', AbstractIpGeolocation.apiKey, ipAddressParam);
});
