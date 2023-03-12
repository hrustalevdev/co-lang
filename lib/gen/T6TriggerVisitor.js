"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// This class defines a complete generic visitor for a parse tree produced by T6TriggerParser.
var T6TriggerVisitor = /*#__PURE__*/function (_antlr4$tree$ParseTre) {
  _inherits(T6TriggerVisitor, _antlr4$tree$ParseTre);
  var _super = _createSuper(T6TriggerVisitor);
  function T6TriggerVisitor() {
    _classCallCheck(this, T6TriggerVisitor);
    return _super.apply(this, arguments);
  }
  _createClass(T6TriggerVisitor, [{
    key: "visitParse",
    value:
    // Visit a parse tree produced by T6TriggerParser#parse.
    function visitParse(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#numbersExpr.
  }, {
    key: "visitNumbersExpr",
    value: function visitNumbersExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#comparatorExpr.
  }, {
    key: "visitComparatorExpr",
    value: function visitComparatorExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#complexExpr.
  }, {
    key: "visitComplexExpr",
    value: function visitComplexExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#numberExpr.
  }, {
    key: "visitNumberExpr",
    value: function visitNumberExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#binaryExpr.
  }, {
    key: "visitBinaryExpr",
    value: function visitBinaryExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#parenExpr.
  }, {
    key: "visitParenExpr",
    value: function visitParenExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#countExpr.
  }, {
    key: "visitCountExpr",
    value: function visitCountExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#notExpr.
  }, {
    key: "visitNotExpr",
    value: function visitNotExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#countComplexExpr.
  }, {
    key: "visitCountComplexExpr",
    value: function visitCountComplexExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#valueExpr.
  }, {
    key: "visitValueExpr",
    value: function visitValueExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#emptyExpr.
  }, {
    key: "visitEmptyExpr",
    value: function visitEmptyExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#vehicleImpactExpr.
  }, {
    key: "visitVehicleImpactExpr",
    value: function visitVehicleImpactExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#valuesExpr.
  }, {
    key: "visitValuesExpr",
    value: function visitValuesExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#anyExpr.
  }, {
    key: "visitAnyExpr",
    value: function visitAnyExpr(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#dateTime.
  }, {
    key: "visitDateTime",
    value: function visitDateTime(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#vehicleImpact.
  }, {
    key: "visitVehicleImpact",
    value: function visitVehicleImpact(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#number.
  }, {
    key: "visitNumber",
    value: function visitNumber(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#numbers.
  }, {
    key: "visitNumbers",
    value: function visitNumbers(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#field.
  }, {
    key: "visitField",
    value: function visitField(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#op.
  }, {
    key: "visitOp",
    value: function visitOp(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#comparator.
  }, {
    key: "visitComparator",
    value: function visitComparator(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#binary.
  }, {
    key: "visitBinary",
    value: function visitBinary(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#not.
  }, {
    key: "visitNot",
    value: function visitNot(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#complex.
  }, {
    key: "visitComplex",
    value: function visitComplex(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#count.
  }, {
    key: "visitCount",
    value: function visitCount(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#countComplex.
  }, {
    key: "visitCountComplex",
    value: function visitCountComplex(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#value.
  }, {
    key: "visitValue",
    value: function visitValue(ctx) {
      return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by T6TriggerParser#values.
  }, {
    key: "visitValues",
    value: function visitValues(ctx) {
      return this.visitChildren(ctx);
    }
  }]);
  return T6TriggerVisitor;
}(_antlr.default.tree.ParseTreeVisitor);
exports.default = T6TriggerVisitor;
//# sourceMappingURL=T6TriggerVisitor.js.map