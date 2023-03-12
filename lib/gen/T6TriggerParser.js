"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
var _T6TriggerVisitor = _interopRequireDefault(require("./T6TriggerVisitor.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
var serializedATN = [4, 1, 34, 211, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 113, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 119, 8, 1, 10, 1, 12, 1, 122, 9, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 5, 5, 135, 8, 5, 10, 5, 12, 5, 138, 9, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 3, 8, 147, 8, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 155, 8, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 168, 8, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 180, 8, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 5, 14, 198, 8, 14, 10, 14, 12, 14, 201, 9, 14, 1, 15, 1, 15, 1, 15, 5, 15, 206, 8, 15, 10, 15, 12, 15, 209, 9, 15, 1, 15, 3, 136, 199, 207, 1, 2, 16, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 0, 4, 1, 0, 30, 31, 1, 0, 22, 26, 1, 0, 20, 21, 3, 0, 1, 1, 9, 21, 29, 29, 226, 0, 32, 1, 0, 0, 0, 2, 112, 1, 0, 0, 0, 4, 123, 1, 0, 0, 0, 6, 125, 1, 0, 0, 0, 8, 129, 1, 0, 0, 0, 10, 131, 1, 0, 0, 0, 12, 139, 1, 0, 0, 0, 14, 141, 1, 0, 0, 0, 16, 143, 1, 0, 0, 0, 18, 148, 1, 0, 0, 0, 20, 150, 1, 0, 0, 0, 22, 158, 1, 0, 0, 0, 24, 163, 1, 0, 0, 0, 26, 172, 1, 0, 0, 0, 28, 199, 1, 0, 0, 0, 30, 202, 1, 0, 0, 0, 32, 33, 3, 2, 1, 0, 33, 34, 5, 0, 0, 1, 34, 1, 1, 0, 0, 0, 35, 36, 6, 1, -1, 0, 36, 37, 5, 9, 0, 0, 37, 38, 3, 16, 8, 0, 38, 39, 5, 10, 0, 0, 39, 40, 3, 12, 6, 0, 40, 41, 5, 11, 0, 0, 41, 113, 1, 0, 0, 0, 42, 43, 5, 9, 0, 0, 43, 44, 5, 12, 0, 0, 44, 45, 5, 10, 0, 0, 45, 46, 3, 12, 6, 0, 46, 47, 5, 11, 0, 0, 47, 113, 1, 0, 0, 0, 48, 49, 5, 9, 0, 0, 49, 50, 5, 13, 0, 0, 50, 51, 5, 10, 0, 0, 51, 52, 3, 12, 6, 0, 52, 53, 5, 11, 0, 0, 53, 113, 1, 0, 0, 0, 54, 55, 5, 9, 0, 0, 55, 56, 3, 8, 4, 0, 56, 57, 5, 10, 0, 0, 57, 58, 3, 12, 6, 0, 58, 59, 5, 11, 0, 0, 59, 113, 1, 0, 0, 0, 60, 61, 5, 9, 0, 0, 61, 62, 3, 10, 5, 0, 62, 63, 5, 10, 0, 0, 63, 64, 3, 12, 6, 0, 64, 65, 5, 11, 0, 0, 65, 113, 1, 0, 0, 0, 66, 67, 5, 9, 0, 0, 67, 68, 3, 20, 10, 0, 68, 69, 5, 10, 0, 0, 69, 70, 3, 12, 6, 0, 70, 71, 5, 11, 0, 0, 71, 113, 1, 0, 0, 0, 72, 73, 5, 9, 0, 0, 73, 74, 3, 22, 11, 0, 74, 75, 5, 10, 0, 0, 75, 76, 3, 12, 6, 0, 76, 77, 5, 11, 0, 0, 77, 113, 1, 0, 0, 0, 78, 79, 5, 9, 0, 0, 79, 80, 3, 24, 12, 0, 80, 81, 5, 10, 0, 0, 81, 82, 3, 12, 6, 0, 82, 83, 5, 11, 0, 0, 83, 113, 1, 0, 0, 0, 84, 85, 5, 9, 0, 0, 85, 86, 3, 26, 13, 0, 86, 87, 5, 10, 0, 0, 87, 88, 3, 12, 6, 0, 88, 89, 5, 11, 0, 0, 89, 113, 1, 0, 0, 0, 90, 91, 5, 27, 0, 0, 91, 92, 3, 2, 1, 0, 92, 93, 5, 28, 0, 0, 93, 113, 1, 0, 0, 0, 94, 95, 5, 9, 0, 0, 95, 96, 3, 6, 3, 0, 96, 97, 5, 10, 0, 0, 97, 98, 3, 12, 6, 0, 98, 99, 5, 11, 0, 0, 99, 113, 1, 0, 0, 0, 100, 101, 5, 9, 0, 0, 101, 102, 3, 28, 14, 0, 102, 103, 5, 10, 0, 0, 103, 104, 3, 12, 6, 0, 104, 105, 5, 11, 0, 0, 105, 113, 1, 0, 0, 0, 106, 107, 5, 9, 0, 0, 107, 108, 3, 30, 15, 0, 108, 109, 5, 10, 0, 0, 109, 110, 3, 12, 6, 0, 110, 111, 5, 11, 0, 0, 111, 113, 1, 0, 0, 0, 112, 35, 1, 0, 0, 0, 112, 42, 1, 0, 0, 0, 112, 48, 1, 0, 0, 0, 112, 54, 1, 0, 0, 0, 112, 60, 1, 0, 0, 0, 112, 66, 1, 0, 0, 0, 112, 72, 1, 0, 0, 0, 112, 78, 1, 0, 0, 0, 112, 84, 1, 0, 0, 0, 112, 90, 1, 0, 0, 0, 112, 94, 1, 0, 0, 0, 112, 100, 1, 0, 0, 0, 112, 106, 1, 0, 0, 0, 113, 120, 1, 0, 0, 0, 114, 115, 10, 14, 0, 0, 115, 116, 3, 18, 9, 0, 116, 117, 3, 2, 1, 15, 117, 119, 1, 0, 0, 0, 118, 114, 1, 0, 0, 0, 119, 122, 1, 0, 0, 0, 120, 118, 1, 0, 0, 0, 120, 121, 1, 0, 0, 0, 121, 3, 1, 0, 0, 0, 122, 120, 1, 0, 0, 0, 123, 124, 5, 32, 0, 0, 124, 5, 1, 0, 0, 0, 125, 126, 5, 19, 0, 0, 126, 127, 5, 26, 0, 0, 127, 128, 5, 30, 0, 0, 128, 7, 1, 0, 0, 0, 129, 130, 7, 0, 0, 0, 130, 9, 1, 0, 0, 0, 131, 136, 3, 8, 4, 0, 132, 133, 5, 29, 0, 0, 133, 135, 3, 8, 4, 0, 134, 132, 1, 0, 0, 0, 135, 138, 1, 0, 0, 0, 136, 137, 1, 0, 0, 0, 136, 134, 1, 0, 0, 0, 137, 11, 1, 0, 0, 0, 138, 136, 1, 0, 0, 0, 139, 140, 5, 33, 0, 0, 140, 13, 1, 0, 0, 0, 141, 142, 7, 1, 0, 0, 142, 15, 1, 0, 0, 0, 143, 146, 3, 14, 7, 0, 144, 147, 3, 8, 4, 0, 145, 147, 3, 4, 2, 0, 146, 144, 1, 0, 0, 0, 146, 145, 1, 0, 0, 0, 147, 17, 1, 0, 0, 0, 148, 149, 7, 2, 0, 0, 149, 19, 1, 0, 0, 0, 150, 151, 5, 14, 0, 0, 151, 154, 5, 27, 0, 0, 152, 155, 3, 10, 5, 0, 153, 155, 3, 30, 15, 0, 154, 152, 1, 0, 0, 0, 154, 153, 1, 0, 0, 0, 155, 156, 1, 0, 0, 0, 156, 157, 5, 28, 0, 0, 157, 21, 1, 0, 0, 0, 158, 159, 5, 15, 0, 0, 159, 160, 5, 27, 0, 0, 160, 161, 3, 2, 1, 0, 161, 162, 5, 28, 0, 0, 162, 23, 1, 0, 0, 0, 163, 164, 5, 16, 0, 0, 164, 167, 5, 27, 0, 0, 165, 168, 5, 18, 0, 0, 166, 168, 3, 28, 14, 0, 167, 165, 1, 0, 0, 0, 167, 166, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 170, 5, 28, 0, 0, 170, 171, 3, 16, 8, 0, 171, 25, 1, 0, 0, 0, 172, 173, 5, 17, 0, 0, 173, 179, 5, 27, 0, 0, 174, 180, 3, 2, 1, 0, 175, 176, 5, 18, 0, 0, 176, 177, 3, 12, 6, 0, 177, 178, 3, 2, 1, 0, 178, 180, 1, 0, 0, 0, 179, 174, 1, 0, 0, 0, 179, 175, 1, 0, 0, 0, 180, 181, 1, 0, 0, 0, 181, 182, 5, 28, 0, 0, 182, 183, 3, 16, 8, 0, 183, 27, 1, 0, 0, 0, 184, 198, 8, 3, 0, 0, 185, 198, 3, 8, 4, 0, 186, 198, 3, 14, 7, 0, 187, 198, 5, 33, 0, 0, 188, 198, 5, 27, 0, 0, 189, 198, 5, 28, 0, 0, 190, 198, 5, 2, 0, 0, 191, 198, 5, 3, 0, 0, 192, 198, 5, 4, 0, 0, 193, 198, 5, 5, 0, 0, 194, 198, 5, 6, 0, 0, 195, 198, 5, 7, 0, 0, 196, 198, 5, 8, 0, 0, 197, 184, 1, 0, 0, 0, 197, 185, 1, 0, 0, 0, 197, 186, 1, 0, 0, 0, 197, 187, 1, 0, 0, 0, 197, 188, 1, 0, 0, 0, 197, 189, 1, 0, 0, 0, 197, 190, 1, 0, 0, 0, 197, 191, 1, 0, 0, 0, 197, 192, 1, 0, 0, 0, 197, 193, 1, 0, 0, 0, 197, 194, 1, 0, 0, 0, 197, 195, 1, 0, 0, 0, 197, 196, 1, 0, 0, 0, 198, 201, 1, 0, 0, 0, 199, 200, 1, 0, 0, 0, 199, 197, 1, 0, 0, 0, 200, 29, 1, 0, 0, 0, 201, 199, 1, 0, 0, 0, 202, 207, 3, 28, 14, 0, 203, 204, 5, 29, 0, 0, 204, 206, 3, 28, 14, 0, 205, 203, 1, 0, 0, 0, 206, 209, 1, 0, 0, 0, 207, 208, 1, 0, 0, 0, 207, 205, 1, 0, 0, 0, 208, 31, 1, 0, 0, 0, 209, 207, 1, 0, 0, 0, 10, 112, 120, 136, 146, 154, 167, 179, 197, 199, 207];
var atn = new _antlr.default.atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new _antlr.default.dfa.DFA(ds, index);
});
var sharedContextCache = new _antlr.default.PredictionContextCache();
var T6TriggerParser = /*#__PURE__*/function (_antlr4$Parser) {
  _inherits(T6TriggerParser, _antlr4$Parser);
  var _super = _createSuper(T6TriggerParser);
  function T6TriggerParser(input) {
    var _this;
    _classCallCheck(this, T6TriggerParser);
    _this = _super.call(this, input);
    _this._interp = new _antlr.default.atn.ParserATNSimulator(_assertThisInitialized(_this), atn, decisionsToDFA, sharedContextCache);
    _this.ruleNames = T6TriggerParser.ruleNames;
    _this.literalNames = T6TriggerParser.literalNames;
    _this.symbolicNames = T6TriggerParser.symbolicNames;
    return _this;
  }
  _createClass(T6TriggerParser, [{
    key: "atn",
    get: function get() {
      return atn;
    }
  }, {
    key: "sempred",
    value: function sempred(localctx, ruleIndex, predIndex) {
      switch (ruleIndex) {
        case 1:
          return this.expr_sempred(localctx, predIndex);
        default:
          throw 'No predicate with index:' + ruleIndex;
      }
    }
  }, {
    key: "expr_sempred",
    value: function expr_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 0:
          return this.precpred(this._ctx, 14);
        default:
          throw 'No predicate with index:' + predIndex;
      }
    }
  }, {
    key: "parse",
    value: function parse() {
      var localctx = new ParseContext(this, this._ctx, this.state);
      this.enterRule(localctx, 0, T6TriggerParser.RULE_parse);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.expr(0);
        this.state = 33;
        this.match(T6TriggerParser.EOF);
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "expr",
    value: function expr(_p) {
      if (_p === undefined) {
        _p = 0;
      }
      var _parentctx = this._ctx;
      var _parentState = this.state;
      var localctx = new ExprContext(this, this._ctx, _parentState);
      var _prevctx = localctx;
      var _startState = 2;
      this.enterRecursionRule(localctx, 2, T6TriggerParser.RULE_expr, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 0, this._ctx);
        switch (la_) {
          case 1:
            localctx = new ComparatorExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 36;
            this.match(T6TriggerParser.IF);
            this.state = 37;
            this.comparator();
            this.state = 38;
            this.match(T6TriggerParser.FROM);
            this.state = 39;
            this.field();
            this.state = 40;
            this.match(T6TriggerParser.THEN);
            break;
          case 2:
            localctx = new AnyExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 42;
            this.match(T6TriggerParser.IF);
            this.state = 43;
            this.match(T6TriggerParser.ANY);
            this.state = 44;
            this.match(T6TriggerParser.FROM);
            this.state = 45;
            this.field();
            this.state = 46;
            this.match(T6TriggerParser.THEN);
            break;
          case 3:
            localctx = new EmptyExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 48;
            this.match(T6TriggerParser.IF);
            this.state = 49;
            this.match(T6TriggerParser.EMPTY);
            this.state = 50;
            this.match(T6TriggerParser.FROM);
            this.state = 51;
            this.field();
            this.state = 52;
            this.match(T6TriggerParser.THEN);
            break;
          case 4:
            localctx = new NumberExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 54;
            this.match(T6TriggerParser.IF);
            this.state = 55;
            this.number();
            this.state = 56;
            this.match(T6TriggerParser.FROM);
            this.state = 57;
            this.field();
            this.state = 58;
            this.match(T6TriggerParser.THEN);
            break;
          case 5:
            localctx = new NumbersExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 60;
            this.match(T6TriggerParser.IF);
            this.state = 61;
            this.numbers();
            this.state = 62;
            this.match(T6TriggerParser.FROM);
            this.state = 63;
            this.field();
            this.state = 64;
            this.match(T6TriggerParser.THEN);
            break;
          case 6:
            localctx = new NotExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 66;
            this.match(T6TriggerParser.IF);
            this.state = 67;
            this.not();
            this.state = 68;
            this.match(T6TriggerParser.FROM);
            this.state = 69;
            this.field();
            this.state = 70;
            this.match(T6TriggerParser.THEN);
            break;
          case 7:
            localctx = new ComplexExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 72;
            this.match(T6TriggerParser.IF);
            this.state = 73;
            this.complex();
            this.state = 74;
            this.match(T6TriggerParser.FROM);
            this.state = 75;
            this.field();
            this.state = 76;
            this.match(T6TriggerParser.THEN);
            break;
          case 8:
            localctx = new CountExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 78;
            this.match(T6TriggerParser.IF);
            this.state = 79;
            this.count();
            this.state = 80;
            this.match(T6TriggerParser.FROM);
            this.state = 81;
            this.field();
            this.state = 82;
            this.match(T6TriggerParser.THEN);
            break;
          case 9:
            localctx = new CountComplexExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 84;
            this.match(T6TriggerParser.IF);
            this.state = 85;
            this.countComplex();
            this.state = 86;
            this.match(T6TriggerParser.FROM);
            this.state = 87;
            this.field();
            this.state = 88;
            this.match(T6TriggerParser.THEN);
            break;
          case 10:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 90;
            this.match(T6TriggerParser.LPAREN);
            this.state = 91;
            this.expr(0);
            this.state = 92;
            this.match(T6TriggerParser.RPAREN);
            break;
          case 11:
            localctx = new VehicleImpactExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 94;
            this.match(T6TriggerParser.IF);
            this.state = 95;
            this.vehicleImpact();
            this.state = 96;
            this.match(T6TriggerParser.FROM);
            this.state = 97;
            this.field();
            this.state = 98;
            this.match(T6TriggerParser.THEN);
            break;
          case 12:
            localctx = new ValueExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 100;
            this.match(T6TriggerParser.IF);
            this.state = 101;
            this.value();
            this.state = 102;
            this.match(T6TriggerParser.FROM);
            this.state = 103;
            this.field();
            this.state = 104;
            this.match(T6TriggerParser.THEN);
            break;
          case 13:
            localctx = new ValuesExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 106;
            this.match(T6TriggerParser.IF);
            this.state = 107;
            this.values();
            this.state = 108;
            this.match(T6TriggerParser.FROM);
            this.state = 109;
            this.field();
            this.state = 110;
            this.match(T6TriggerParser.THEN);
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 120;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
        while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new BinaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
            this.pushNewRecursionContext(localctx, _startState, T6TriggerParser.RULE_expr);
            this.state = 114;
            if (!this.precpred(this._ctx, 14)) {
              throw new _antlr.default.error.FailedPredicateException(this, 'this.precpred(this._ctx, 14)');
            }
            this.state = 115;
            this.binary();
            this.state = 116;
            this.expr(15);
          }
          this.state = 122;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
        }
      } catch (error) {
        if (error instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
  }, {
    key: "dateTime",
    value: function dateTime() {
      var localctx = new DateTimeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 4, T6TriggerParser.RULE_dateTime);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(T6TriggerParser.DATE_TIME);
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "vehicleImpact",
    value: function vehicleImpact() {
      var localctx = new VehicleImpactContext(this, this._ctx, this.state);
      this.enterRule(localctx, 6, T6TriggerParser.RULE_vehicleImpact);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(T6TriggerParser.IMPACT_SIDES);
        this.state = 126;
        this.match(T6TriggerParser.EQ);
        this.state = 127;
        this.match(T6TriggerParser.INT);
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "number",
    value: function number() {
      var localctx = new NumberContext(this, this._ctx, this.state);
      this.enterRule(localctx, 8, T6TriggerParser.RULE_number);
      var _la = 0; // Token type
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        _la = this._input.LA(1);
        if (!(_la === 30 || _la === 31)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "numbers",
    value: function numbers() {
      var localctx = new NumbersContext(this, this._ctx, this.state);
      this.enterRule(localctx, 10, T6TriggerParser.RULE_numbers);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.number();
        this.state = 136;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
        while (_alt != 1 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1 + 1) {
            this.state = 132;
            this.match(T6TriggerParser.SEPARATOR);
            this.state = 133;
            this.number();
          }
          this.state = 138;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
        }
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "field",
    value: function field() {
      var localctx = new FieldContext(this, this._ctx, this.state);
      this.enterRule(localctx, 12, T6TriggerParser.RULE_field);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(T6TriggerParser.IDENTIFIER);
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "op",
    value: function op() {
      var localctx = new OpContext(this, this._ctx, this.state);
      this.enterRule(localctx, 14, T6TriggerParser.RULE_op);
      var _la = 0; // Token type
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) == 0 && (1 << _la & 130023424) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "comparator",
    value: function comparator() {
      var localctx = new ComparatorContext(this, this._ctx, this.state);
      this.enterRule(localctx, 16, T6TriggerParser.RULE_comparator);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.op();
        this.state = 146;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 30:
          case 31:
            this.state = 144;
            this.number();
            break;
          case 32:
            this.state = 145;
            this.dateTime();
            break;
          default:
            throw new _antlr.default.error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "binary",
    value: function binary() {
      var localctx = new BinaryContext(this, this._ctx, this.state);
      this.enterRule(localctx, 18, T6TriggerParser.RULE_binary);
      var _la = 0; // Token type
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        _la = this._input.LA(1);
        if (!(_la === 20 || _la === 21)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "not",
    value: function not() {
      var localctx = new NotContext(this, this._ctx, this.state);
      this.enterRule(localctx, 20, T6TriggerParser.RULE_not);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(T6TriggerParser.NOT);
        this.state = 151;
        this.match(T6TriggerParser.LPAREN);
        this.state = 154;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
        switch (la_) {
          case 1:
            this.state = 152;
            this.numbers();
            break;
          case 2:
            this.state = 153;
            this.values();
            break;
        }
        this.state = 156;
        this.match(T6TriggerParser.RPAREN);
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "complex",
    value: function complex() {
      var localctx = new ComplexContext(this, this._ctx, this.state);
      this.enterRule(localctx, 22, T6TriggerParser.RULE_complex);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(T6TriggerParser.COMPLEX);
        this.state = 159;
        this.match(T6TriggerParser.LPAREN);
        this.state = 160;
        this.expr(0);
        this.state = 161;
        this.match(T6TriggerParser.RPAREN);
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "count",
    value: function count() {
      var localctx = new CountContext(this, this._ctx, this.state);
      this.enterRule(localctx, 24, T6TriggerParser.RULE_count);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(T6TriggerParser.COUNT);
        this.state = 164;
        this.match(T6TriggerParser.LPAREN);
        this.state = 167;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 18:
            this.state = 165;
            this.match(T6TriggerParser.DISTINCT);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 22:
          case 23:
          case 24:
          case 25:
          case 26:
          case 27:
          case 28:
          case 30:
          case 31:
          case 32:
          case 33:
          case 34:
            this.state = 166;
            this.value();
            break;
          default:
            throw new _antlr.default.error.NoViableAltException(this);
        }
        this.state = 169;
        this.match(T6TriggerParser.RPAREN);
        this.state = 170;
        this.comparator();
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "countComplex",
    value: function countComplex() {
      var localctx = new CountComplexContext(this, this._ctx, this.state);
      this.enterRule(localctx, 26, T6TriggerParser.RULE_countComplex);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(T6TriggerParser.COUNT_COMPLEX);
        this.state = 173;
        this.match(T6TriggerParser.LPAREN);
        this.state = 179;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 9:
          case 27:
            this.state = 174;
            this.expr(0);
            break;
          case 18:
            this.state = 175;
            this.match(T6TriggerParser.DISTINCT);
            this.state = 176;
            this.field();
            this.state = 177;
            this.expr(0);
            break;
          default:
            throw new _antlr.default.error.NoViableAltException(this);
        }
        this.state = 181;
        this.match(T6TriggerParser.RPAREN);
        this.state = 182;
        this.comparator();
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "value",
    value: function value() {
      var localctx = new ValueContext(this, this._ctx, this.state);
      this.enterRule(localctx, 28, T6TriggerParser.RULE_value);
      var _la = 0; // Token type
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
        while (_alt != 1 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1 + 1) {
            this.state = 197;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
            switch (la_) {
              case 1:
                this.state = 184;
                _la = this._input.LA(1);
                if (_la <= 0 || (_la & ~0x1f) == 0 && (1 << _la & 541064706) !== 0) {
                  this._errHandler.recoverInline(this);
                } else {
                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                break;
              case 2:
                this.state = 185;
                this.number();
                break;
              case 3:
                this.state = 186;
                this.op();
                break;
              case 4:
                this.state = 187;
                this.match(T6TriggerParser.IDENTIFIER);
                break;
              case 5:
                this.state = 188;
                this.match(T6TriggerParser.LPAREN);
                break;
              case 6:
                this.state = 189;
                this.match(T6TriggerParser.RPAREN);
                break;
              case 7:
                this.state = 190;
                this.match(T6TriggerParser.T__1);
                break;
              case 8:
                this.state = 191;
                this.match(T6TriggerParser.T__2);
                break;
              case 9:
                this.state = 192;
                this.match(T6TriggerParser.T__3);
                break;
              case 10:
                this.state = 193;
                this.match(T6TriggerParser.T__4);
                break;
              case 11:
                this.state = 194;
                this.match(T6TriggerParser.T__5);
                break;
              case 12:
                this.state = 195;
                this.match(T6TriggerParser.T__6);
                break;
              case 13:
                this.state = 196;
                this.match(T6TriggerParser.T__7);
                break;
            }
          }
          this.state = 201;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
        }
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "values",
    value: function values() {
      var localctx = new ValuesContext(this, this._ctx, this.state);
      this.enterRule(localctx, 30, T6TriggerParser.RULE_values);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.value();
        this.state = 207;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
        while (_alt != 1 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1 + 1) {
            this.state = 203;
            this.match(T6TriggerParser.SEPARATOR);
            this.state = 204;
            this.value();
          }
          this.state = 209;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
        }
      } catch (re) {
        if (re instanceof _antlr.default.error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }]);
  return T6TriggerParser;
}(_antlr.default.Parser);
exports.default = T6TriggerParser;
_defineProperty(T6TriggerParser, "grammarFileName", 'java-escape');
_defineProperty(T6TriggerParser, "literalNames", [null, "'\\u0024'", "'-'", "'/'", "'\\u00B0'", "'\\u002B'", "'\\u0025'", "'\\u0026'", "'.'", "'$IF'", "'$FROM'", "'$THEN'", "'$ANY'", "'$EMPTY'", "'$NOT'", "'$COMPLEX'", "'$COUNT'", "'$COUNT_COMPLEX'", "'$DISTINCT'", "'impactSides'", "'$AND'", "'$OR'", "'>'", "'>='", "'<'", "'<='", "'='", "'('", "')'"]);
_defineProperty(T6TriggerParser, "symbolicNames", [null, null, null, null, null, null, null, null, null, 'IF', 'FROM', 'THEN', 'ANY', 'EMPTY', 'NOT', 'COMPLEX', 'COUNT', 'COUNT_COMPLEX', 'DISTINCT', 'IMPACT_SIDES', 'AND', 'OR', 'GT', 'GE', 'LT', 'LE', 'EQ', 'LPAREN', 'RPAREN', 'SEPARATOR', 'INT', 'DECIMAL', 'DATE_TIME', 'IDENTIFIER', 'WS']);
_defineProperty(T6TriggerParser, "ruleNames", ['parse', 'expr', 'dateTime', 'vehicleImpact', 'number', 'numbers', 'field', 'op', 'comparator', 'binary', 'not', 'complex', 'count', 'countComplex', 'value', 'values']);
T6TriggerParser.EOF = _antlr.default.Token.EOF;
T6TriggerParser.T__0 = 1;
T6TriggerParser.T__1 = 2;
T6TriggerParser.T__2 = 3;
T6TriggerParser.T__3 = 4;
T6TriggerParser.T__4 = 5;
T6TriggerParser.T__5 = 6;
T6TriggerParser.T__6 = 7;
T6TriggerParser.T__7 = 8;
T6TriggerParser.IF = 9;
T6TriggerParser.FROM = 10;
T6TriggerParser.THEN = 11;
T6TriggerParser.ANY = 12;
T6TriggerParser.EMPTY = 13;
T6TriggerParser.NOT = 14;
T6TriggerParser.COMPLEX = 15;
T6TriggerParser.COUNT = 16;
T6TriggerParser.COUNT_COMPLEX = 17;
T6TriggerParser.DISTINCT = 18;
T6TriggerParser.IMPACT_SIDES = 19;
T6TriggerParser.AND = 20;
T6TriggerParser.OR = 21;
T6TriggerParser.GT = 22;
T6TriggerParser.GE = 23;
T6TriggerParser.LT = 24;
T6TriggerParser.LE = 25;
T6TriggerParser.EQ = 26;
T6TriggerParser.LPAREN = 27;
T6TriggerParser.RPAREN = 28;
T6TriggerParser.SEPARATOR = 29;
T6TriggerParser.INT = 30;
T6TriggerParser.DECIMAL = 31;
T6TriggerParser.DATE_TIME = 32;
T6TriggerParser.IDENTIFIER = 33;
T6TriggerParser.WS = 34;
T6TriggerParser.RULE_parse = 0;
T6TriggerParser.RULE_expr = 1;
T6TriggerParser.RULE_dateTime = 2;
T6TriggerParser.RULE_vehicleImpact = 3;
T6TriggerParser.RULE_number = 4;
T6TriggerParser.RULE_numbers = 5;
T6TriggerParser.RULE_field = 6;
T6TriggerParser.RULE_op = 7;
T6TriggerParser.RULE_comparator = 8;
T6TriggerParser.RULE_binary = 9;
T6TriggerParser.RULE_not = 10;
T6TriggerParser.RULE_complex = 11;
T6TriggerParser.RULE_count = 12;
T6TriggerParser.RULE_countComplex = 13;
T6TriggerParser.RULE_value = 14;
T6TriggerParser.RULE_values = 15;
var ParseContext = /*#__PURE__*/function (_antlr4$ParserRuleCon) {
  _inherits(ParseContext, _antlr4$ParserRuleCon);
  var _super2 = _createSuper(ParseContext);
  function ParseContext(parser, parent, invokingState) {
    var _this2;
    _classCallCheck(this, ParseContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this2 = _super2.call(this, parent, invokingState);
    _this2.parser = parser;
    _this2.ruleIndex = T6TriggerParser.RULE_parse;
    return _this2;
  }
  _createClass(ParseContext, [{
    key: "expr",
    value: function expr() {
      return this.getTypedRuleContext(ExprContext, 0);
    }
  }, {
    key: "EOF",
    value: function EOF() {
      return this.getToken(T6TriggerParser.EOF, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitParse(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ParseContext;
}(_antlr.default.ParserRuleContext);
var ExprContext = /*#__PURE__*/function (_antlr4$ParserRuleCon2) {
  _inherits(ExprContext, _antlr4$ParserRuleCon2);
  var _super3 = _createSuper(ExprContext);
  function ExprContext(parser, parent, invokingState) {
    var _this3;
    _classCallCheck(this, ExprContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this3 = _super3.call(this, parent, invokingState);
    _this3.parser = parser;
    _this3.ruleIndex = T6TriggerParser.RULE_expr;
    return _this3;
  }
  _createClass(ExprContext, [{
    key: "copyFrom",
    value: function copyFrom(ctx) {
      _get(_getPrototypeOf(ExprContext.prototype), "copyFrom", this).call(this, ctx);
    }
  }]);
  return ExprContext;
}(_antlr.default.ParserRuleContext);
var NumbersExprContext = /*#__PURE__*/function (_ExprContext) {
  _inherits(NumbersExprContext, _ExprContext);
  var _super4 = _createSuper(NumbersExprContext);
  function NumbersExprContext(parser, ctx) {
    var _thisSuper, _this4;
    _classCallCheck(this, NumbersExprContext);
    _this4 = _super4.call(this, parser);
    _get((_thisSuper = _assertThisInitialized(_this4), _getPrototypeOf(NumbersExprContext.prototype)), "copyFrom", _thisSuper).call(_thisSuper, ctx);
    return _this4;
  }
  _createClass(NumbersExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "numbers",
    value: function numbers() {
      return this.getTypedRuleContext(NumbersContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitNumbersExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return NumbersExprContext;
}(ExprContext);
T6TriggerParser.NumbersExprContext = NumbersExprContext;
var ComparatorExprContext = /*#__PURE__*/function (_ExprContext2) {
  _inherits(ComparatorExprContext, _ExprContext2);
  var _super5 = _createSuper(ComparatorExprContext);
  function ComparatorExprContext(parser, ctx) {
    var _thisSuper2, _this5;
    _classCallCheck(this, ComparatorExprContext);
    _this5 = _super5.call(this, parser);
    _get((_thisSuper2 = _assertThisInitialized(_this5), _getPrototypeOf(ComparatorExprContext.prototype)), "copyFrom", _thisSuper2).call(_thisSuper2, ctx);
    return _this5;
  }
  _createClass(ComparatorExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "comparator",
    value: function comparator() {
      return this.getTypedRuleContext(ComparatorContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitComparatorExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ComparatorExprContext;
}(ExprContext);
T6TriggerParser.ComparatorExprContext = ComparatorExprContext;
var ComplexExprContext = /*#__PURE__*/function (_ExprContext3) {
  _inherits(ComplexExprContext, _ExprContext3);
  var _super6 = _createSuper(ComplexExprContext);
  function ComplexExprContext(parser, ctx) {
    var _thisSuper3, _this6;
    _classCallCheck(this, ComplexExprContext);
    _this6 = _super6.call(this, parser);
    _get((_thisSuper3 = _assertThisInitialized(_this6), _getPrototypeOf(ComplexExprContext.prototype)), "copyFrom", _thisSuper3).call(_thisSuper3, ctx);
    return _this6;
  }
  _createClass(ComplexExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "complex",
    value: function complex() {
      return this.getTypedRuleContext(ComplexContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitComplexExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ComplexExprContext;
}(ExprContext);
T6TriggerParser.ComplexExprContext = ComplexExprContext;
var NumberExprContext = /*#__PURE__*/function (_ExprContext4) {
  _inherits(NumberExprContext, _ExprContext4);
  var _super7 = _createSuper(NumberExprContext);
  function NumberExprContext(parser, ctx) {
    var _thisSuper4, _this7;
    _classCallCheck(this, NumberExprContext);
    _this7 = _super7.call(this, parser);
    _get((_thisSuper4 = _assertThisInitialized(_this7), _getPrototypeOf(NumberExprContext.prototype)), "copyFrom", _thisSuper4).call(_thisSuper4, ctx);
    return _this7;
  }
  _createClass(NumberExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "number",
    value: function number() {
      return this.getTypedRuleContext(NumberContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitNumberExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return NumberExprContext;
}(ExprContext);
T6TriggerParser.NumberExprContext = NumberExprContext;
var BinaryExprContext = /*#__PURE__*/function (_ExprContext5) {
  _inherits(BinaryExprContext, _ExprContext5);
  var _super8 = _createSuper(BinaryExprContext);
  function BinaryExprContext(parser, ctx) {
    var _thisSuper5, _this8;
    _classCallCheck(this, BinaryExprContext);
    _this8 = _super8.call(this, parser);
    _defineProperty(_assertThisInitialized(_this8), "expr", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ExprContext);
      } else {
        return this.getTypedRuleContext(ExprContext, i);
      }
    });
    _get((_thisSuper5 = _assertThisInitialized(_this8), _getPrototypeOf(BinaryExprContext.prototype)), "copyFrom", _thisSuper5).call(_thisSuper5, ctx);
    return _this8;
  }
  _createClass(BinaryExprContext, [{
    key: "binary",
    value: function binary() {
      return this.getTypedRuleContext(BinaryContext, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitBinaryExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return BinaryExprContext;
}(ExprContext);
T6TriggerParser.BinaryExprContext = BinaryExprContext;
var ParenExprContext = /*#__PURE__*/function (_ExprContext6) {
  _inherits(ParenExprContext, _ExprContext6);
  var _super9 = _createSuper(ParenExprContext);
  function ParenExprContext(parser, ctx) {
    var _thisSuper6, _this9;
    _classCallCheck(this, ParenExprContext);
    _this9 = _super9.call(this, parser);
    _get((_thisSuper6 = _assertThisInitialized(_this9), _getPrototypeOf(ParenExprContext.prototype)), "copyFrom", _thisSuper6).call(_thisSuper6, ctx);
    return _this9;
  }
  _createClass(ParenExprContext, [{
    key: "LPAREN",
    value: function LPAREN() {
      return this.getToken(T6TriggerParser.LPAREN, 0);
    }
  }, {
    key: "expr",
    value: function expr() {
      return this.getTypedRuleContext(ExprContext, 0);
    }
  }, {
    key: "RPAREN",
    value: function RPAREN() {
      return this.getToken(T6TriggerParser.RPAREN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitParenExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ParenExprContext;
}(ExprContext);
T6TriggerParser.ParenExprContext = ParenExprContext;
var CountExprContext = /*#__PURE__*/function (_ExprContext7) {
  _inherits(CountExprContext, _ExprContext7);
  var _super10 = _createSuper(CountExprContext);
  function CountExprContext(parser, ctx) {
    var _thisSuper7, _this10;
    _classCallCheck(this, CountExprContext);
    _this10 = _super10.call(this, parser);
    _get((_thisSuper7 = _assertThisInitialized(_this10), _getPrototypeOf(CountExprContext.prototype)), "copyFrom", _thisSuper7).call(_thisSuper7, ctx);
    return _this10;
  }
  _createClass(CountExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "count",
    value: function count() {
      return this.getTypedRuleContext(CountContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitCountExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return CountExprContext;
}(ExprContext);
T6TriggerParser.CountExprContext = CountExprContext;
var NotExprContext = /*#__PURE__*/function (_ExprContext8) {
  _inherits(NotExprContext, _ExprContext8);
  var _super11 = _createSuper(NotExprContext);
  function NotExprContext(parser, ctx) {
    var _thisSuper8, _this11;
    _classCallCheck(this, NotExprContext);
    _this11 = _super11.call(this, parser);
    _get((_thisSuper8 = _assertThisInitialized(_this11), _getPrototypeOf(NotExprContext.prototype)), "copyFrom", _thisSuper8).call(_thisSuper8, ctx);
    return _this11;
  }
  _createClass(NotExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "not",
    value: function not() {
      return this.getTypedRuleContext(NotContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitNotExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return NotExprContext;
}(ExprContext);
T6TriggerParser.NotExprContext = NotExprContext;
var CountComplexExprContext = /*#__PURE__*/function (_ExprContext9) {
  _inherits(CountComplexExprContext, _ExprContext9);
  var _super12 = _createSuper(CountComplexExprContext);
  function CountComplexExprContext(parser, ctx) {
    var _thisSuper9, _this12;
    _classCallCheck(this, CountComplexExprContext);
    _this12 = _super12.call(this, parser);
    _get((_thisSuper9 = _assertThisInitialized(_this12), _getPrototypeOf(CountComplexExprContext.prototype)), "copyFrom", _thisSuper9).call(_thisSuper9, ctx);
    return _this12;
  }
  _createClass(CountComplexExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "countComplex",
    value: function countComplex() {
      return this.getTypedRuleContext(CountComplexContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitCountComplexExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return CountComplexExprContext;
}(ExprContext);
T6TriggerParser.CountComplexExprContext = CountComplexExprContext;
var ValueExprContext = /*#__PURE__*/function (_ExprContext10) {
  _inherits(ValueExprContext, _ExprContext10);
  var _super13 = _createSuper(ValueExprContext);
  function ValueExprContext(parser, ctx) {
    var _thisSuper10, _this13;
    _classCallCheck(this, ValueExprContext);
    _this13 = _super13.call(this, parser);
    _get((_thisSuper10 = _assertThisInitialized(_this13), _getPrototypeOf(ValueExprContext.prototype)), "copyFrom", _thisSuper10).call(_thisSuper10, ctx);
    return _this13;
  }
  _createClass(ValueExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "value",
    value: function value() {
      return this.getTypedRuleContext(ValueContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitValueExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ValueExprContext;
}(ExprContext);
T6TriggerParser.ValueExprContext = ValueExprContext;
var EmptyExprContext = /*#__PURE__*/function (_ExprContext11) {
  _inherits(EmptyExprContext, _ExprContext11);
  var _super14 = _createSuper(EmptyExprContext);
  function EmptyExprContext(parser, ctx) {
    var _thisSuper11, _this14;
    _classCallCheck(this, EmptyExprContext);
    _this14 = _super14.call(this, parser);
    _get((_thisSuper11 = _assertThisInitialized(_this14), _getPrototypeOf(EmptyExprContext.prototype)), "copyFrom", _thisSuper11).call(_thisSuper11, ctx);
    return _this14;
  }
  _createClass(EmptyExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "EMPTY",
    value: function EMPTY() {
      return this.getToken(T6TriggerParser.EMPTY, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitEmptyExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return EmptyExprContext;
}(ExprContext);
T6TriggerParser.EmptyExprContext = EmptyExprContext;
var VehicleImpactExprContext = /*#__PURE__*/function (_ExprContext12) {
  _inherits(VehicleImpactExprContext, _ExprContext12);
  var _super15 = _createSuper(VehicleImpactExprContext);
  function VehicleImpactExprContext(parser, ctx) {
    var _thisSuper12, _this15;
    _classCallCheck(this, VehicleImpactExprContext);
    _this15 = _super15.call(this, parser);
    _get((_thisSuper12 = _assertThisInitialized(_this15), _getPrototypeOf(VehicleImpactExprContext.prototype)), "copyFrom", _thisSuper12).call(_thisSuper12, ctx);
    return _this15;
  }
  _createClass(VehicleImpactExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "vehicleImpact",
    value: function vehicleImpact() {
      return this.getTypedRuleContext(VehicleImpactContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitVehicleImpactExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return VehicleImpactExprContext;
}(ExprContext);
T6TriggerParser.VehicleImpactExprContext = VehicleImpactExprContext;
var ValuesExprContext = /*#__PURE__*/function (_ExprContext13) {
  _inherits(ValuesExprContext, _ExprContext13);
  var _super16 = _createSuper(ValuesExprContext);
  function ValuesExprContext(parser, ctx) {
    var _thisSuper13, _this16;
    _classCallCheck(this, ValuesExprContext);
    _this16 = _super16.call(this, parser);
    _get((_thisSuper13 = _assertThisInitialized(_this16), _getPrototypeOf(ValuesExprContext.prototype)), "copyFrom", _thisSuper13).call(_thisSuper13, ctx);
    return _this16;
  }
  _createClass(ValuesExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "values",
    value: function values() {
      return this.getTypedRuleContext(ValuesContext, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitValuesExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ValuesExprContext;
}(ExprContext);
T6TriggerParser.ValuesExprContext = ValuesExprContext;
var AnyExprContext = /*#__PURE__*/function (_ExprContext14) {
  _inherits(AnyExprContext, _ExprContext14);
  var _super17 = _createSuper(AnyExprContext);
  function AnyExprContext(parser, ctx) {
    var _thisSuper14, _this17;
    _classCallCheck(this, AnyExprContext);
    _this17 = _super17.call(this, parser);
    _get((_thisSuper14 = _assertThisInitialized(_this17), _getPrototypeOf(AnyExprContext.prototype)), "copyFrom", _thisSuper14).call(_thisSuper14, ctx);
    return _this17;
  }
  _createClass(AnyExprContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(T6TriggerParser.IF, 0);
    }
  }, {
    key: "ANY",
    value: function ANY() {
      return this.getToken(T6TriggerParser.ANY, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(T6TriggerParser.FROM, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "THEN",
    value: function THEN() {
      return this.getToken(T6TriggerParser.THEN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitAnyExpr(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return AnyExprContext;
}(ExprContext);
T6TriggerParser.AnyExprContext = AnyExprContext;
var DateTimeContext = /*#__PURE__*/function (_antlr4$ParserRuleCon3) {
  _inherits(DateTimeContext, _antlr4$ParserRuleCon3);
  var _super18 = _createSuper(DateTimeContext);
  function DateTimeContext(parser, parent, invokingState) {
    var _this18;
    _classCallCheck(this, DateTimeContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this18 = _super18.call(this, parent, invokingState);
    _this18.parser = parser;
    _this18.ruleIndex = T6TriggerParser.RULE_dateTime;
    return _this18;
  }
  _createClass(DateTimeContext, [{
    key: "DATE_TIME",
    value: function DATE_TIME() {
      return this.getToken(T6TriggerParser.DATE_TIME, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitDateTime(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return DateTimeContext;
}(_antlr.default.ParserRuleContext);
var VehicleImpactContext = /*#__PURE__*/function (_antlr4$ParserRuleCon4) {
  _inherits(VehicleImpactContext, _antlr4$ParserRuleCon4);
  var _super19 = _createSuper(VehicleImpactContext);
  function VehicleImpactContext(parser, parent, invokingState) {
    var _this19;
    _classCallCheck(this, VehicleImpactContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this19 = _super19.call(this, parent, invokingState);
    _this19.parser = parser;
    _this19.ruleIndex = T6TriggerParser.RULE_vehicleImpact;
    return _this19;
  }
  _createClass(VehicleImpactContext, [{
    key: "IMPACT_SIDES",
    value: function IMPACT_SIDES() {
      return this.getToken(T6TriggerParser.IMPACT_SIDES, 0);
    }
  }, {
    key: "EQ",
    value: function EQ() {
      return this.getToken(T6TriggerParser.EQ, 0);
    }
  }, {
    key: "INT",
    value: function INT() {
      return this.getToken(T6TriggerParser.INT, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitVehicleImpact(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return VehicleImpactContext;
}(_antlr.default.ParserRuleContext);
var NumberContext = /*#__PURE__*/function (_antlr4$ParserRuleCon5) {
  _inherits(NumberContext, _antlr4$ParserRuleCon5);
  var _super20 = _createSuper(NumberContext);
  function NumberContext(parser, parent, invokingState) {
    var _this20;
    _classCallCheck(this, NumberContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this20 = _super20.call(this, parent, invokingState);
    _this20.parser = parser;
    _this20.ruleIndex = T6TriggerParser.RULE_number;
    return _this20;
  }
  _createClass(NumberContext, [{
    key: "INT",
    value: function INT() {
      return this.getToken(T6TriggerParser.INT, 0);
    }
  }, {
    key: "DECIMAL",
    value: function DECIMAL() {
      return this.getToken(T6TriggerParser.DECIMAL, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitNumber(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return NumberContext;
}(_antlr.default.ParserRuleContext);
var NumbersContext = /*#__PURE__*/function (_antlr4$ParserRuleCon6) {
  _inherits(NumbersContext, _antlr4$ParserRuleCon6);
  var _super21 = _createSuper(NumbersContext);
  function NumbersContext(parser, parent, invokingState) {
    var _this21;
    _classCallCheck(this, NumbersContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this21 = _super21.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this21), "number", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(NumberContext);
      } else {
        return this.getTypedRuleContext(NumberContext, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this21), "SEPARATOR", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.SEPARATOR);
      } else {
        return this.getToken(T6TriggerParser.SEPARATOR, i);
      }
    });
    _this21.parser = parser;
    _this21.ruleIndex = T6TriggerParser.RULE_numbers;
    return _this21;
  }
  _createClass(NumbersContext, [{
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitNumbers(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return NumbersContext;
}(_antlr.default.ParserRuleContext);
var FieldContext = /*#__PURE__*/function (_antlr4$ParserRuleCon7) {
  _inherits(FieldContext, _antlr4$ParserRuleCon7);
  var _super22 = _createSuper(FieldContext);
  function FieldContext(parser, parent, invokingState) {
    var _this22;
    _classCallCheck(this, FieldContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this22 = _super22.call(this, parent, invokingState);
    _this22.parser = parser;
    _this22.ruleIndex = T6TriggerParser.RULE_field;
    return _this22;
  }
  _createClass(FieldContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(T6TriggerParser.IDENTIFIER, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitField(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return FieldContext;
}(_antlr.default.ParserRuleContext);
var OpContext = /*#__PURE__*/function (_antlr4$ParserRuleCon8) {
  _inherits(OpContext, _antlr4$ParserRuleCon8);
  var _super23 = _createSuper(OpContext);
  function OpContext(parser, parent, invokingState) {
    var _this23;
    _classCallCheck(this, OpContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this23 = _super23.call(this, parent, invokingState);
    _this23.parser = parser;
    _this23.ruleIndex = T6TriggerParser.RULE_op;
    return _this23;
  }
  _createClass(OpContext, [{
    key: "GT",
    value: function GT() {
      return this.getToken(T6TriggerParser.GT, 0);
    }
  }, {
    key: "GE",
    value: function GE() {
      return this.getToken(T6TriggerParser.GE, 0);
    }
  }, {
    key: "LT",
    value: function LT() {
      return this.getToken(T6TriggerParser.LT, 0);
    }
  }, {
    key: "LE",
    value: function LE() {
      return this.getToken(T6TriggerParser.LE, 0);
    }
  }, {
    key: "EQ",
    value: function EQ() {
      return this.getToken(T6TriggerParser.EQ, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitOp(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return OpContext;
}(_antlr.default.ParserRuleContext);
var ComparatorContext = /*#__PURE__*/function (_antlr4$ParserRuleCon9) {
  _inherits(ComparatorContext, _antlr4$ParserRuleCon9);
  var _super24 = _createSuper(ComparatorContext);
  function ComparatorContext(parser, parent, invokingState) {
    var _this24;
    _classCallCheck(this, ComparatorContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this24 = _super24.call(this, parent, invokingState);
    _this24.parser = parser;
    _this24.ruleIndex = T6TriggerParser.RULE_comparator;
    return _this24;
  }
  _createClass(ComparatorContext, [{
    key: "op",
    value: function op() {
      return this.getTypedRuleContext(OpContext, 0);
    }
  }, {
    key: "number",
    value: function number() {
      return this.getTypedRuleContext(NumberContext, 0);
    }
  }, {
    key: "dateTime",
    value: function dateTime() {
      return this.getTypedRuleContext(DateTimeContext, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitComparator(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ComparatorContext;
}(_antlr.default.ParserRuleContext);
var BinaryContext = /*#__PURE__*/function (_antlr4$ParserRuleCon10) {
  _inherits(BinaryContext, _antlr4$ParserRuleCon10);
  var _super25 = _createSuper(BinaryContext);
  function BinaryContext(parser, parent, invokingState) {
    var _this25;
    _classCallCheck(this, BinaryContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this25 = _super25.call(this, parent, invokingState);
    _this25.parser = parser;
    _this25.ruleIndex = T6TriggerParser.RULE_binary;
    return _this25;
  }
  _createClass(BinaryContext, [{
    key: "AND",
    value: function AND() {
      return this.getToken(T6TriggerParser.AND, 0);
    }
  }, {
    key: "OR",
    value: function OR() {
      return this.getToken(T6TriggerParser.OR, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitBinary(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return BinaryContext;
}(_antlr.default.ParserRuleContext);
var NotContext = /*#__PURE__*/function (_antlr4$ParserRuleCon11) {
  _inherits(NotContext, _antlr4$ParserRuleCon11);
  var _super26 = _createSuper(NotContext);
  function NotContext(parser, parent, invokingState) {
    var _this26;
    _classCallCheck(this, NotContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this26 = _super26.call(this, parent, invokingState);
    _this26.parser = parser;
    _this26.ruleIndex = T6TriggerParser.RULE_not;
    return _this26;
  }
  _createClass(NotContext, [{
    key: "NOT",
    value: function NOT() {
      return this.getToken(T6TriggerParser.NOT, 0);
    }
  }, {
    key: "LPAREN",
    value: function LPAREN() {
      return this.getToken(T6TriggerParser.LPAREN, 0);
    }
  }, {
    key: "RPAREN",
    value: function RPAREN() {
      return this.getToken(T6TriggerParser.RPAREN, 0);
    }
  }, {
    key: "numbers",
    value: function numbers() {
      return this.getTypedRuleContext(NumbersContext, 0);
    }
  }, {
    key: "values",
    value: function values() {
      return this.getTypedRuleContext(ValuesContext, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitNot(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return NotContext;
}(_antlr.default.ParserRuleContext);
var ComplexContext = /*#__PURE__*/function (_antlr4$ParserRuleCon12) {
  _inherits(ComplexContext, _antlr4$ParserRuleCon12);
  var _super27 = _createSuper(ComplexContext);
  function ComplexContext(parser, parent, invokingState) {
    var _this27;
    _classCallCheck(this, ComplexContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this27 = _super27.call(this, parent, invokingState);
    _this27.parser = parser;
    _this27.ruleIndex = T6TriggerParser.RULE_complex;
    return _this27;
  }
  _createClass(ComplexContext, [{
    key: "COMPLEX",
    value: function COMPLEX() {
      return this.getToken(T6TriggerParser.COMPLEX, 0);
    }
  }, {
    key: "LPAREN",
    value: function LPAREN() {
      return this.getToken(T6TriggerParser.LPAREN, 0);
    }
  }, {
    key: "expr",
    value: function expr() {
      return this.getTypedRuleContext(ExprContext, 0);
    }
  }, {
    key: "RPAREN",
    value: function RPAREN() {
      return this.getToken(T6TriggerParser.RPAREN, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitComplex(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ComplexContext;
}(_antlr.default.ParserRuleContext);
var CountContext = /*#__PURE__*/function (_antlr4$ParserRuleCon13) {
  _inherits(CountContext, _antlr4$ParserRuleCon13);
  var _super28 = _createSuper(CountContext);
  function CountContext(parser, parent, invokingState) {
    var _this28;
    _classCallCheck(this, CountContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this28 = _super28.call(this, parent, invokingState);
    _this28.parser = parser;
    _this28.ruleIndex = T6TriggerParser.RULE_count;
    return _this28;
  }
  _createClass(CountContext, [{
    key: "COUNT",
    value: function COUNT() {
      return this.getToken(T6TriggerParser.COUNT, 0);
    }
  }, {
    key: "LPAREN",
    value: function LPAREN() {
      return this.getToken(T6TriggerParser.LPAREN, 0);
    }
  }, {
    key: "RPAREN",
    value: function RPAREN() {
      return this.getToken(T6TriggerParser.RPAREN, 0);
    }
  }, {
    key: "comparator",
    value: function comparator() {
      return this.getTypedRuleContext(ComparatorContext, 0);
    }
  }, {
    key: "DISTINCT",
    value: function DISTINCT() {
      return this.getToken(T6TriggerParser.DISTINCT, 0);
    }
  }, {
    key: "value",
    value: function value() {
      return this.getTypedRuleContext(ValueContext, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitCount(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return CountContext;
}(_antlr.default.ParserRuleContext);
var CountComplexContext = /*#__PURE__*/function (_antlr4$ParserRuleCon14) {
  _inherits(CountComplexContext, _antlr4$ParserRuleCon14);
  var _super29 = _createSuper(CountComplexContext);
  function CountComplexContext(parser, parent, invokingState) {
    var _this29;
    _classCallCheck(this, CountComplexContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this29 = _super29.call(this, parent, invokingState);
    _this29.parser = parser;
    _this29.ruleIndex = T6TriggerParser.RULE_countComplex;
    return _this29;
  }
  _createClass(CountComplexContext, [{
    key: "COUNT_COMPLEX",
    value: function COUNT_COMPLEX() {
      return this.getToken(T6TriggerParser.COUNT_COMPLEX, 0);
    }
  }, {
    key: "LPAREN",
    value: function LPAREN() {
      return this.getToken(T6TriggerParser.LPAREN, 0);
    }
  }, {
    key: "RPAREN",
    value: function RPAREN() {
      return this.getToken(T6TriggerParser.RPAREN, 0);
    }
  }, {
    key: "comparator",
    value: function comparator() {
      return this.getTypedRuleContext(ComparatorContext, 0);
    }
  }, {
    key: "expr",
    value: function expr() {
      return this.getTypedRuleContext(ExprContext, 0);
    }
  }, {
    key: "DISTINCT",
    value: function DISTINCT() {
      return this.getToken(T6TriggerParser.DISTINCT, 0);
    }
  }, {
    key: "field",
    value: function field() {
      return this.getTypedRuleContext(FieldContext, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitCountComplex(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return CountComplexContext;
}(_antlr.default.ParserRuleContext);
var ValueContext = /*#__PURE__*/function (_antlr4$ParserRuleCon15) {
  _inherits(ValueContext, _antlr4$ParserRuleCon15);
  var _super30 = _createSuper(ValueContext);
  function ValueContext(parser, parent, invokingState) {
    var _this30;
    _classCallCheck(this, ValueContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this30 = _super30.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this30), "number", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(NumberContext);
      } else {
        return this.getTypedRuleContext(NumberContext, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "op", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(OpContext);
      } else {
        return this.getTypedRuleContext(OpContext, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "IDENTIFIER", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.IDENTIFIER);
      } else {
        return this.getToken(T6TriggerParser.IDENTIFIER, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "LPAREN", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.LPAREN);
      } else {
        return this.getToken(T6TriggerParser.LPAREN, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "RPAREN", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.RPAREN);
      } else {
        return this.getToken(T6TriggerParser.RPAREN, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "SEPARATOR", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.SEPARATOR);
      } else {
        return this.getToken(T6TriggerParser.SEPARATOR, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "IF", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.IF);
      } else {
        return this.getToken(T6TriggerParser.IF, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "FROM", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.FROM);
      } else {
        return this.getToken(T6TriggerParser.FROM, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "THEN", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.THEN);
      } else {
        return this.getToken(T6TriggerParser.THEN, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "ANY", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.ANY);
      } else {
        return this.getToken(T6TriggerParser.ANY, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "EMPTY", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.EMPTY);
      } else {
        return this.getToken(T6TriggerParser.EMPTY, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "NOT", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.NOT);
      } else {
        return this.getToken(T6TriggerParser.NOT, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "COMPLEX", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.COMPLEX);
      } else {
        return this.getToken(T6TriggerParser.COMPLEX, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "COUNT", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.COUNT);
      } else {
        return this.getToken(T6TriggerParser.COUNT, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "COUNT_COMPLEX", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.COUNT_COMPLEX);
      } else {
        return this.getToken(T6TriggerParser.COUNT_COMPLEX, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "DISTINCT", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.DISTINCT);
      } else {
        return this.getToken(T6TriggerParser.DISTINCT, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "IMPACT_SIDES", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.IMPACT_SIDES);
      } else {
        return this.getToken(T6TriggerParser.IMPACT_SIDES, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "AND", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.AND);
      } else {
        return this.getToken(T6TriggerParser.AND, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this30), "OR", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.OR);
      } else {
        return this.getToken(T6TriggerParser.OR, i);
      }
    });
    _this30.parser = parser;
    _this30.ruleIndex = T6TriggerParser.RULE_value;
    return _this30;
  }
  _createClass(ValueContext, [{
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitValue(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ValueContext;
}(_antlr.default.ParserRuleContext);
var ValuesContext = /*#__PURE__*/function (_antlr4$ParserRuleCon16) {
  _inherits(ValuesContext, _antlr4$ParserRuleCon16);
  var _super31 = _createSuper(ValuesContext);
  function ValuesContext(parser, parent, invokingState) {
    var _this31;
    _classCallCheck(this, ValuesContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this31 = _super31.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this31), "value", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ValueContext);
      } else {
        return this.getTypedRuleContext(ValueContext, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this31), "SEPARATOR", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(T6TriggerParser.SEPARATOR);
      } else {
        return this.getToken(T6TriggerParser.SEPARATOR, i);
      }
    });
    _this31.parser = parser;
    _this31.ruleIndex = T6TriggerParser.RULE_values;
    return _this31;
  }
  _createClass(ValuesContext, [{
    key: "accept",
    value: function accept(visitor) {
      if (visitor instanceof _T6TriggerVisitor.default) {
        return visitor.visitValues(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ValuesContext;
}(_antlr.default.ParserRuleContext);
T6TriggerParser.ParseContext = ParseContext;
T6TriggerParser.ExprContext = ExprContext;
T6TriggerParser.DateTimeContext = DateTimeContext;
T6TriggerParser.VehicleImpactContext = VehicleImpactContext;
T6TriggerParser.NumberContext = NumberContext;
T6TriggerParser.NumbersContext = NumbersContext;
T6TriggerParser.FieldContext = FieldContext;
T6TriggerParser.OpContext = OpContext;
T6TriggerParser.ComparatorContext = ComparatorContext;
T6TriggerParser.BinaryContext = BinaryContext;
T6TriggerParser.NotContext = NotContext;
T6TriggerParser.ComplexContext = ComplexContext;
T6TriggerParser.CountContext = CountContext;
T6TriggerParser.CountComplexContext = CountComplexContext;
T6TriggerParser.ValueContext = ValueContext;
T6TriggerParser.ValuesContext = ValuesContext;
//# sourceMappingURL=T6TriggerParser.js.map