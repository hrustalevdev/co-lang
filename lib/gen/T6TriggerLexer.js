"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var serializedATN = [4, 0, 34, 243, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 26, 1, 26, 1, 27, 1, 27, 1, 28, 1, 28, 1, 29, 3, 29, 204, 8, 29, 1, 29, 4, 29, 207, 8, 29, 11, 29, 12, 29, 208, 1, 30, 1, 30, 1, 30, 1, 30, 1, 31, 1, 31, 3, 31, 217, 8, 31, 1, 31, 1, 31, 1, 32, 1, 32, 3, 32, 223, 8, 32, 1, 32, 1, 32, 1, 32, 5, 32, 228, 8, 32, 10, 32, 12, 32, 231, 9, 32, 1, 33, 4, 33, 234, 8, 33, 11, 33, 12, 33, 235, 1, 33, 1, 33, 1, 34, 1, 34, 1, 35, 1, 35, 0, 0, 36, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22, 45, 23, 47, 24, 49, 25, 51, 26, 53, 27, 55, 28, 57, 29, 59, 30, 61, 31, 63, 32, 65, 33, 67, 34, 69, 0, 71, 0, 1, 0, 5, 2, 0, 44, 44, 59, 59, 3, 0, 77, 77, 100, 100, 121, 121, 3, 0, 9, 10, 12, 13, 32, 32, 2, 0, 65, 90, 97, 122, 1, 0, 48, 57, 248, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 0, 45, 1, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 49, 1, 0, 0, 0, 0, 51, 1, 0, 0, 0, 0, 53, 1, 0, 0, 0, 0, 55, 1, 0, 0, 0, 0, 57, 1, 0, 0, 0, 0, 59, 1, 0, 0, 0, 0, 61, 1, 0, 0, 0, 0, 63, 1, 0, 0, 0, 0, 65, 1, 0, 0, 0, 0, 67, 1, 0, 0, 0, 1, 73, 1, 0, 0, 0, 3, 75, 1, 0, 0, 0, 5, 77, 1, 0, 0, 0, 7, 79, 1, 0, 0, 0, 9, 81, 1, 0, 0, 0, 11, 83, 1, 0, 0, 0, 13, 85, 1, 0, 0, 0, 15, 87, 1, 0, 0, 0, 17, 89, 1, 0, 0, 0, 19, 93, 1, 0, 0, 0, 21, 99, 1, 0, 0, 0, 23, 105, 1, 0, 0, 0, 25, 110, 1, 0, 0, 0, 27, 117, 1, 0, 0, 0, 29, 122, 1, 0, 0, 0, 31, 131, 1, 0, 0, 0, 33, 138, 1, 0, 0, 0, 35, 153, 1, 0, 0, 0, 37, 163, 1, 0, 0, 0, 39, 175, 1, 0, 0, 0, 41, 180, 1, 0, 0, 0, 43, 184, 1, 0, 0, 0, 45, 186, 1, 0, 0, 0, 47, 189, 1, 0, 0, 0, 49, 191, 1, 0, 0, 0, 51, 194, 1, 0, 0, 0, 53, 196, 1, 0, 0, 0, 55, 198, 1, 0, 0, 0, 57, 200, 1, 0, 0, 0, 59, 203, 1, 0, 0, 0, 61, 210, 1, 0, 0, 0, 63, 216, 1, 0, 0, 0, 65, 222, 1, 0, 0, 0, 67, 233, 1, 0, 0, 0, 69, 239, 1, 0, 0, 0, 71, 241, 1, 0, 0, 0, 73, 74, 5, 36, 0, 0, 74, 2, 1, 0, 0, 0, 75, 76, 5, 45, 0, 0, 76, 4, 1, 0, 0, 0, 77, 78, 5, 47, 0, 0, 78, 6, 1, 0, 0, 0, 79, 80, 5, 176, 0, 0, 80, 8, 1, 0, 0, 0, 81, 82, 5, 43, 0, 0, 82, 10, 1, 0, 0, 0, 83, 84, 5, 37, 0, 0, 84, 12, 1, 0, 0, 0, 85, 86, 5, 38, 0, 0, 86, 14, 1, 0, 0, 0, 87, 88, 5, 46, 0, 0, 88, 16, 1, 0, 0, 0, 89, 90, 5, 36, 0, 0, 90, 91, 5, 73, 0, 0, 91, 92, 5, 70, 0, 0, 92, 18, 1, 0, 0, 0, 93, 94, 5, 36, 0, 0, 94, 95, 5, 70, 0, 0, 95, 96, 5, 82, 0, 0, 96, 97, 5, 79, 0, 0, 97, 98, 5, 77, 0, 0, 98, 20, 1, 0, 0, 0, 99, 100, 5, 36, 0, 0, 100, 101, 5, 84, 0, 0, 101, 102, 5, 72, 0, 0, 102, 103, 5, 69, 0, 0, 103, 104, 5, 78, 0, 0, 104, 22, 1, 0, 0, 0, 105, 106, 5, 36, 0, 0, 106, 107, 5, 65, 0, 0, 107, 108, 5, 78, 0, 0, 108, 109, 5, 89, 0, 0, 109, 24, 1, 0, 0, 0, 110, 111, 5, 36, 0, 0, 111, 112, 5, 69, 0, 0, 112, 113, 5, 77, 0, 0, 113, 114, 5, 80, 0, 0, 114, 115, 5, 84, 0, 0, 115, 116, 5, 89, 0, 0, 116, 26, 1, 0, 0, 0, 117, 118, 5, 36, 0, 0, 118, 119, 5, 78, 0, 0, 119, 120, 5, 79, 0, 0, 120, 121, 5, 84, 0, 0, 121, 28, 1, 0, 0, 0, 122, 123, 5, 36, 0, 0, 123, 124, 5, 67, 0, 0, 124, 125, 5, 79, 0, 0, 125, 126, 5, 77, 0, 0, 126, 127, 5, 80, 0, 0, 127, 128, 5, 76, 0, 0, 128, 129, 5, 69, 0, 0, 129, 130, 5, 88, 0, 0, 130, 30, 1, 0, 0, 0, 131, 132, 5, 36, 0, 0, 132, 133, 5, 67, 0, 0, 133, 134, 5, 79, 0, 0, 134, 135, 5, 85, 0, 0, 135, 136, 5, 78, 0, 0, 136, 137, 5, 84, 0, 0, 137, 32, 1, 0, 0, 0, 138, 139, 5, 36, 0, 0, 139, 140, 5, 67, 0, 0, 140, 141, 5, 79, 0, 0, 141, 142, 5, 85, 0, 0, 142, 143, 5, 78, 0, 0, 143, 144, 5, 84, 0, 0, 144, 145, 5, 95, 0, 0, 145, 146, 5, 67, 0, 0, 146, 147, 5, 79, 0, 0, 147, 148, 5, 77, 0, 0, 148, 149, 5, 80, 0, 0, 149, 150, 5, 76, 0, 0, 150, 151, 5, 69, 0, 0, 151, 152, 5, 88, 0, 0, 152, 34, 1, 0, 0, 0, 153, 154, 5, 36, 0, 0, 154, 155, 5, 68, 0, 0, 155, 156, 5, 73, 0, 0, 156, 157, 5, 83, 0, 0, 157, 158, 5, 84, 0, 0, 158, 159, 5, 73, 0, 0, 159, 160, 5, 78, 0, 0, 160, 161, 5, 67, 0, 0, 161, 162, 5, 84, 0, 0, 162, 36, 1, 0, 0, 0, 163, 164, 5, 105, 0, 0, 164, 165, 5, 109, 0, 0, 165, 166, 5, 112, 0, 0, 166, 167, 5, 97, 0, 0, 167, 168, 5, 99, 0, 0, 168, 169, 5, 116, 0, 0, 169, 170, 5, 83, 0, 0, 170, 171, 5, 105, 0, 0, 171, 172, 5, 100, 0, 0, 172, 173, 5, 101, 0, 0, 173, 174, 5, 115, 0, 0, 174, 38, 1, 0, 0, 0, 175, 176, 5, 36, 0, 0, 176, 177, 5, 65, 0, 0, 177, 178, 5, 78, 0, 0, 178, 179, 5, 68, 0, 0, 179, 40, 1, 0, 0, 0, 180, 181, 5, 36, 0, 0, 181, 182, 5, 79, 0, 0, 182, 183, 5, 82, 0, 0, 183, 42, 1, 0, 0, 0, 184, 185, 5, 62, 0, 0, 185, 44, 1, 0, 0, 0, 186, 187, 5, 62, 0, 0, 187, 188, 5, 61, 0, 0, 188, 46, 1, 0, 0, 0, 189, 190, 5, 60, 0, 0, 190, 48, 1, 0, 0, 0, 191, 192, 5, 60, 0, 0, 192, 193, 5, 61, 0, 0, 193, 50, 1, 0, 0, 0, 194, 195, 5, 61, 0, 0, 195, 52, 1, 0, 0, 0, 196, 197, 5, 40, 0, 0, 197, 54, 1, 0, 0, 0, 198, 199, 5, 41, 0, 0, 199, 56, 1, 0, 0, 0, 200, 201, 7, 0, 0, 0, 201, 58, 1, 0, 0, 0, 202, 204, 5, 45, 0, 0, 203, 202, 1, 0, 0, 0, 203, 204, 1, 0, 0, 0, 204, 206, 1, 0, 0, 0, 205, 207, 3, 71, 35, 0, 206, 205, 1, 0, 0, 0, 207, 208, 1, 0, 0, 0, 208, 206, 1, 0, 0, 0, 208, 209, 1, 0, 0, 0, 209, 60, 1, 0, 0, 0, 210, 211, 3, 59, 29, 0, 211, 212, 5, 46, 0, 0, 212, 213, 3, 59, 29, 0, 213, 62, 1, 0, 0, 0, 214, 217, 3, 59, 29, 0, 215, 217, 3, 61, 30, 0, 216, 214, 1, 0, 0, 0, 216, 215, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 219, 7, 1, 0, 0, 219, 64, 1, 0, 0, 0, 220, 223, 3, 69, 34, 0, 221, 223, 3, 71, 35, 0, 222, 220, 1, 0, 0, 0, 222, 221, 1, 0, 0, 0, 223, 229, 1, 0, 0, 0, 224, 228, 3, 69, 34, 0, 225, 228, 3, 71, 35, 0, 226, 228, 5, 95, 0, 0, 227, 224, 1, 0, 0, 0, 227, 225, 1, 0, 0, 0, 227, 226, 1, 0, 0, 0, 228, 231, 1, 0, 0, 0, 229, 227, 1, 0, 0, 0, 229, 230, 1, 0, 0, 0, 230, 66, 1, 0, 0, 0, 231, 229, 1, 0, 0, 0, 232, 234, 7, 2, 0, 0, 233, 232, 1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 233, 1, 0, 0, 0, 235, 236, 1, 0, 0, 0, 236, 237, 1, 0, 0, 0, 237, 238, 6, 33, 0, 0, 238, 68, 1, 0, 0, 0, 239, 240, 7, 3, 0, 0, 240, 70, 1, 0, 0, 0, 241, 242, 7, 4, 0, 0, 242, 72, 1, 0, 0, 0, 8, 0, 203, 208, 216, 222, 227, 229, 235, 1, 6, 0, 0];
var atn = new _antlr.default.atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new _antlr.default.dfa.DFA(ds, index);
});
var T6TriggerLexer = /*#__PURE__*/function (_antlr4$Lexer) {
  _inherits(T6TriggerLexer, _antlr4$Lexer);
  var _super = _createSuper(T6TriggerLexer);
  function T6TriggerLexer(input) {
    var _this;
    _classCallCheck(this, T6TriggerLexer);
    _this = _super.call(this, input);
    _this._interp = new _antlr.default.atn.LexerATNSimulator(_assertThisInitialized(_this), atn, decisionsToDFA, new _antlr.default.PredictionContextCache());
    return _this;
  }
  _createClass(T6TriggerLexer, [{
    key: "atn",
    get: function get() {
      return atn;
    }
  }]);
  return T6TriggerLexer;
}(_antlr.default.Lexer);
exports.default = T6TriggerLexer;
_defineProperty(T6TriggerLexer, "grammarFileName", 'T6Trigger.g4');
_defineProperty(T6TriggerLexer, "channelNames", ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']);
_defineProperty(T6TriggerLexer, "modeNames", ['DEFAULT_MODE']);
_defineProperty(T6TriggerLexer, "literalNames", [null, "'\\u0024'", "'-'", "'/'", "'\\u00B0'", "'\\u002B'", "'\\u0025'", "'\\u0026'", "'.'", "'$IF'", "'$FROM'", "'$THEN'", "'$ANY'", "'$EMPTY'", "'$NOT'", "'$COMPLEX'", "'$COUNT'", "'$COUNT_COMPLEX'", "'$DISTINCT'", "'impactSides'", "'$AND'", "'$OR'", "'>'", "'>='", "'<'", "'<='", "'='", "'('", "')'"]);
_defineProperty(T6TriggerLexer, "symbolicNames", [null, null, null, null, null, null, null, null, null, 'IF', 'FROM', 'THEN', 'ANY', 'EMPTY', 'NOT', 'COMPLEX', 'COUNT', 'COUNT_COMPLEX', 'DISTINCT', 'IMPACT_SIDES', 'AND', 'OR', 'GT', 'GE', 'LT', 'LE', 'EQ', 'LPAREN', 'RPAREN', 'SEPARATOR', 'INT', 'DECIMAL', 'DATE_TIME', 'IDENTIFIER', 'WS']);
_defineProperty(T6TriggerLexer, "ruleNames", ['T__0', 'T__1', 'T__2', 'T__3', 'T__4', 'T__5', 'T__6', 'T__7', 'IF', 'FROM', 'THEN', 'ANY', 'EMPTY', 'NOT', 'COMPLEX', 'COUNT', 'COUNT_COMPLEX', 'DISTINCT', 'IMPACT_SIDES', 'AND', 'OR', 'GT', 'GE', 'LT', 'LE', 'EQ', 'LPAREN', 'RPAREN', 'SEPARATOR', 'INT', 'DECIMAL', 'DATE_TIME', 'IDENTIFIER', 'WS', 'LETTER', 'DIGIT']);
T6TriggerLexer.EOF = _antlr.default.Token.EOF;
T6TriggerLexer.T__0 = 1;
T6TriggerLexer.T__1 = 2;
T6TriggerLexer.T__2 = 3;
T6TriggerLexer.T__3 = 4;
T6TriggerLexer.T__4 = 5;
T6TriggerLexer.T__5 = 6;
T6TriggerLexer.T__6 = 7;
T6TriggerLexer.T__7 = 8;
T6TriggerLexer.IF = 9;
T6TriggerLexer.FROM = 10;
T6TriggerLexer.THEN = 11;
T6TriggerLexer.ANY = 12;
T6TriggerLexer.EMPTY = 13;
T6TriggerLexer.NOT = 14;
T6TriggerLexer.COMPLEX = 15;
T6TriggerLexer.COUNT = 16;
T6TriggerLexer.COUNT_COMPLEX = 17;
T6TriggerLexer.DISTINCT = 18;
T6TriggerLexer.IMPACT_SIDES = 19;
T6TriggerLexer.AND = 20;
T6TriggerLexer.OR = 21;
T6TriggerLexer.GT = 22;
T6TriggerLexer.GE = 23;
T6TriggerLexer.LT = 24;
T6TriggerLexer.LE = 25;
T6TriggerLexer.EQ = 26;
T6TriggerLexer.LPAREN = 27;
T6TriggerLexer.RPAREN = 28;
T6TriggerLexer.SEPARATOR = 29;
T6TriggerLexer.INT = 30;
T6TriggerLexer.DECIMAL = 31;
T6TriggerLexer.DATE_TIME = 32;
T6TriggerLexer.IDENTIFIER = 33;
T6TriggerLexer.WS = 34;
//# sourceMappingURL=T6TriggerLexer.js.map