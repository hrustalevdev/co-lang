"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EvaluateConditionVisitor = void 0;
var _fastDeepEqual = _interopRequireDefault(require("fast-deep-equal"));
var _T6TriggerVisitor2 = _interopRequireDefault(require("./gen/T6TriggerVisitor"));
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
var EDateTimeUnits;
(function (EDateTimeUnits) {
  EDateTimeUnits["D"] = "d";
  EDateTimeUnits["M"] = "m";
  EDateTimeUnits["Y"] = "y";
})(EDateTimeUnits || (EDateTimeUnits = {}));
var EvaluateConditionVisitor = /*#__PURE__*/function (_T6TriggerVisitor) {
  _inherits(EvaluateConditionVisitor, _T6TriggerVisitor);
  var _super = _createSuper(EvaluateConditionVisitor);
  function EvaluateConditionVisitor(fieldTokens) {
    var _this;
    _classCallCheck(this, EvaluateConditionVisitor);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "fieldTokensScope", {});
    _defineProperty(_assertThisInitialized(_this), "evaluationResult", false);
    _defineProperty(_assertThisInitialized(_this), "triggeredFieldTokens", null);
    _this.setFieldTokensScope(fieldTokens);
    return _this;
  }
  _createClass(EvaluateConditionVisitor, [{
    key: "setFieldTokensScope",
    value: function setFieldTokensScope(tokens) {
      if (this.isArray(tokens)) {
        this.fieldTokensScope = getScope(tokens);
      } else {
        this.fieldTokensScope = _objectSpread({}, tokens);
      }
      function getScope(tokens) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _iterator = _createForOfIteratorHelper(tokens),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var token = _step.value;
            result[token.fieldName] = result[token.fieldName] ? [].concat(_toConsumableArray(result[token.fieldName]), [token]) : [token];
            if (token.fieldType === _types.EFieldType.complex) {
              getScope(token.children, result);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return result;
      }
    }
  }, {
    key: "checkFieldType",
    value: function checkFieldType(fieldTokens, acceptableFieldTypes) {
      if (!fieldTokens.every(function (ft) {
        return acceptableFieldTypes.includes(ft.fieldType);
      })) {
        throw new Error("Incorrect model type for [".concat(fieldTokens[0].fieldName, "]: actual - [").concat(fieldTokens[0].fieldType, "], requested - [").concat(acceptableFieldTypes.join('|'), "]"));
      }
    }
  }, {
    key: "getRelevantFieldTokens",
    value: function getRelevantFieldTokens(conditionFieldName) {
      var relevantTokens = this.fieldTokensScope[conditionFieldName];
      return relevantTokens && relevantTokens.length > 0 ? relevantTokens : null;
    }
  }, {
    key: "getConditionValue",
    value: function getConditionValue(ctx) {
      var inputStream = ctx.start.source[1];
      if (!inputStream) throw new Error('InputStream is missing in TokenSourceTuple');
      return inputStream.getText(ctx.start.start, ctx.stop.stop);
    }
  }, {
    key: "truthifyResult",
    value: function truthifyResult(result, token) {
      if (result) {
        var res = _objectSpread({}, result);
        res.triggeredFieldTokens = res.triggeredFieldTokens.add(token);
        return res;
      } else {
        return {
          evaluationResult: true,
          triggeredFieldTokens: new Set().add(token)
        };
      }
    }
  }, {
    key: "dateTimeValueParse",
    value: function dateTimeValueParse(rawValue) {
      var parsedValue = rawValue.match(/^[1-9]\d*/);
      var parsedUnit = rawValue.match(/[a-z]+$/i);
      var value = parsedValue ? parsedValue[0] : parsedValue;
      var unit = parsedUnit ? parsedUnit[0].toLowerCase() : parsedUnit;
      switch (unit) {
        case 'day':
        case 'days':
          unit = EDateTimeUnits.D;
          break;
        case 'month':
        case 'months':
          unit = EDateTimeUnits.M;
          break;
        case 'year':
        case 'years':
          unit = EDateTimeUnits.Y;
      }
      return {
        value: value,
        unit: unit
      };
    }
  }, {
    key: "dateTimeValueConverter",
    value: function dateTimeValueConverter(tokenUnit, rowTokenValue, conditionUnit, rowConditionValue) {
      var tokenValue = Number(rowTokenValue);
      var conditionValue = Number(rowConditionValue);
      if (tokenUnit === conditionUnit) {
        return {
          tokenValue: tokenValue,
          conditionValue: conditionValue
        };
      } else if (tokenUnit === EDateTimeUnits.D && conditionUnit === EDateTimeUnits.M) {
        return {
          tokenValue: tokenValue / 30,
          conditionValue: conditionValue
        };
      } else if (tokenUnit === EDateTimeUnits.D && conditionUnit === EDateTimeUnits.Y) {
        return {
          tokenValue: tokenValue / 360,
          conditionValue: conditionValue
        };
      } else if (tokenUnit === EDateTimeUnits.M && conditionUnit === EDateTimeUnits.D) {
        return {
          tokenValue: tokenValue * 30,
          conditionValue: conditionValue
        };
      } else if (tokenUnit === EDateTimeUnits.M && conditionUnit === EDateTimeUnits.Y) {
        return {
          tokenValue: tokenValue / 12,
          conditionValue: conditionValue
        };
      } else if (tokenUnit === EDateTimeUnits.Y && conditionUnit === EDateTimeUnits.D) {
        return {
          tokenValue: tokenValue * 360,
          conditionValue: conditionValue
        };
      } else if (tokenUnit === EDateTimeUnits.Y && conditionUnit === EDateTimeUnits.M) {
        return {
          tokenValue: tokenValue * 12,
          conditionValue: conditionValue
        };
      }
    }
  }, {
    key: "compare",
    value: function compare(opCtx, tokenValue, conditionValue) {
      if (opCtx.GT()) return tokenValue > conditionValue;
      if (opCtx.GE()) return tokenValue >= conditionValue;
      if (opCtx.LT()) return tokenValue < conditionValue;
      if (opCtx.LE()) return tokenValue <= conditionValue;
      if (opCtx.EQ()) return tokenValue === conditionValue;
      return false;
    }
  }, {
    key: "isTruthy",
    value: function isTruthy(result) {
      return result !== null;
    }
  }, {
    key: "isTokenValueEmpty",
    value: function isTokenValueEmpty(token) {
      var fieldType = token.fieldType,
        fieldValue = token.fieldValue;
      switch (fieldType) {
        case _types.EFieldType.complex:
          return fieldValue === undefined;
        case _types.EFieldType.decimal:
        case _types.EFieldType.integer:
        case _types.EFieldType.timestamp:
          return fieldValue === null;
        case _types.EFieldType.ais:
        case _types.EFieldType.enum:
        case _types.EFieldType.string:
          return fieldValue === '';
        case _types.EFieldType.enum_list:
          try {
            return fieldValue.length === 0;
          } catch (_unused) {
            throw new Error('Check the value for the enum_list type field. It must be like array literal - []');
          }
        case _types.EFieldType.image:
          try {
            return fieldValue.hasOwnProperty('images') && fieldValue.images.length === 0;
          } catch (_unused2) {
            throw new Error('Check the value for the image type field. It must be like this object literal - { images: [] }');
          }
        case _types.EFieldType.vehicleImpactType:
          try {
            return Object.keys(fieldValue).length === 0;
          } catch (_unused3) {
            throw new Error('Check the value for the vehicleImpactType field. It must be like object literal - {}');
          }
        default:
          throw new Error('Check the fieldType for the value');
      }
    }
  }, {
    key: "isTokenValuesEqual",
    value: function isTokenValuesEqual(token1, token2) {
      var fieldType;
      if (token1.fieldType === token2.fieldType) {
        fieldType = token1.fieldType;
      } else {
        throw new Error('Field types must be equal');
      }
      switch (fieldType) {
        case _types.EFieldType.ais:
        case _types.EFieldType.enum:
        case _types.EFieldType.string:
        case _types.EFieldType.decimal:
        case _types.EFieldType.integer:
          return token1.fieldValue === token2.fieldValue;
        case _types.EFieldType.timestamp:
          try {
            return token1.fieldValue === null || token2.fieldValue === null ? token1.fieldValue === token2.fieldValue : token1.fieldValue.getTime() === token2.fieldValue.getTime();
          } catch (_unused4) {
            throw new Error('Check the value for the timestamp type. It must be Date type');
          }
        case _types.EFieldType.enum_list:
          try {
            var arr1 = token1.fieldValue;
            var arr2 = token2.fieldValue;
            return this.isArraysEqual(arr1, arr2);
          } catch (_unused5) {
            throw new Error('Check the value for the enum_list type field. It must be like array literal - []');
          }
        case _types.EFieldType.image:
          try {
            var obj1 = token1.fieldValue;
            var obj2 = token2.fieldValue;
            return (0, _fastDeepEqual.default)(obj1, obj2);
          } catch (_unused6) {
            throw new Error('Check the value for the image type field. It must be like this object literal - { images: [] }');
          }
        case _types.EFieldType.vehicleImpactType:
          try {
            var t1ValCopy = _objectSpread({}, token1.fieldValue);
            delete t1ValCopy.passengerPositions;
            delete t1ValCopy.impactSides;
            var t2ValCopy = _objectSpread({}, token2.fieldValue);
            delete t2ValCopy.passengerPositions;
            delete t2ValCopy.impactSides;
            if ((0, _fastDeepEqual.default)(t1ValCopy, t2ValCopy)) {
              var _passengerPositions, _passengerPositions2, _impactSides, _impactSides2;
              return this.isArraysEqual((_passengerPositions = token1.fieldValue.passengerPositions) !== null && _passengerPositions !== void 0 ? _passengerPositions : [], (_passengerPositions2 = token2.fieldValue.passengerPositions) !== null && _passengerPositions2 !== void 0 ? _passengerPositions2 : []) && this.isArraysEqual((_impactSides = token1.fieldValue.impactSides) !== null && _impactSides !== void 0 ? _impactSides : [], (_impactSides2 = token2.fieldValue.impactSides) !== null && _impactSides2 !== void 0 ? _impactSides2 : []);
            }
            return false;
          } catch (_unused7) {
            throw new Error('Check the value for the vehicleImpactType field. It must be like object literal - {}');
          }
        default:
          throw new Error('Check the fieldType for the value');
      }
    }
  }, {
    key: "isArray",
    value: function isArray(fieldTokens) {
      return Array.isArray(fieldTokens);
    }
  }, {
    key: "isArraysEqual",
    value: function isArraysEqual(arr1, arr2) {
      return arr1.length === arr2.length && arr1.every(function (a1) {
        return arr2.includes(a1);
      });
    }
  }, {
    key: "isNumeric",
    value: function isNumeric(token) {
      return token.fieldType === _types.EFieldType.integer || token.fieldType === _types.EFieldType.decimal;
    }
  }, {
    key: "isString",
    value: function isString(token) {
      return token.fieldType === _types.EFieldType.ais || token.fieldType === _types.EFieldType.enum || token.fieldType === _types.EFieldType.string;
    }
  }, {
    key: "isEnumList",
    value: function isEnumList(token) {
      return token.fieldType === _types.EFieldType.enum_list;
    }
  }, {
    key: "visitParse",
    value: function visitParse(ctx) {
      try {
        var res = _get(_getPrototypeOf(EvaluateConditionVisitor.prototype), "visit", this).call(this, ctx.expr());
        if (res) {
          var evaluationResult = res.evaluationResult,
            triggeredFieldTokens = res.triggeredFieldTokens;
          this.evaluationResult = evaluationResult;
          this.triggeredFieldTokens = _toConsumableArray(triggeredFieldTokens);
        }
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "visitBinaryExpr",
    value: function visitBinaryExpr(ctx) {
      var res = null;
      var leftExprResult = _get(_getPrototypeOf(EvaluateConditionVisitor.prototype), "visit", this).call(this, ctx.expr(0));
      var rightExprResult = _get(_getPrototypeOf(EvaluateConditionVisitor.prototype), "visit", this).call(this, ctx.expr(1));
      var isOrOperator = !!ctx.binary().OR();
      if (isOrOperator) {
        if (this.isTruthy(leftExprResult) && this.isTruthy(rightExprResult)) {
          res = {
            evaluationResult: true,
            triggeredFieldTokens: new Set([].concat(_toConsumableArray(leftExprResult.triggeredFieldTokens), _toConsumableArray(rightExprResult.triggeredFieldTokens)))
          };
          return res;
        } else if (this.isTruthy(leftExprResult)) {
          return leftExprResult;
        } else if (this.isTruthy(rightExprResult)) {
          return rightExprResult;
        } else {
          return res;
        }
      } else {
        if (this.isTruthy(leftExprResult) && this.isTruthy(rightExprResult)) {
          res = {
            evaluationResult: true,
            triggeredFieldTokens: new Set([].concat(_toConsumableArray(leftExprResult.triggeredFieldTokens), _toConsumableArray(rightExprResult.triggeredFieldTokens)))
          };
          return res;
        } else {
          return res;
        }
      }
    }
  }, {
    key: "visitComparatorExpr",
    value: function visitComparatorExpr(ctx) {
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!relevantTokens) return res;
      var acceptableFieldTypes = [_types.EFieldType.string, _types.EFieldType.integer, _types.EFieldType.decimal];
      this.checkFieldType(relevantTokens, acceptableFieldTypes);
      var conditionValue = ctx.comparator().number() ? this.getConditionValue(ctx.comparator().number()) : this.getConditionValue(ctx.comparator().dateTime());
      var operatorCtx = ctx.comparator().op();
      var _iterator2 = _createForOfIteratorHelper(relevantTokens),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var token = _step2.value;
          if (this.isString(token)) {
            var _this$dateTimeValuePa = this.dateTimeValueParse(token.fieldValue),
              rowTokenValue = _this$dateTimeValuePa.value,
              tokenUnit = _this$dateTimeValuePa.unit;
            var _this$dateTimeValuePa2 = this.dateTimeValueParse(conditionValue),
              rowCondValue = _this$dateTimeValuePa2.value,
              condUnit = _this$dateTimeValuePa2.unit;

            // prettier-ignore
            var isValuesAndUnitsNotNull = rowTokenValue !== null && tokenUnit !== null && rowCondValue !== null && condUnit !== null;
            if (isValuesAndUnitsNotNull) {
              var converterResult = this.dateTimeValueConverter(tokenUnit, rowTokenValue, condUnit, rowCondValue);
              if (converterResult) {
                var tokenValue = converterResult.tokenValue,
                  _conditionValue = converterResult.conditionValue;
                if (this.compare(operatorCtx, tokenValue, _conditionValue)) {
                  res = this.truthifyResult(res, token);
                }
              }
            }
          } else if (this.isNumeric(token) && token.fieldValue !== null && this.compare(operatorCtx, token.fieldValue, Number(conditionValue))) {
            res = this.truthifyResult(res, token);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return res;
    }
  }, {
    key: "visitAnyExpr",
    value: function visitAnyExpr(ctx) {
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!relevantTokens) return res;
      var _iterator3 = _createForOfIteratorHelper(relevantTokens),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var token = _step3.value;
          if (!this.isTokenValueEmpty(token)) {
            res = this.truthifyResult(res, token);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return res;
    }
  }, {
    key: "visitEmptyExpr",
    value: function visitEmptyExpr(ctx) {
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (relevantTokens) {
        var _iterator4 = _createForOfIteratorHelper(relevantTokens),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var token = _step4.value;
            if (this.isTokenValueEmpty(token)) {
              res = this.truthifyResult(res, token);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else {
        res = {
          evaluationResult: true,
          triggeredFieldTokens: new Set()
        };
      }
      return res;
    }
  }, {
    key: "visitNumberExpr",
    value: function visitNumberExpr(ctx) {
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!relevantTokens) return res;
      var acceptableFieldTypes = [_types.EFieldType.ais, _types.EFieldType.integer, _types.EFieldType.decimal];
      this.checkFieldType(relevantTokens, acceptableFieldTypes);
      var conditionValue = this.getConditionValue(ctx.number());
      var _iterator5 = _createForOfIteratorHelper(relevantTokens),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var token = _step5.value;
          if (this.isString(token) && token.fieldValue === conditionValue) {
            res = this.truthifyResult(res, token);
          } else if (this.isNumeric(token) && token.fieldValue !== null && token.fieldValue === Number(conditionValue)) {
            res = this.truthifyResult(res, token);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return res;
    }
  }, {
    key: "visitNumbersExpr",
    value: function visitNumbersExpr(ctx) {
      var _this2 = this;
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!relevantTokens) return res;
      var acceptableFieldTypes = [_types.EFieldType.ais, _types.EFieldType.integer, _types.EFieldType.decimal];
      this.checkFieldType(relevantTokens, acceptableFieldTypes);
      var conditionValue = ctx.numbers().number().map(function (nCtx) {
        return _this2.getConditionValue(nCtx);
      });
      var _iterator6 = _createForOfIteratorHelper(relevantTokens),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var token = _step6.value;
          if (this.isString(token) && conditionValue.includes(token.fieldValue)) {
            res = this.truthifyResult(res, token);
          } else if (this.isNumeric(token) && token.fieldValue !== null && conditionValue.includes(String(token.fieldValue))) {
            res = this.truthifyResult(res, token);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return res;
    }
  }, {
    key: "visitNotExpr",
    value: function visitNotExpr(ctx) {
      var _this3 = this;
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!relevantTokens) return res;
      var acceptableFieldTypes = [_types.EFieldType.ais, _types.EFieldType.integer, _types.EFieldType.decimal, _types.EFieldType.string, _types.EFieldType.enum, _types.EFieldType.enum_list];
      this.checkFieldType(relevantTokens, acceptableFieldTypes);
      var conditionValue = ctx.not().numbers() ? ctx.not().numbers().number().map(function (nCtx) {
        return _this3.getConditionValue(nCtx);
      }) : ctx.not().values().value().map(function (vCtx) {
        return _this3.getConditionValue(vCtx).toLowerCase();
      });
      var _iterator7 = _createForOfIteratorHelper(relevantTokens),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var token = _step7.value;
          if (this.isString(token) && !conditionValue.includes(token.fieldValue.toLowerCase())) {
            res = this.truthifyResult(res, token);
          } else if (this.isNumeric(token) && !conditionValue.includes(String(token.fieldValue))) {
            res = this.truthifyResult(res, token);
          } else if (this.isEnumList(token)) {
            (function () {
              var tokenValue = token.fieldValue.map(function (fv) {
                return fv.toLowerCase();
              });
              if (conditionValue.every(function (cv) {
                return !tokenValue.includes(cv);
              })) {
                res = _this3.truthifyResult(res, token);
              }
            })();
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return res;
    }
  }, {
    key: "visitComplexExpr",
    value: function visitComplexExpr(ctx) {
      return _get(_getPrototypeOf(EvaluateConditionVisitor.prototype), "visit", this).call(this, ctx.complex().expr());
    }
  }, {
    key: "visitCountExpr",
    value: function visitCountExpr(ctx) {
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!relevantTokens) return res;
      var acceptableFieldTypes = [_types.EFieldType.string, _types.EFieldType.enum];
      this.checkFieldType(relevantTokens, acceptableFieldTypes);
      var conditionValue = ctx.count().value() ? this.getConditionValue(ctx.count().value()) : null; // null = $DISTINCT
      var operatorCtx = ctx.count().comparator().op();
      var conditionValueCount = this.getConditionValue(ctx.count().comparator().number());
      var tokensForCount = conditionValue ? relevantTokens.filter(function (rt) {
        return rt.fieldValue === conditionValue;
      }) : relevantTokens.reduce(function (uniqueNameTokens, rt) {
        if (uniqueNameTokens.every(function (unt) {
          return unt.fieldValue !== rt.fieldValue;
        })) {
          uniqueNameTokens.push(rt);
        }
        return uniqueNameTokens;
      }, []);
      if (this.compare(operatorCtx, tokensForCount.length, Number(conditionValueCount))) {
        var _iterator8 = _createForOfIteratorHelper(tokensForCount),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var token = _step8.value;
            res = this.truthifyResult(res, token);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      return res;
    }
  }, {
    key: "visitCountComplexExpr",
    value: function visitCountComplexExpr(ctx) {
      var _this4 = this;
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var parentTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!parentTokens) return res;
      var acceptableFieldTypes = [_types.EFieldType.complex];
      this.checkFieldType(parentTokens, acceptableFieldTypes);
      var operatorCtx = ctx.countComplex().comparator().op();
      var conditionResultsCount = this.getConditionValue(ctx.countComplex().comparator().number());
      var distinctFieldName = ctx.countComplex().DISTINCT() ? ctx.countComplex().field().getText() : null;
      var distinctFieldTokens = [];
      var childTokens = [];
      var truthyParentResultsCount = 0;
      var originScope = this.fieldTokensScope;
      var _iterator9 = _createForOfIteratorHelper(parentTokens),
        _step9;
      try {
        parentLoop: for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var parentToken = _step9.value;
          this.setFieldTokensScope(parentToken.children);
          var parentResult = _get(_getPrototypeOf(EvaluateConditionVisitor.prototype), "visit", this).call(this, ctx.countComplex().expr());
          if (this.isTruthy(parentResult) && distinctFieldName) {
            var childTokensBuffer = [];
            var _iterator10 = _createForOfIteratorHelper(parentResult.triggeredFieldTokens),
              _step10;
            try {
              var _loop = function _loop() {
                var childToken = _step10.value;
                if (childToken.fieldName === distinctFieldName && distinctFieldTokens.some(function (distinctToken) {
                  return _this4.isTokenValuesEqual(distinctToken, childToken);
                })) {
                  return "continue|parentLoop";
                } else if (childToken.fieldName === distinctFieldName) {
                  distinctFieldTokens.push(childToken);
                  childTokensBuffer.push(childToken);
                } else {
                  childTokensBuffer.push(childToken);
                }
              };
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _ret = _loop();
                if (_ret === "continue|parentLoop") continue parentLoop;
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
            if (childTokensBuffer.length > 0) {
              truthyParentResultsCount++;
              childTokens = [].concat(_toConsumableArray(childTokens), childTokensBuffer);
            }
          } else if (this.isTruthy(parentResult)) {
            truthyParentResultsCount++;
            childTokens = [].concat(_toConsumableArray(childTokens), _toConsumableArray(parentResult.triggeredFieldTokens));
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      this.setFieldTokensScope(originScope);
      if (this.compare(operatorCtx, truthyParentResultsCount, Number(conditionResultsCount))) {
        res = {
          evaluationResult: true,
          triggeredFieldTokens: new Set(childTokens)
        };
        return res;
      }
      return res;
    }
  }, {
    key: "visitParenExpr",
    value: function visitParenExpr(ctx) {
      return _get(_getPrototypeOf(EvaluateConditionVisitor.prototype), "visit", this).call(this, ctx.expr());
    }
  }, {
    key: "visitVehicleImpactExpr",
    value: function visitVehicleImpactExpr(ctx) {
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!relevantTokens) return res;
      var acceptableFieldTypes = [_types.EFieldType.vehicleImpactType];
      this.checkFieldType(relevantTokens, acceptableFieldTypes);
      var conditionValue = ctx.vehicleImpact().INT().getText();
      var _iterator11 = _createForOfIteratorHelper(relevantTokens),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _token$fieldValue$imp;
          var token = _step11.value;
          if ((_token$fieldValue$imp = token.fieldValue.impactSides) !== null && _token$fieldValue$imp !== void 0 && _token$fieldValue$imp.includes(Number(conditionValue))) {
            res = this.truthifyResult(res, token);
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      return res;
    }
  }, {
    key: "visitValueExpr",
    value: function visitValueExpr(ctx) {
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!relevantTokens) return res;
      var acceptableFieldTypes = [_types.EFieldType.string, _types.EFieldType.enum, _types.EFieldType.enum_list];
      this.checkFieldType(relevantTokens, acceptableFieldTypes);
      var conditionValue = this.getConditionValue(ctx.value());
      var _iterator12 = _createForOfIteratorHelper(relevantTokens),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var token = _step12.value;
          if (this.isEnumList(token)) {
            var tokenValueLC = token.fieldValue.map(function (tv) {
              return tv.toLowerCase();
            });
            if (tokenValueLC.includes(conditionValue.toLowerCase())) {
              res = this.truthifyResult(res, token);
            }
          } else if (this.isString(token)) {
            if (token.fieldValue.toLowerCase() === conditionValue.toLowerCase()) {
              res = this.truthifyResult(res, token);
            }
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      return res;
    }
  }, {
    key: "visitValuesExpr",
    value: function visitValuesExpr(ctx) {
      var _this5 = this;
      var res = null;
      var conditionFieldName = ctx.field().getText();
      var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
      if (!relevantTokens) return res;
      var acceptableFieldTypes = [_types.EFieldType.string, _types.EFieldType.enum, _types.EFieldType.enum_list];
      this.checkFieldType(relevantTokens, acceptableFieldTypes);
      var conditionValues = ctx.values().value().map(function (vCtx) {
        return _this5.getConditionValue(vCtx).toLowerCase();
      });
      var _iterator13 = _createForOfIteratorHelper(relevantTokens),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var token = _step13.value;
          if (this.isEnumList(token)) {
            (function () {
              var tokenValue = token.fieldValue.map(function (tv) {
                return tv.toLowerCase();
              });
              if (conditionValues.some(function (cv) {
                return tokenValue.includes(cv);
              })) {
                res = _this5.truthifyResult(res, token);
              }
            })();
          } else if (this.isString(token)) {
            if (conditionValues.includes(token.fieldValue.toLowerCase())) {
              res = this.truthifyResult(res, token);
            }
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      return res;
    }
  }]);
  return EvaluateConditionVisitor;
}(_T6TriggerVisitor2.default);
exports.EvaluateConditionVisitor = EvaluateConditionVisitor;
//# sourceMappingURL=EvaluateConditionVisitor.js.map