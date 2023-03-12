"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VehicleImpactExprCtx = exports.ValuesExprCtx = exports.ValueExprCtx = exports.ValueCtx = exports.ParseCtx = exports.ParenExprCtx = exports.OpCtx = exports.NumbersExprCtx = exports.NumberExprCtx = exports.NumberCtx = exports.NotExprCtx = exports.FieldCtx = exports.ExprCtx = exports.EmptyExprCtx = exports.ESource = exports.EFieldType = exports.DateTimeCtx = exports.CountExprCtx = exports.CountCtx = exports.CountComplexExprCtx = exports.CountComplexCtx = exports.ComplexExprCtx = exports.ComparatorExprCtx = exports.ComparatorCtx = exports.BinaryExprCtx = exports.AnyExprCtx = void 0;
var _T6TriggerParser = _interopRequireDefault(require("./gen/T6TriggerParser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ParseCtx = /*#__PURE__*/function (_T6TriggerParser$Pars) {
  _inherits(ParseCtx, _T6TriggerParser$Pars);
  var _super = _createSuper(ParseCtx);
  function ParseCtx() {
    _classCallCheck(this, ParseCtx);
    return _super.apply(this, arguments);
  }
  return _createClass(ParseCtx);
}(_T6TriggerParser.default.ParseContext);
exports.ParseCtx = ParseCtx;
var ExprCtx = /*#__PURE__*/function (_T6TriggerParser$Expr) {
  _inherits(ExprCtx, _T6TriggerParser$Expr);
  var _super2 = _createSuper(ExprCtx);
  function ExprCtx() {
    _classCallCheck(this, ExprCtx);
    return _super2.apply(this, arguments);
  }
  return _createClass(ExprCtx);
}(_T6TriggerParser.default.ExprContext);
/** ExprContext alternatives */
exports.ExprCtx = ExprCtx;
var NumbersExprCtx = /*#__PURE__*/function (_T6TriggerParser$Numb) {
  _inherits(NumbersExprCtx, _T6TriggerParser$Numb);
  var _super3 = _createSuper(NumbersExprCtx);
  function NumbersExprCtx() {
    _classCallCheck(this, NumbersExprCtx);
    return _super3.apply(this, arguments);
  }
  return _createClass(NumbersExprCtx);
}(_T6TriggerParser.default.NumbersExprContext);
exports.NumbersExprCtx = NumbersExprCtx;
var ComparatorExprCtx = /*#__PURE__*/function (_T6TriggerParser$Comp) {
  _inherits(ComparatorExprCtx, _T6TriggerParser$Comp);
  var _super4 = _createSuper(ComparatorExprCtx);
  function ComparatorExprCtx() {
    _classCallCheck(this, ComparatorExprCtx);
    return _super4.apply(this, arguments);
  }
  return _createClass(ComparatorExprCtx);
}(_T6TriggerParser.default.ComparatorExprContext);
exports.ComparatorExprCtx = ComparatorExprCtx;
var ComplexExprCtx = /*#__PURE__*/function (_T6TriggerParser$Comp2) {
  _inherits(ComplexExprCtx, _T6TriggerParser$Comp2);
  var _super5 = _createSuper(ComplexExprCtx);
  function ComplexExprCtx() {
    _classCallCheck(this, ComplexExprCtx);
    return _super5.apply(this, arguments);
  }
  return _createClass(ComplexExprCtx);
}(_T6TriggerParser.default.ComplexExprContext);
exports.ComplexExprCtx = ComplexExprCtx;
var NumberExprCtx = /*#__PURE__*/function (_T6TriggerParser$Numb2) {
  _inherits(NumberExprCtx, _T6TriggerParser$Numb2);
  var _super6 = _createSuper(NumberExprCtx);
  function NumberExprCtx() {
    _classCallCheck(this, NumberExprCtx);
    return _super6.apply(this, arguments);
  }
  return _createClass(NumberExprCtx);
}(_T6TriggerParser.default.NumberExprContext);
exports.NumberExprCtx = NumberExprCtx;
var BinaryExprCtx = /*#__PURE__*/function (_T6TriggerParser$Bina) {
  _inherits(BinaryExprCtx, _T6TriggerParser$Bina);
  var _super7 = _createSuper(BinaryExprCtx);
  function BinaryExprCtx() {
    _classCallCheck(this, BinaryExprCtx);
    return _super7.apply(this, arguments);
  }
  return _createClass(BinaryExprCtx);
}(_T6TriggerParser.default.BinaryExprContext);
exports.BinaryExprCtx = BinaryExprCtx;
var ParenExprCtx = /*#__PURE__*/function (_T6TriggerParser$Pare) {
  _inherits(ParenExprCtx, _T6TriggerParser$Pare);
  var _super8 = _createSuper(ParenExprCtx);
  function ParenExprCtx() {
    _classCallCheck(this, ParenExprCtx);
    return _super8.apply(this, arguments);
  }
  return _createClass(ParenExprCtx);
}(_T6TriggerParser.default.ParenExprContext);
exports.ParenExprCtx = ParenExprCtx;
var CountExprCtx = /*#__PURE__*/function (_T6TriggerParser$Coun) {
  _inherits(CountExprCtx, _T6TriggerParser$Coun);
  var _super9 = _createSuper(CountExprCtx);
  function CountExprCtx() {
    _classCallCheck(this, CountExprCtx);
    return _super9.apply(this, arguments);
  }
  return _createClass(CountExprCtx);
}(_T6TriggerParser.default.CountExprContext);
exports.CountExprCtx = CountExprCtx;
var NotExprCtx = /*#__PURE__*/function (_T6TriggerParser$NotE) {
  _inherits(NotExprCtx, _T6TriggerParser$NotE);
  var _super10 = _createSuper(NotExprCtx);
  function NotExprCtx() {
    _classCallCheck(this, NotExprCtx);
    return _super10.apply(this, arguments);
  }
  return _createClass(NotExprCtx);
}(_T6TriggerParser.default.NotExprContext);
exports.NotExprCtx = NotExprCtx;
var CountComplexExprCtx = /*#__PURE__*/function (_T6TriggerParser$Coun2) {
  _inherits(CountComplexExprCtx, _T6TriggerParser$Coun2);
  var _super11 = _createSuper(CountComplexExprCtx);
  function CountComplexExprCtx() {
    _classCallCheck(this, CountComplexExprCtx);
    return _super11.apply(this, arguments);
  }
  return _createClass(CountComplexExprCtx);
}(_T6TriggerParser.default.CountComplexExprContext);
exports.CountComplexExprCtx = CountComplexExprCtx;
var ValueExprCtx = /*#__PURE__*/function (_T6TriggerParser$Valu) {
  _inherits(ValueExprCtx, _T6TriggerParser$Valu);
  var _super12 = _createSuper(ValueExprCtx);
  function ValueExprCtx() {
    _classCallCheck(this, ValueExprCtx);
    return _super12.apply(this, arguments);
  }
  return _createClass(ValueExprCtx);
}(_T6TriggerParser.default.ValueExprContext);
exports.ValueExprCtx = ValueExprCtx;
var EmptyExprCtx = /*#__PURE__*/function (_T6TriggerParser$Empt) {
  _inherits(EmptyExprCtx, _T6TriggerParser$Empt);
  var _super13 = _createSuper(EmptyExprCtx);
  function EmptyExprCtx() {
    _classCallCheck(this, EmptyExprCtx);
    return _super13.apply(this, arguments);
  }
  return _createClass(EmptyExprCtx);
}(_T6TriggerParser.default.EmptyExprContext);
exports.EmptyExprCtx = EmptyExprCtx;
var VehicleImpactExprCtx = /*#__PURE__*/function (_T6TriggerParser$Vehi) {
  _inherits(VehicleImpactExprCtx, _T6TriggerParser$Vehi);
  var _super14 = _createSuper(VehicleImpactExprCtx);
  function VehicleImpactExprCtx() {
    _classCallCheck(this, VehicleImpactExprCtx);
    return _super14.apply(this, arguments);
  }
  return _createClass(VehicleImpactExprCtx);
}(_T6TriggerParser.default.VehicleImpactExprContext);
exports.VehicleImpactExprCtx = VehicleImpactExprCtx;
var ValuesExprCtx = /*#__PURE__*/function (_T6TriggerParser$Valu2) {
  _inherits(ValuesExprCtx, _T6TriggerParser$Valu2);
  var _super15 = _createSuper(ValuesExprCtx);
  function ValuesExprCtx() {
    _classCallCheck(this, ValuesExprCtx);
    return _super15.apply(this, arguments);
  }
  return _createClass(ValuesExprCtx);
}(_T6TriggerParser.default.ValuesExprContext);
exports.ValuesExprCtx = ValuesExprCtx;
var AnyExprCtx = /*#__PURE__*/function (_T6TriggerParser$AnyE) {
  _inherits(AnyExprCtx, _T6TriggerParser$AnyE);
  var _super16 = _createSuper(AnyExprCtx);
  function AnyExprCtx() {
    _classCallCheck(this, AnyExprCtx);
    return _super16.apply(this, arguments);
  }
  return _createClass(AnyExprCtx);
}(_T6TriggerParser.default.AnyExprContext);
/** Accessory */
exports.AnyExprCtx = AnyExprCtx;
var DateTimeCtx = /*#__PURE__*/function (_T6TriggerParser$Date) {
  _inherits(DateTimeCtx, _T6TriggerParser$Date);
  var _super17 = _createSuper(DateTimeCtx);
  function DateTimeCtx() {
    _classCallCheck(this, DateTimeCtx);
    return _super17.apply(this, arguments);
  }
  return _createClass(DateTimeCtx);
}(_T6TriggerParser.default.DateTimeContext);
exports.DateTimeCtx = DateTimeCtx;
var VehicleImpactCtx = /*#__PURE__*/function (_T6TriggerParser$Vehi2) {
  _inherits(VehicleImpactCtx, _T6TriggerParser$Vehi2);
  var _super18 = _createSuper(VehicleImpactCtx);
  function VehicleImpactCtx() {
    _classCallCheck(this, VehicleImpactCtx);
    return _super18.apply(this, arguments);
  }
  return _createClass(VehicleImpactCtx);
}(_T6TriggerParser.default.VehicleImpactContext);
var NumberCtx = /*#__PURE__*/function (_T6TriggerParser$Numb3) {
  _inherits(NumberCtx, _T6TriggerParser$Numb3);
  var _super19 = _createSuper(NumberCtx);
  function NumberCtx() {
    _classCallCheck(this, NumberCtx);
    return _super19.apply(this, arguments);
  }
  return _createClass(NumberCtx);
}(_T6TriggerParser.default.NumberContext);
exports.NumberCtx = NumberCtx;
var NumbersCtx = /*#__PURE__*/function (_T6TriggerParser$Numb4) {
  _inherits(NumbersCtx, _T6TriggerParser$Numb4);
  var _super20 = _createSuper(NumbersCtx);
  function NumbersCtx() {
    _classCallCheck(this, NumbersCtx);
    return _super20.apply(this, arguments);
  }
  return _createClass(NumbersCtx);
}(_T6TriggerParser.default.NumbersContext);
var FieldCtx = /*#__PURE__*/function (_T6TriggerParser$Fiel) {
  _inherits(FieldCtx, _T6TriggerParser$Fiel);
  var _super21 = _createSuper(FieldCtx);
  function FieldCtx() {
    _classCallCheck(this, FieldCtx);
    return _super21.apply(this, arguments);
  }
  return _createClass(FieldCtx);
}(_T6TriggerParser.default.FieldContext);
exports.FieldCtx = FieldCtx;
var OpCtx = /*#__PURE__*/function (_T6TriggerParser$OpCo) {
  _inherits(OpCtx, _T6TriggerParser$OpCo);
  var _super22 = _createSuper(OpCtx);
  function OpCtx() {
    _classCallCheck(this, OpCtx);
    return _super22.apply(this, arguments);
  }
  return _createClass(OpCtx);
}(_T6TriggerParser.default.OpContext);
exports.OpCtx = OpCtx;
var ComparatorCtx = /*#__PURE__*/function (_T6TriggerParser$Comp3) {
  _inherits(ComparatorCtx, _T6TriggerParser$Comp3);
  var _super23 = _createSuper(ComparatorCtx);
  function ComparatorCtx() {
    _classCallCheck(this, ComparatorCtx);
    return _super23.apply(this, arguments);
  }
  return _createClass(ComparatorCtx);
}(_T6TriggerParser.default.ComparatorContext);
exports.ComparatorCtx = ComparatorCtx;
var BinaryCtx = /*#__PURE__*/function (_T6TriggerParser$Bina2) {
  _inherits(BinaryCtx, _T6TriggerParser$Bina2);
  var _super24 = _createSuper(BinaryCtx);
  function BinaryCtx() {
    _classCallCheck(this, BinaryCtx);
    return _super24.apply(this, arguments);
  }
  return _createClass(BinaryCtx);
}(_T6TriggerParser.default.BinaryContext);
var NotCtx = /*#__PURE__*/function (_T6TriggerParser$NotC) {
  _inherits(NotCtx, _T6TriggerParser$NotC);
  var _super25 = _createSuper(NotCtx);
  function NotCtx() {
    _classCallCheck(this, NotCtx);
    return _super25.apply(this, arguments);
  }
  return _createClass(NotCtx);
}(_T6TriggerParser.default.NotContext);
var ComplexCtx = /*#__PURE__*/function (_T6TriggerParser$Comp4) {
  _inherits(ComplexCtx, _T6TriggerParser$Comp4);
  var _super26 = _createSuper(ComplexCtx);
  function ComplexCtx() {
    _classCallCheck(this, ComplexCtx);
    return _super26.apply(this, arguments);
  }
  return _createClass(ComplexCtx);
}(_T6TriggerParser.default.ComplexContext);
var CountCtx = /*#__PURE__*/function (_T6TriggerParser$Coun3) {
  _inherits(CountCtx, _T6TriggerParser$Coun3);
  var _super27 = _createSuper(CountCtx);
  function CountCtx() {
    _classCallCheck(this, CountCtx);
    return _super27.apply(this, arguments);
  }
  return _createClass(CountCtx);
}(_T6TriggerParser.default.CountContext);
exports.CountCtx = CountCtx;
var CountComplexCtx = /*#__PURE__*/function (_T6TriggerParser$Coun4) {
  _inherits(CountComplexCtx, _T6TriggerParser$Coun4);
  var _super28 = _createSuper(CountComplexCtx);
  function CountComplexCtx() {
    _classCallCheck(this, CountComplexCtx);
    return _super28.apply(this, arguments);
  }
  return _createClass(CountComplexCtx);
}(_T6TriggerParser.default.CountComplexContext);
exports.CountComplexCtx = CountComplexCtx;
var ValueCtx = /*#__PURE__*/function (_T6TriggerParser$Valu3) {
  _inherits(ValueCtx, _T6TriggerParser$Valu3);
  var _super29 = _createSuper(ValueCtx);
  function ValueCtx() {
    _classCallCheck(this, ValueCtx);
    return _super29.apply(this, arguments);
  }
  return _createClass(ValueCtx);
}(_T6TriggerParser.default.ValueContext);
exports.ValueCtx = ValueCtx;
var ValuesCtx = /*#__PURE__*/function (_T6TriggerParser$Valu4) {
  _inherits(ValuesCtx, _T6TriggerParser$Valu4);
  var _super30 = _createSuper(ValuesCtx);
  function ValuesCtx() {
    _classCallCheck(this, ValuesCtx);
    return _super30.apply(this, arguments);
  }
  return _createClass(ValuesCtx);
}(_T6TriggerParser.default.ValuesContext);
var EFieldType;
exports.EFieldType = EFieldType;
(function (EFieldType) {
  EFieldType["string"] = "string";
  EFieldType["enum"] = "enum";
  EFieldType["integer"] = "integer";
  EFieldType["timestamp"] = "timestamp";
  EFieldType["complex"] = "complex";
  EFieldType["decimal"] = "decimal";
  EFieldType["enum_list"] = "enum_list";
  EFieldType["injury"] = "injury";
  EFieldType["user"] = "user";
  EFieldType["image"] = "image";
  EFieldType["user_list"] = "user_list";
  EFieldType["icd"] = "icd";
  EFieldType["ais"] = "ais";
  EFieldType["custom"] = "custom";
  EFieldType["vehicleImpactType"] = "vehicleImpactType";
  EFieldType["address"] = "address";
})(EFieldType || (exports.EFieldType = EFieldType = {}));
var ESource;
exports.ESource = ESource;
(function (ESource) {
  ESource["LEXER"] = "Lexer";
  ESource["PARSER"] = "Parser";
  ESource["EVALUATE_VISITOR"] = "EvaluateConditionVisitor";
  ESource["FORMAT_VISITOR"] = "FormatConditionVisitor";
})(ESource || (exports.ESource = ESource = {}));
//# sourceMappingURL=types.js.map