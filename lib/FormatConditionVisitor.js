"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatConditionVisitor = void 0;
var _T6TriggerVisitor2 = _interopRequireDefault(require("./gen/T6TriggerVisitor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormatConditionVisitor = /*#__PURE__*/function (_T6TriggerVisitor) {
  _inherits(FormatConditionVisitor, _T6TriggerVisitor);
  var _super = _createSuper(FormatConditionVisitor);
  function FormatConditionVisitor() {
    var _this;
    var spaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    _classCallCheck(this, FormatConditionVisitor);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "exprLvl", 0);
    _defineProperty(_assertThisInitialized(_this), "formattedCondition", '');
    _this.indent = " ".repeat(spaces);
    return _this;
  }
  _createClass(FormatConditionVisitor, [{
    key: "getExprIndent",
    value: function getExprIndent() {
      return this.exprLvl ? this.indent.repeat(this.exprLvl) : '';
    }
  }, {
    key: "getConditionValue",
    value: function getConditionValue(ctx) {
      var inputStream = ctx.start.source[1];
      if (!inputStream) throw new Error('InputStream is missing in TokenSourceTuple');
      return inputStream.getText(ctx.start.start, ctx.stop.stop);
    }
  }, {
    key: "visitParse",
    value: function visitParse(ctx) {
      try {
        this.formattedCondition = _get(_getPrototypeOf(FormatConditionVisitor.prototype), "visit", this).call(this, ctx.expr()).trim();
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "visitBinaryExpr",
    value: function visitBinaryExpr(ctx) {
      var eIndent = this.getExprIndent();
      var leftExpr = _get(_getPrototypeOf(FormatConditionVisitor.prototype), "visit", this).call(this, ctx.expr(0));
      var rightExpr = _get(_getPrototypeOf(FormatConditionVisitor.prototype), "visit", this).call(this, ctx.expr(1));
      var op = !!ctx.binary().OR() ? ctx.binary().OR().getText() : ctx.binary().AND().getText();
      return "".concat(leftExpr).concat(eIndent).concat(op, "\n").concat(rightExpr);
    }
  }, {
    key: "visitComparatorExpr",
    value: function visitComparatorExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var comparator = ctx.comparator().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(comparator, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitAnyExpr",
    value: function visitAnyExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var ANY = ctx.ANY().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(ANY, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitEmptyExpr",
    value: function visitEmptyExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var EMPTY = ctx.EMPTY().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(EMPTY, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitNumberExpr",
    value: function visitNumberExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var number = ctx.number().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(number, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitNumbersExpr",
    value: function visitNumbersExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var numbers = ctx.numbers().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(numbers, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitNotExpr",
    value: function visitNotExpr(ctx) {
      var _this2 = this;
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var NOT = ctx.not().NOT().getText();
      var LPAREN = ctx.not().LPAREN().getText();
      var numOrVal = ctx.not().numbers() ? ctx.not().numbers().getText() : ctx.not().values().value().map(function (vCtx) {
        return _this2.getConditionValue(vCtx);
      });
      var RPAREN = ctx.not().RPAREN().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(NOT).concat(LPAREN).concat(numOrVal).concat(RPAREN, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitComplexExpr",
    value: function visitComplexExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var COMPLEX = ctx.complex().COMPLEX().getText();
      var LPAREN = ctx.complex().LPAREN().getText();
      this.exprLvl++;
      var expr = _get(_getPrototypeOf(FormatConditionVisitor.prototype), "visit", this).call(this, ctx.complex().expr());
      this.exprLvl--;
      var RPAREN = ctx.complex().RPAREN().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(COMPLEX).concat(LPAREN, "\n").concat(expr).concat(eIndent).concat(RPAREN, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitCountExpr",
    value: function visitCountExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var COUNT = ctx.count().COUNT().getText();
      var LPAREN = ctx.count().LPAREN().getText();
      var distOrVal = ctx.count().DISTINCT() ? ctx.count().DISTINCT().getText() : this.getConditionValue(ctx.count().value());
      var RPAREN = ctx.count().RPAREN().getText();
      var comparator = ctx.count().comparator().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(COUNT).concat(LPAREN).concat(distOrVal).concat(RPAREN).concat(comparator, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitCountComplexExpr",
    value: function visitCountComplexExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var COUNT_COMPLEX = ctx.countComplex().COUNT_COMPLEX().getText();
      var LPAREN = ctx.countComplex().LPAREN().getText();
      this.exprLvl++;
      var expr = _get(_getPrototypeOf(FormatConditionVisitor.prototype), "visit", this).call(this, ctx.countComplex().expr());
      this.exprLvl--;
      var RPAREN = ctx.countComplex().RPAREN().getText();
      var comparator = ctx.countComplex().comparator().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      if (ctx.countComplex().DISTINCT()) {
        var DISTINCT = ctx.countComplex().DISTINCT().getText();
        var complexField = ctx.countComplex().field().getText();
        return "".concat(eIndent).concat(IF, " ").concat(COUNT_COMPLEX).concat(LPAREN, "\n").concat(eIndent).concat(this.indent).concat(DISTINCT, " ").concat(complexField, "\n").concat(expr).concat(eIndent).concat(RPAREN).concat(comparator, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
      }
      return "".concat(eIndent).concat(IF, " ").concat(COUNT_COMPLEX).concat(LPAREN, "\n").concat(expr).concat(eIndent).concat(RPAREN).concat(comparator, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitParenExpr",
    value: function visitParenExpr(ctx) {
      var LPAREN = ctx.LPAREN().getText();
      var leIndent = this.getExprIndent();
      this.exprLvl++;
      var expr = _get(_getPrototypeOf(FormatConditionVisitor.prototype), "visit", this).call(this, ctx.expr());
      this.exprLvl--;
      var reIndent = this.getExprIndent();
      var RPAREN = ctx.RPAREN().getText();
      return "".concat(leIndent).concat(LPAREN, "\n").concat(expr).concat(reIndent).concat(RPAREN, "\n");
    }
  }, {
    key: "visitVehicleImpactExpr",
    value: function visitVehicleImpactExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var vehicleImpact = ctx.vehicleImpact().getText();
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(vehicleImpact, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitValueExpr",
    value: function visitValueExpr(ctx) {
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var value = this.getConditionValue(ctx.value());
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(value, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }, {
    key: "visitValuesExpr",
    value: function visitValuesExpr(ctx) {
      var _this3 = this;
      var eIndent = this.getExprIndent();
      var IF = ctx.IF().getText();
      var values = ctx.values().value().map(function (vCtx) {
        return _this3.getConditionValue(vCtx);
      });
      var FROM = ctx.FROM().getText();
      var field = ctx.field().getText();
      var THEN = ctx.THEN().getText();
      return "".concat(eIndent).concat(IF, " ").concat(values, " ").concat(FROM, " ").concat(field, " ").concat(THEN, "\n");
    }
  }]);
  return FormatConditionVisitor;
}(_T6TriggerVisitor2.default);
exports.FormatConditionVisitor = FormatConditionVisitor;
//# sourceMappingURL=FormatConditionVisitor.js.map