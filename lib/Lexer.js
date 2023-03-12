"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lexer = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
var _T6TriggerLexer = _interopRequireDefault(require("./gen/T6TriggerLexer"));
var _ErrorListener = require("./ErrorListener");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var InputStream = _antlr.default.InputStream;
var Lexer = /*#__PURE__*/_createClass(function Lexer(condition) {
  _classCallCheck(this, Lexer);
  /** Creating a stream of characters from the condition (making a copy of the condition characters) */
  var chars = new InputStream(condition, true);
  /** Pass the stream of characters to the Lexer, which converts them into tokens */
  var lexer = new _T6TriggerLexer.default(chars);
  lexer.removeErrorListeners();
  var errorListener = _ErrorListener.ErrorListener.getInstance();
  lexer.addErrorListener(errorListener);
  this.lexer = lexer;
});
exports.Lexer = Lexer;
//# sourceMappingURL=Lexer.js.map