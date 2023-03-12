"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtractFieldNamesVisitor = void 0;
var _T6TriggerVisitor2 = _interopRequireDefault(require("./gen/T6TriggerVisitor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ExtractFieldNamesVisitor = /*#__PURE__*/function (_T6TriggerVisitor) {
  _inherits(ExtractFieldNamesVisitor, _T6TriggerVisitor);
  var _super = _createSuper(ExtractFieldNamesVisitor);
  function ExtractFieldNamesVisitor() {
    var _this;
    _classCallCheck(this, ExtractFieldNamesVisitor);
    _this = _super.call(this);
    _this.fieldNamesSet = new Set();
    return _this;
  }
  _createClass(ExtractFieldNamesVisitor, [{
    key: "visitParse",
    value: function visitParse(ctx) {
      _get(_getPrototypeOf(ExtractFieldNamesVisitor.prototype), "visit", this).call(this, ctx.expr());
      return null;
    }
  }, {
    key: "visitValueExpr",
    value: function visitValueExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return null;
    }
  }, {
    key: "visitValuesExpr",
    value: function visitValuesExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return null;
    }
  }, {
    key: "visitComparatorExpr",
    value: function visitComparatorExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return null;
    }
  }, {
    key: "visitAnyExpr",
    value: function visitAnyExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return null;
    }
  }, {
    key: "visitEmptyExpr",
    value: function visitEmptyExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return _get(_getPrototypeOf(ExtractFieldNamesVisitor.prototype), "visitEmptyExpr", this).call(this, ctx);
    }
  }, {
    key: "visitNotExpr",
    value: function visitNotExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return null;
    }
  }, {
    key: "visitNumberExpr",
    value: function visitNumberExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return null;
    }
  }, {
    key: "visitBinaryExpr",
    value: function visitBinaryExpr(ctx) {
      _get(_getPrototypeOf(ExtractFieldNamesVisitor.prototype), "visit", this).call(this, ctx.expr(0));
      _get(_getPrototypeOf(ExtractFieldNamesVisitor.prototype), "visit", this).call(this, ctx.expr(1));
      return null;
    }
  }, {
    key: "visitNumbersExpr",
    value: function visitNumbersExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return null;
    }
  }, {
    key: "visitParenExpr",
    value: function visitParenExpr(ctx) {
      _get(_getPrototypeOf(ExtractFieldNamesVisitor.prototype), "visit", this).call(this, ctx.expr());
      return null;
    }
  }, {
    key: "visitComplexExpr",
    value: function visitComplexExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      _get(_getPrototypeOf(ExtractFieldNamesVisitor.prototype), "visit", this).call(this, ctx.complex().expr());
      return null;
    }
  }, {
    key: "visitCountExpr",
    value: function visitCountExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return null;
    }
  }, {
    key: "visitCountComplexExpr",
    value: function visitCountComplexExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      if (ctx.countComplex().DISTINCT() !== null) {
        this.fieldNamesSet.add(ctx.countComplex().field().getText());
      }
      _get(_getPrototypeOf(ExtractFieldNamesVisitor.prototype), "visit", this).call(this, ctx.countComplex().expr());
      return null;
    }
  }, {
    key: "visitVehicleImpactExpr",
    value: function visitVehicleImpactExpr(ctx) {
      this.fieldNamesSet.add(ctx.field().getText());
      return null;
    }
  }, {
    key: "fieldNames",
    get: function get() {
      return _toConsumableArray(this.fieldNamesSet);
    }
  }]);
  return ExtractFieldNamesVisitor;
}(_T6TriggerVisitor2.default);
exports.ExtractFieldNamesVisitor = ExtractFieldNamesVisitor;
//# sourceMappingURL=ExtractFieldNamesVisitor.js.map