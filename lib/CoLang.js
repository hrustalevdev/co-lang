"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoLang = void 0;
var _CoLangError = require("./CoLangError");
var _Lexer = require("./Lexer");
var _Parser2 = require("./Parser");
var _FormatConditionVisitor = require("./FormatConditionVisitor");
var _ExtractFieldNamesVisitor = require("./ExtractFieldNamesVisitor");
var _EvaluateConditionVisitor = require("./EvaluateConditionVisitor");
var _types = require("./types");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CoLang = /*#__PURE__*/function () {
  function CoLang(params) {
    _classCallCheck(this, CoLang);
    _defineProperty(this, "withCache", true);
    this.cachedParse = {};
    if (params) {
      var _params$withCache;
      this.withCache = (_params$withCache = params.withCache) !== null && _params$withCache !== void 0 ? _params$withCache : true;
      this.onError = params.onError;
    }
    this.checkCondition = this.checkCondition.bind(this);
    this.formatCondition = this.formatCondition.bind(this);
    this.getFieldEntries = this.getFieldEntries.bind(this);
    this.evaluateFieldTokens = this.evaluateFieldTokens.bind(this);
    this.clearCache = this.clearCache.bind(this);
  }
  _createClass(CoLang, [{
    key: "getParseResult",
    value: function getParseResult(condition) {
      if (this.cachedParse[condition]) return this.cachedParse[condition];
      var lexer = new _Lexer.Lexer(condition);
      var _Parser = new _Parser2.Parser(lexer),
        ast = _Parser.ast,
        error = _Parser.error;
      if (this.withCache) {
        this.cachedParse[condition] = {
          ast: ast,
          error: error
        };
      }
      return {
        ast: ast,
        error: error
      };
    }
  }, {
    key: "isError",
    value: function isError(error, condition, trackIdentifier) {
      if (error) {
        if (this.onError) this.onError(error, condition, trackIdentifier);
        return true;
      }
      return false;
    }
  }, {
    key: "checkCondition",
    value: function checkCondition(condition) {
      var withCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.withCache = withCache;
      var _this$getParseResult = this.getParseResult(condition),
        error = _this$getParseResult.error;
      if (error && this.onError) this.onError(error, condition);
      return error;
    }
  }, {
    key: "formatCondition",
    value: function formatCondition(condition) {
      var withCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.withCache = withCache;
      var _this$getParseResult2 = this.getParseResult(condition),
        ast = _this$getParseResult2.ast,
        error = _this$getParseResult2.error;
      if (this.isError(error, condition)) return condition;
      try {
        var formatConditionVisitor = new _FormatConditionVisitor.FormatConditionVisitor();
        ast.accept(formatConditionVisitor);
        return formatConditionVisitor.formattedCondition;
      } catch (e) {
        var _ref = e,
          message = _ref.message;
        var _error = new _CoLangError.CoLangError({
          message: message,
          source: _types.ESource.FORMAT_VISITOR
        });
        if (this.onError) this.onError(_error, condition);
        return condition;
      }
    }
  }, {
    key: "getFieldEntries",
    value: function getFieldEntries(condition, options) {
      var _this$getParseResult3 = this.getParseResult(condition),
        ast = _this$getParseResult3.ast,
        error = _this$getParseResult3.error;
      if (this.isError(error, condition, options === null || options === void 0 ? void 0 : options.trackId)) return null;
      var extractFieldNamesVisitor = new _ExtractFieldNamesVisitor.ExtractFieldNamesVisitor();
      ast.accept(extractFieldNamesVisitor);
      return extractFieldNamesVisitor.fieldNames;
    }
  }, {
    key: "evaluateFieldTokens",
    value: function evaluateFieldTokens(condition, fieldTokens, options) {
      var _this$getParseResult4 = this.getParseResult(condition),
        ast = _this$getParseResult4.ast,
        error = _this$getParseResult4.error;
      if (this.isError(error, condition, options === null || options === void 0 ? void 0 : options.trackId)) return null;
      try {
        var evaluateConditionVisitor = new _EvaluateConditionVisitor.EvaluateConditionVisitor(fieldTokens);
        ast.accept(evaluateConditionVisitor);
        var evaluationResult = evaluateConditionVisitor.evaluationResult,
          triggeredFieldTokens = evaluateConditionVisitor.triggeredFieldTokens;
        return {
          evaluationResult: evaluationResult,
          triggeredFieldTokens: triggeredFieldTokens
        };
      } catch (e) {
        var _ref2 = e,
          message = _ref2.message;
        var _error2 = new _CoLangError.CoLangError({
          message: message,
          source: _types.ESource.EVALUATE_VISITOR
        });
        if (this.onError) this.onError(_error2, condition, options === null || options === void 0 ? void 0 : options.trackId);
        return null;
      }
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.cachedParse = {};
    }
  }]);
  return CoLang;
}();
exports.CoLang = CoLang;
//# sourceMappingURL=CoLang.js.map