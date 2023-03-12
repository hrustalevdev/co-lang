import antlr4 from 'antlr4';
import deepEqual from 'fast-deep-equal';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var CoLangError = /*#__PURE__*/function (_Error) {
  _inherits(CoLangError, _Error);
  var _super = _createSuper(CoLangError);
  function CoLangError(args) {
    var _this;
    _classCallCheck(this, CoLangError);
    _this = _super.call(this, args.message);
    _this.name = 'CoLangError';
    _this.source = args.source;
    _this.line = args.line;
    _this.column = args.column;
    _this.recognizer = args.recognizer;
    _this.offendingSymbol = args.offendingSymbol;
    _this.e = args.e;
    return _this;
  }
  return _createClass(CoLangError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

var serializedATN$1 = [4, 0, 34, 243, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 26, 1, 26, 1, 27, 1, 27, 1, 28, 1, 28, 1, 29, 3, 29, 204, 8, 29, 1, 29, 4, 29, 207, 8, 29, 11, 29, 12, 29, 208, 1, 30, 1, 30, 1, 30, 1, 30, 1, 31, 1, 31, 3, 31, 217, 8, 31, 1, 31, 1, 31, 1, 32, 1, 32, 3, 32, 223, 8, 32, 1, 32, 1, 32, 1, 32, 5, 32, 228, 8, 32, 10, 32, 12, 32, 231, 9, 32, 1, 33, 4, 33, 234, 8, 33, 11, 33, 12, 33, 235, 1, 33, 1, 33, 1, 34, 1, 34, 1, 35, 1, 35, 0, 0, 36, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22, 45, 23, 47, 24, 49, 25, 51, 26, 53, 27, 55, 28, 57, 29, 59, 30, 61, 31, 63, 32, 65, 33, 67, 34, 69, 0, 71, 0, 1, 0, 5, 2, 0, 44, 44, 59, 59, 3, 0, 77, 77, 100, 100, 121, 121, 3, 0, 9, 10, 12, 13, 32, 32, 2, 0, 65, 90, 97, 122, 1, 0, 48, 57, 248, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 0, 45, 1, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 49, 1, 0, 0, 0, 0, 51, 1, 0, 0, 0, 0, 53, 1, 0, 0, 0, 0, 55, 1, 0, 0, 0, 0, 57, 1, 0, 0, 0, 0, 59, 1, 0, 0, 0, 0, 61, 1, 0, 0, 0, 0, 63, 1, 0, 0, 0, 0, 65, 1, 0, 0, 0, 0, 67, 1, 0, 0, 0, 1, 73, 1, 0, 0, 0, 3, 75, 1, 0, 0, 0, 5, 77, 1, 0, 0, 0, 7, 79, 1, 0, 0, 0, 9, 81, 1, 0, 0, 0, 11, 83, 1, 0, 0, 0, 13, 85, 1, 0, 0, 0, 15, 87, 1, 0, 0, 0, 17, 89, 1, 0, 0, 0, 19, 93, 1, 0, 0, 0, 21, 99, 1, 0, 0, 0, 23, 105, 1, 0, 0, 0, 25, 110, 1, 0, 0, 0, 27, 117, 1, 0, 0, 0, 29, 122, 1, 0, 0, 0, 31, 131, 1, 0, 0, 0, 33, 138, 1, 0, 0, 0, 35, 153, 1, 0, 0, 0, 37, 163, 1, 0, 0, 0, 39, 175, 1, 0, 0, 0, 41, 180, 1, 0, 0, 0, 43, 184, 1, 0, 0, 0, 45, 186, 1, 0, 0, 0, 47, 189, 1, 0, 0, 0, 49, 191, 1, 0, 0, 0, 51, 194, 1, 0, 0, 0, 53, 196, 1, 0, 0, 0, 55, 198, 1, 0, 0, 0, 57, 200, 1, 0, 0, 0, 59, 203, 1, 0, 0, 0, 61, 210, 1, 0, 0, 0, 63, 216, 1, 0, 0, 0, 65, 222, 1, 0, 0, 0, 67, 233, 1, 0, 0, 0, 69, 239, 1, 0, 0, 0, 71, 241, 1, 0, 0, 0, 73, 74, 5, 36, 0, 0, 74, 2, 1, 0, 0, 0, 75, 76, 5, 45, 0, 0, 76, 4, 1, 0, 0, 0, 77, 78, 5, 47, 0, 0, 78, 6, 1, 0, 0, 0, 79, 80, 5, 176, 0, 0, 80, 8, 1, 0, 0, 0, 81, 82, 5, 43, 0, 0, 82, 10, 1, 0, 0, 0, 83, 84, 5, 37, 0, 0, 84, 12, 1, 0, 0, 0, 85, 86, 5, 38, 0, 0, 86, 14, 1, 0, 0, 0, 87, 88, 5, 46, 0, 0, 88, 16, 1, 0, 0, 0, 89, 90, 5, 36, 0, 0, 90, 91, 5, 73, 0, 0, 91, 92, 5, 70, 0, 0, 92, 18, 1, 0, 0, 0, 93, 94, 5, 36, 0, 0, 94, 95, 5, 70, 0, 0, 95, 96, 5, 82, 0, 0, 96, 97, 5, 79, 0, 0, 97, 98, 5, 77, 0, 0, 98, 20, 1, 0, 0, 0, 99, 100, 5, 36, 0, 0, 100, 101, 5, 84, 0, 0, 101, 102, 5, 72, 0, 0, 102, 103, 5, 69, 0, 0, 103, 104, 5, 78, 0, 0, 104, 22, 1, 0, 0, 0, 105, 106, 5, 36, 0, 0, 106, 107, 5, 65, 0, 0, 107, 108, 5, 78, 0, 0, 108, 109, 5, 89, 0, 0, 109, 24, 1, 0, 0, 0, 110, 111, 5, 36, 0, 0, 111, 112, 5, 69, 0, 0, 112, 113, 5, 77, 0, 0, 113, 114, 5, 80, 0, 0, 114, 115, 5, 84, 0, 0, 115, 116, 5, 89, 0, 0, 116, 26, 1, 0, 0, 0, 117, 118, 5, 36, 0, 0, 118, 119, 5, 78, 0, 0, 119, 120, 5, 79, 0, 0, 120, 121, 5, 84, 0, 0, 121, 28, 1, 0, 0, 0, 122, 123, 5, 36, 0, 0, 123, 124, 5, 67, 0, 0, 124, 125, 5, 79, 0, 0, 125, 126, 5, 77, 0, 0, 126, 127, 5, 80, 0, 0, 127, 128, 5, 76, 0, 0, 128, 129, 5, 69, 0, 0, 129, 130, 5, 88, 0, 0, 130, 30, 1, 0, 0, 0, 131, 132, 5, 36, 0, 0, 132, 133, 5, 67, 0, 0, 133, 134, 5, 79, 0, 0, 134, 135, 5, 85, 0, 0, 135, 136, 5, 78, 0, 0, 136, 137, 5, 84, 0, 0, 137, 32, 1, 0, 0, 0, 138, 139, 5, 36, 0, 0, 139, 140, 5, 67, 0, 0, 140, 141, 5, 79, 0, 0, 141, 142, 5, 85, 0, 0, 142, 143, 5, 78, 0, 0, 143, 144, 5, 84, 0, 0, 144, 145, 5, 95, 0, 0, 145, 146, 5, 67, 0, 0, 146, 147, 5, 79, 0, 0, 147, 148, 5, 77, 0, 0, 148, 149, 5, 80, 0, 0, 149, 150, 5, 76, 0, 0, 150, 151, 5, 69, 0, 0, 151, 152, 5, 88, 0, 0, 152, 34, 1, 0, 0, 0, 153, 154, 5, 36, 0, 0, 154, 155, 5, 68, 0, 0, 155, 156, 5, 73, 0, 0, 156, 157, 5, 83, 0, 0, 157, 158, 5, 84, 0, 0, 158, 159, 5, 73, 0, 0, 159, 160, 5, 78, 0, 0, 160, 161, 5, 67, 0, 0, 161, 162, 5, 84, 0, 0, 162, 36, 1, 0, 0, 0, 163, 164, 5, 105, 0, 0, 164, 165, 5, 109, 0, 0, 165, 166, 5, 112, 0, 0, 166, 167, 5, 97, 0, 0, 167, 168, 5, 99, 0, 0, 168, 169, 5, 116, 0, 0, 169, 170, 5, 83, 0, 0, 170, 171, 5, 105, 0, 0, 171, 172, 5, 100, 0, 0, 172, 173, 5, 101, 0, 0, 173, 174, 5, 115, 0, 0, 174, 38, 1, 0, 0, 0, 175, 176, 5, 36, 0, 0, 176, 177, 5, 65, 0, 0, 177, 178, 5, 78, 0, 0, 178, 179, 5, 68, 0, 0, 179, 40, 1, 0, 0, 0, 180, 181, 5, 36, 0, 0, 181, 182, 5, 79, 0, 0, 182, 183, 5, 82, 0, 0, 183, 42, 1, 0, 0, 0, 184, 185, 5, 62, 0, 0, 185, 44, 1, 0, 0, 0, 186, 187, 5, 62, 0, 0, 187, 188, 5, 61, 0, 0, 188, 46, 1, 0, 0, 0, 189, 190, 5, 60, 0, 0, 190, 48, 1, 0, 0, 0, 191, 192, 5, 60, 0, 0, 192, 193, 5, 61, 0, 0, 193, 50, 1, 0, 0, 0, 194, 195, 5, 61, 0, 0, 195, 52, 1, 0, 0, 0, 196, 197, 5, 40, 0, 0, 197, 54, 1, 0, 0, 0, 198, 199, 5, 41, 0, 0, 199, 56, 1, 0, 0, 0, 200, 201, 7, 0, 0, 0, 201, 58, 1, 0, 0, 0, 202, 204, 5, 45, 0, 0, 203, 202, 1, 0, 0, 0, 203, 204, 1, 0, 0, 0, 204, 206, 1, 0, 0, 0, 205, 207, 3, 71, 35, 0, 206, 205, 1, 0, 0, 0, 207, 208, 1, 0, 0, 0, 208, 206, 1, 0, 0, 0, 208, 209, 1, 0, 0, 0, 209, 60, 1, 0, 0, 0, 210, 211, 3, 59, 29, 0, 211, 212, 5, 46, 0, 0, 212, 213, 3, 59, 29, 0, 213, 62, 1, 0, 0, 0, 214, 217, 3, 59, 29, 0, 215, 217, 3, 61, 30, 0, 216, 214, 1, 0, 0, 0, 216, 215, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 219, 7, 1, 0, 0, 219, 64, 1, 0, 0, 0, 220, 223, 3, 69, 34, 0, 221, 223, 3, 71, 35, 0, 222, 220, 1, 0, 0, 0, 222, 221, 1, 0, 0, 0, 223, 229, 1, 0, 0, 0, 224, 228, 3, 69, 34, 0, 225, 228, 3, 71, 35, 0, 226, 228, 5, 95, 0, 0, 227, 224, 1, 0, 0, 0, 227, 225, 1, 0, 0, 0, 227, 226, 1, 0, 0, 0, 228, 231, 1, 0, 0, 0, 229, 227, 1, 0, 0, 0, 229, 230, 1, 0, 0, 0, 230, 66, 1, 0, 0, 0, 231, 229, 1, 0, 0, 0, 232, 234, 7, 2, 0, 0, 233, 232, 1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 233, 1, 0, 0, 0, 235, 236, 1, 0, 0, 0, 236, 237, 1, 0, 0, 0, 237, 238, 6, 33, 0, 0, 238, 68, 1, 0, 0, 0, 239, 240, 7, 3, 0, 0, 240, 70, 1, 0, 0, 0, 241, 242, 7, 4, 0, 0, 242, 72, 1, 0, 0, 0, 8, 0, 203, 208, 216, 222, 227, 229, 235, 1, 6, 0, 0];
var atn$1 = new antlr4.atn.ATNDeserializer().deserialize(serializedATN$1);
var decisionsToDFA$1 = atn$1.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});
var T6TriggerLexer = /*#__PURE__*/function (_antlr4$Lexer) {
  _inherits(T6TriggerLexer, _antlr4$Lexer);
  var _super = _createSuper(T6TriggerLexer);
  function T6TriggerLexer(input) {
    var _this;
    _classCallCheck(this, T6TriggerLexer);
    _this = _super.call(this, input);
    _this._interp = new antlr4.atn.LexerATNSimulator(_assertThisInitialized(_this), atn$1, decisionsToDFA$1, new antlr4.PredictionContextCache());
    return _this;
  }
  _createClass(T6TriggerLexer, [{
    key: "atn",
    get: function get() {
      return atn$1;
    }
  }]);
  return T6TriggerLexer;
}(antlr4.Lexer);
_defineProperty(T6TriggerLexer, "grammarFileName", 'T6Trigger.g4');
_defineProperty(T6TriggerLexer, "channelNames", ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']);
_defineProperty(T6TriggerLexer, "modeNames", ['DEFAULT_MODE']);
_defineProperty(T6TriggerLexer, "literalNames", [null, "'\\u0024'", "'-'", "'/'", "'\\u00B0'", "'\\u002B'", "'\\u0025'", "'\\u0026'", "'.'", "'$IF'", "'$FROM'", "'$THEN'", "'$ANY'", "'$EMPTY'", "'$NOT'", "'$COMPLEX'", "'$COUNT'", "'$COUNT_COMPLEX'", "'$DISTINCT'", "'impactSides'", "'$AND'", "'$OR'", "'>'", "'>='", "'<'", "'<='", "'='", "'('", "')'"]);
_defineProperty(T6TriggerLexer, "symbolicNames", [null, null, null, null, null, null, null, null, null, 'IF', 'FROM', 'THEN', 'ANY', 'EMPTY', 'NOT', 'COMPLEX', 'COUNT', 'COUNT_COMPLEX', 'DISTINCT', 'IMPACT_SIDES', 'AND', 'OR', 'GT', 'GE', 'LT', 'LE', 'EQ', 'LPAREN', 'RPAREN', 'SEPARATOR', 'INT', 'DECIMAL', 'DATE_TIME', 'IDENTIFIER', 'WS']);
_defineProperty(T6TriggerLexer, "ruleNames", ['T__0', 'T__1', 'T__2', 'T__3', 'T__4', 'T__5', 'T__6', 'T__7', 'IF', 'FROM', 'THEN', 'ANY', 'EMPTY', 'NOT', 'COMPLEX', 'COUNT', 'COUNT_COMPLEX', 'DISTINCT', 'IMPACT_SIDES', 'AND', 'OR', 'GT', 'GE', 'LT', 'LE', 'EQ', 'LPAREN', 'RPAREN', 'SEPARATOR', 'INT', 'DECIMAL', 'DATE_TIME', 'IDENTIFIER', 'WS', 'LETTER', 'DIGIT']);
T6TriggerLexer.EOF = antlr4.Token.EOF;
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
}(antlr4.tree.ParseTreeVisitor);

var serializedATN = [4, 1, 34, 211, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 113, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 119, 8, 1, 10, 1, 12, 1, 122, 9, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 5, 5, 135, 8, 5, 10, 5, 12, 5, 138, 9, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 3, 8, 147, 8, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 155, 8, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 168, 8, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 180, 8, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 5, 14, 198, 8, 14, 10, 14, 12, 14, 201, 9, 14, 1, 15, 1, 15, 1, 15, 5, 15, 206, 8, 15, 10, 15, 12, 15, 209, 9, 15, 1, 15, 3, 136, 199, 207, 1, 2, 16, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 0, 4, 1, 0, 30, 31, 1, 0, 22, 26, 1, 0, 20, 21, 3, 0, 1, 1, 9, 21, 29, 29, 226, 0, 32, 1, 0, 0, 0, 2, 112, 1, 0, 0, 0, 4, 123, 1, 0, 0, 0, 6, 125, 1, 0, 0, 0, 8, 129, 1, 0, 0, 0, 10, 131, 1, 0, 0, 0, 12, 139, 1, 0, 0, 0, 14, 141, 1, 0, 0, 0, 16, 143, 1, 0, 0, 0, 18, 148, 1, 0, 0, 0, 20, 150, 1, 0, 0, 0, 22, 158, 1, 0, 0, 0, 24, 163, 1, 0, 0, 0, 26, 172, 1, 0, 0, 0, 28, 199, 1, 0, 0, 0, 30, 202, 1, 0, 0, 0, 32, 33, 3, 2, 1, 0, 33, 34, 5, 0, 0, 1, 34, 1, 1, 0, 0, 0, 35, 36, 6, 1, -1, 0, 36, 37, 5, 9, 0, 0, 37, 38, 3, 16, 8, 0, 38, 39, 5, 10, 0, 0, 39, 40, 3, 12, 6, 0, 40, 41, 5, 11, 0, 0, 41, 113, 1, 0, 0, 0, 42, 43, 5, 9, 0, 0, 43, 44, 5, 12, 0, 0, 44, 45, 5, 10, 0, 0, 45, 46, 3, 12, 6, 0, 46, 47, 5, 11, 0, 0, 47, 113, 1, 0, 0, 0, 48, 49, 5, 9, 0, 0, 49, 50, 5, 13, 0, 0, 50, 51, 5, 10, 0, 0, 51, 52, 3, 12, 6, 0, 52, 53, 5, 11, 0, 0, 53, 113, 1, 0, 0, 0, 54, 55, 5, 9, 0, 0, 55, 56, 3, 8, 4, 0, 56, 57, 5, 10, 0, 0, 57, 58, 3, 12, 6, 0, 58, 59, 5, 11, 0, 0, 59, 113, 1, 0, 0, 0, 60, 61, 5, 9, 0, 0, 61, 62, 3, 10, 5, 0, 62, 63, 5, 10, 0, 0, 63, 64, 3, 12, 6, 0, 64, 65, 5, 11, 0, 0, 65, 113, 1, 0, 0, 0, 66, 67, 5, 9, 0, 0, 67, 68, 3, 20, 10, 0, 68, 69, 5, 10, 0, 0, 69, 70, 3, 12, 6, 0, 70, 71, 5, 11, 0, 0, 71, 113, 1, 0, 0, 0, 72, 73, 5, 9, 0, 0, 73, 74, 3, 22, 11, 0, 74, 75, 5, 10, 0, 0, 75, 76, 3, 12, 6, 0, 76, 77, 5, 11, 0, 0, 77, 113, 1, 0, 0, 0, 78, 79, 5, 9, 0, 0, 79, 80, 3, 24, 12, 0, 80, 81, 5, 10, 0, 0, 81, 82, 3, 12, 6, 0, 82, 83, 5, 11, 0, 0, 83, 113, 1, 0, 0, 0, 84, 85, 5, 9, 0, 0, 85, 86, 3, 26, 13, 0, 86, 87, 5, 10, 0, 0, 87, 88, 3, 12, 6, 0, 88, 89, 5, 11, 0, 0, 89, 113, 1, 0, 0, 0, 90, 91, 5, 27, 0, 0, 91, 92, 3, 2, 1, 0, 92, 93, 5, 28, 0, 0, 93, 113, 1, 0, 0, 0, 94, 95, 5, 9, 0, 0, 95, 96, 3, 6, 3, 0, 96, 97, 5, 10, 0, 0, 97, 98, 3, 12, 6, 0, 98, 99, 5, 11, 0, 0, 99, 113, 1, 0, 0, 0, 100, 101, 5, 9, 0, 0, 101, 102, 3, 28, 14, 0, 102, 103, 5, 10, 0, 0, 103, 104, 3, 12, 6, 0, 104, 105, 5, 11, 0, 0, 105, 113, 1, 0, 0, 0, 106, 107, 5, 9, 0, 0, 107, 108, 3, 30, 15, 0, 108, 109, 5, 10, 0, 0, 109, 110, 3, 12, 6, 0, 110, 111, 5, 11, 0, 0, 111, 113, 1, 0, 0, 0, 112, 35, 1, 0, 0, 0, 112, 42, 1, 0, 0, 0, 112, 48, 1, 0, 0, 0, 112, 54, 1, 0, 0, 0, 112, 60, 1, 0, 0, 0, 112, 66, 1, 0, 0, 0, 112, 72, 1, 0, 0, 0, 112, 78, 1, 0, 0, 0, 112, 84, 1, 0, 0, 0, 112, 90, 1, 0, 0, 0, 112, 94, 1, 0, 0, 0, 112, 100, 1, 0, 0, 0, 112, 106, 1, 0, 0, 0, 113, 120, 1, 0, 0, 0, 114, 115, 10, 14, 0, 0, 115, 116, 3, 18, 9, 0, 116, 117, 3, 2, 1, 15, 117, 119, 1, 0, 0, 0, 118, 114, 1, 0, 0, 0, 119, 122, 1, 0, 0, 0, 120, 118, 1, 0, 0, 0, 120, 121, 1, 0, 0, 0, 121, 3, 1, 0, 0, 0, 122, 120, 1, 0, 0, 0, 123, 124, 5, 32, 0, 0, 124, 5, 1, 0, 0, 0, 125, 126, 5, 19, 0, 0, 126, 127, 5, 26, 0, 0, 127, 128, 5, 30, 0, 0, 128, 7, 1, 0, 0, 0, 129, 130, 7, 0, 0, 0, 130, 9, 1, 0, 0, 0, 131, 136, 3, 8, 4, 0, 132, 133, 5, 29, 0, 0, 133, 135, 3, 8, 4, 0, 134, 132, 1, 0, 0, 0, 135, 138, 1, 0, 0, 0, 136, 137, 1, 0, 0, 0, 136, 134, 1, 0, 0, 0, 137, 11, 1, 0, 0, 0, 138, 136, 1, 0, 0, 0, 139, 140, 5, 33, 0, 0, 140, 13, 1, 0, 0, 0, 141, 142, 7, 1, 0, 0, 142, 15, 1, 0, 0, 0, 143, 146, 3, 14, 7, 0, 144, 147, 3, 8, 4, 0, 145, 147, 3, 4, 2, 0, 146, 144, 1, 0, 0, 0, 146, 145, 1, 0, 0, 0, 147, 17, 1, 0, 0, 0, 148, 149, 7, 2, 0, 0, 149, 19, 1, 0, 0, 0, 150, 151, 5, 14, 0, 0, 151, 154, 5, 27, 0, 0, 152, 155, 3, 10, 5, 0, 153, 155, 3, 30, 15, 0, 154, 152, 1, 0, 0, 0, 154, 153, 1, 0, 0, 0, 155, 156, 1, 0, 0, 0, 156, 157, 5, 28, 0, 0, 157, 21, 1, 0, 0, 0, 158, 159, 5, 15, 0, 0, 159, 160, 5, 27, 0, 0, 160, 161, 3, 2, 1, 0, 161, 162, 5, 28, 0, 0, 162, 23, 1, 0, 0, 0, 163, 164, 5, 16, 0, 0, 164, 167, 5, 27, 0, 0, 165, 168, 5, 18, 0, 0, 166, 168, 3, 28, 14, 0, 167, 165, 1, 0, 0, 0, 167, 166, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 170, 5, 28, 0, 0, 170, 171, 3, 16, 8, 0, 171, 25, 1, 0, 0, 0, 172, 173, 5, 17, 0, 0, 173, 179, 5, 27, 0, 0, 174, 180, 3, 2, 1, 0, 175, 176, 5, 18, 0, 0, 176, 177, 3, 12, 6, 0, 177, 178, 3, 2, 1, 0, 178, 180, 1, 0, 0, 0, 179, 174, 1, 0, 0, 0, 179, 175, 1, 0, 0, 0, 180, 181, 1, 0, 0, 0, 181, 182, 5, 28, 0, 0, 182, 183, 3, 16, 8, 0, 183, 27, 1, 0, 0, 0, 184, 198, 8, 3, 0, 0, 185, 198, 3, 8, 4, 0, 186, 198, 3, 14, 7, 0, 187, 198, 5, 33, 0, 0, 188, 198, 5, 27, 0, 0, 189, 198, 5, 28, 0, 0, 190, 198, 5, 2, 0, 0, 191, 198, 5, 3, 0, 0, 192, 198, 5, 4, 0, 0, 193, 198, 5, 5, 0, 0, 194, 198, 5, 6, 0, 0, 195, 198, 5, 7, 0, 0, 196, 198, 5, 8, 0, 0, 197, 184, 1, 0, 0, 0, 197, 185, 1, 0, 0, 0, 197, 186, 1, 0, 0, 0, 197, 187, 1, 0, 0, 0, 197, 188, 1, 0, 0, 0, 197, 189, 1, 0, 0, 0, 197, 190, 1, 0, 0, 0, 197, 191, 1, 0, 0, 0, 197, 192, 1, 0, 0, 0, 197, 193, 1, 0, 0, 0, 197, 194, 1, 0, 0, 0, 197, 195, 1, 0, 0, 0, 197, 196, 1, 0, 0, 0, 198, 201, 1, 0, 0, 0, 199, 200, 1, 0, 0, 0, 199, 197, 1, 0, 0, 0, 200, 29, 1, 0, 0, 0, 201, 199, 1, 0, 0, 0, 202, 207, 3, 28, 14, 0, 203, 204, 5, 29, 0, 0, 204, 206, 3, 28, 14, 0, 205, 203, 1, 0, 0, 0, 206, 209, 1, 0, 0, 0, 207, 208, 1, 0, 0, 0, 207, 205, 1, 0, 0, 0, 208, 31, 1, 0, 0, 0, 209, 207, 1, 0, 0, 0, 10, 112, 120, 136, 146, 154, 167, 179, 197, 199, 207];
var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});
var sharedContextCache = new antlr4.PredictionContextCache();
var T6TriggerParser = /*#__PURE__*/function (_antlr4$Parser) {
  _inherits(T6TriggerParser, _antlr4$Parser);
  var _super = _createSuper(T6TriggerParser);
  function T6TriggerParser(input) {
    var _this;
    _classCallCheck(this, T6TriggerParser);
    _this = _super.call(this, input);
    _this._interp = new antlr4.atn.ParserATNSimulator(_assertThisInitialized(_this), atn, decisionsToDFA, sharedContextCache);
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
        if (re instanceof antlr4.error.RecognitionException) {
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
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new BinaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
            this.pushNewRecursionContext(localctx, _startState, T6TriggerParser.RULE_expr);
            this.state = 114;
            if (!this.precpred(this._ctx, 14)) {
              throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 14)');
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
        if (error instanceof antlr4.error.RecognitionException) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
        while (_alt != 1 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
            throw new antlr4.error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 169;
        this.match(T6TriggerParser.RPAREN);
        this.state = 170;
        this.comparator();
      } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 181;
        this.match(T6TriggerParser.RPAREN);
        this.state = 182;
        this.comparator();
      } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
        while (_alt != 1 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
        while (_alt != 1 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
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
        if (re instanceof antlr4.error.RecognitionException) {
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
}(antlr4.Parser);
_defineProperty(T6TriggerParser, "grammarFileName", 'java-escape');
_defineProperty(T6TriggerParser, "literalNames", [null, "'\\u0024'", "'-'", "'/'", "'\\u00B0'", "'\\u002B'", "'\\u0025'", "'\\u0026'", "'.'", "'$IF'", "'$FROM'", "'$THEN'", "'$ANY'", "'$EMPTY'", "'$NOT'", "'$COMPLEX'", "'$COUNT'", "'$COUNT_COMPLEX'", "'$DISTINCT'", "'impactSides'", "'$AND'", "'$OR'", "'>'", "'>='", "'<'", "'<='", "'='", "'('", "')'"]);
_defineProperty(T6TriggerParser, "symbolicNames", [null, null, null, null, null, null, null, null, null, 'IF', 'FROM', 'THEN', 'ANY', 'EMPTY', 'NOT', 'COMPLEX', 'COUNT', 'COUNT_COMPLEX', 'DISTINCT', 'IMPACT_SIDES', 'AND', 'OR', 'GT', 'GE', 'LT', 'LE', 'EQ', 'LPAREN', 'RPAREN', 'SEPARATOR', 'INT', 'DECIMAL', 'DATE_TIME', 'IDENTIFIER', 'WS']);
_defineProperty(T6TriggerParser, "ruleNames", ['parse', 'expr', 'dateTime', 'vehicleImpact', 'number', 'numbers', 'field', 'op', 'comparator', 'binary', 'not', 'complex', 'count', 'countComplex', 'value', 'values']);
T6TriggerParser.EOF = antlr4.Token.EOF;
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitParse(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ParseContext;
}(antlr4.ParserRuleContext);
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
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitDateTime(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return DateTimeContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitVehicleImpact(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return VehicleImpactContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitNumber(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return NumberContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitNumbers(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return NumbersContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitField(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return FieldContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitOp(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return OpContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitComparator(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ComparatorContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitBinary(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return BinaryContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitNot(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return NotContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitComplex(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ComplexContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitCount(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return CountContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitCountComplex(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return CountComplexContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitValue(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ValueContext;
}(antlr4.ParserRuleContext);
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
      if (visitor instanceof T6TriggerVisitor) {
        return visitor.visitValues(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);
  return ValuesContext;
}(antlr4.ParserRuleContext);
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

/*#__PURE__*/(function (_T6TriggerParser$Pars) {
  _inherits(ParseCtx, _T6TriggerParser$Pars);
  var _super = _createSuper(ParseCtx);
  function ParseCtx() {
    _classCallCheck(this, ParseCtx);
    return _super.apply(this, arguments);
  }
  return _createClass(ParseCtx);
})(T6TriggerParser.ParseContext);
/*#__PURE__*/(function (_T6TriggerParser$Expr) {
  _inherits(ExprCtx, _T6TriggerParser$Expr);
  var _super2 = _createSuper(ExprCtx);
  function ExprCtx() {
    _classCallCheck(this, ExprCtx);
    return _super2.apply(this, arguments);
  }
  return _createClass(ExprCtx);
})(T6TriggerParser.ExprContext);

/** ExprContext alternatives */
/*#__PURE__*/(function (_T6TriggerParser$Numb) {
  _inherits(NumbersExprCtx, _T6TriggerParser$Numb);
  var _super3 = _createSuper(NumbersExprCtx);
  function NumbersExprCtx() {
    _classCallCheck(this, NumbersExprCtx);
    return _super3.apply(this, arguments);
  }
  return _createClass(NumbersExprCtx);
})(T6TriggerParser.NumbersExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Comp) {
  _inherits(ComparatorExprCtx, _T6TriggerParser$Comp);
  var _super4 = _createSuper(ComparatorExprCtx);
  function ComparatorExprCtx() {
    _classCallCheck(this, ComparatorExprCtx);
    return _super4.apply(this, arguments);
  }
  return _createClass(ComparatorExprCtx);
})(T6TriggerParser.ComparatorExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Comp2) {
  _inherits(ComplexExprCtx, _T6TriggerParser$Comp2);
  var _super5 = _createSuper(ComplexExprCtx);
  function ComplexExprCtx() {
    _classCallCheck(this, ComplexExprCtx);
    return _super5.apply(this, arguments);
  }
  return _createClass(ComplexExprCtx);
})(T6TriggerParser.ComplexExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Numb2) {
  _inherits(NumberExprCtx, _T6TriggerParser$Numb2);
  var _super6 = _createSuper(NumberExprCtx);
  function NumberExprCtx() {
    _classCallCheck(this, NumberExprCtx);
    return _super6.apply(this, arguments);
  }
  return _createClass(NumberExprCtx);
})(T6TriggerParser.NumberExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Bina) {
  _inherits(BinaryExprCtx, _T6TriggerParser$Bina);
  var _super7 = _createSuper(BinaryExprCtx);
  function BinaryExprCtx() {
    _classCallCheck(this, BinaryExprCtx);
    return _super7.apply(this, arguments);
  }
  return _createClass(BinaryExprCtx);
})(T6TriggerParser.BinaryExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Pare) {
  _inherits(ParenExprCtx, _T6TriggerParser$Pare);
  var _super8 = _createSuper(ParenExprCtx);
  function ParenExprCtx() {
    _classCallCheck(this, ParenExprCtx);
    return _super8.apply(this, arguments);
  }
  return _createClass(ParenExprCtx);
})(T6TriggerParser.ParenExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Coun) {
  _inherits(CountExprCtx, _T6TriggerParser$Coun);
  var _super9 = _createSuper(CountExprCtx);
  function CountExprCtx() {
    _classCallCheck(this, CountExprCtx);
    return _super9.apply(this, arguments);
  }
  return _createClass(CountExprCtx);
})(T6TriggerParser.CountExprContext);
/*#__PURE__*/(function (_T6TriggerParser$NotE) {
  _inherits(NotExprCtx, _T6TriggerParser$NotE);
  var _super10 = _createSuper(NotExprCtx);
  function NotExprCtx() {
    _classCallCheck(this, NotExprCtx);
    return _super10.apply(this, arguments);
  }
  return _createClass(NotExprCtx);
})(T6TriggerParser.NotExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Coun2) {
  _inherits(CountComplexExprCtx, _T6TriggerParser$Coun2);
  var _super11 = _createSuper(CountComplexExprCtx);
  function CountComplexExprCtx() {
    _classCallCheck(this, CountComplexExprCtx);
    return _super11.apply(this, arguments);
  }
  return _createClass(CountComplexExprCtx);
})(T6TriggerParser.CountComplexExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Valu) {
  _inherits(ValueExprCtx, _T6TriggerParser$Valu);
  var _super12 = _createSuper(ValueExprCtx);
  function ValueExprCtx() {
    _classCallCheck(this, ValueExprCtx);
    return _super12.apply(this, arguments);
  }
  return _createClass(ValueExprCtx);
})(T6TriggerParser.ValueExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Empt) {
  _inherits(EmptyExprCtx, _T6TriggerParser$Empt);
  var _super13 = _createSuper(EmptyExprCtx);
  function EmptyExprCtx() {
    _classCallCheck(this, EmptyExprCtx);
    return _super13.apply(this, arguments);
  }
  return _createClass(EmptyExprCtx);
})(T6TriggerParser.EmptyExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Vehi) {
  _inherits(VehicleImpactExprCtx, _T6TriggerParser$Vehi);
  var _super14 = _createSuper(VehicleImpactExprCtx);
  function VehicleImpactExprCtx() {
    _classCallCheck(this, VehicleImpactExprCtx);
    return _super14.apply(this, arguments);
  }
  return _createClass(VehicleImpactExprCtx);
})(T6TriggerParser.VehicleImpactExprContext);
/*#__PURE__*/(function (_T6TriggerParser$Valu2) {
  _inherits(ValuesExprCtx, _T6TriggerParser$Valu2);
  var _super15 = _createSuper(ValuesExprCtx);
  function ValuesExprCtx() {
    _classCallCheck(this, ValuesExprCtx);
    return _super15.apply(this, arguments);
  }
  return _createClass(ValuesExprCtx);
})(T6TriggerParser.ValuesExprContext);
/*#__PURE__*/(function (_T6TriggerParser$AnyE) {
  _inherits(AnyExprCtx, _T6TriggerParser$AnyE);
  var _super16 = _createSuper(AnyExprCtx);
  function AnyExprCtx() {
    _classCallCheck(this, AnyExprCtx);
    return _super16.apply(this, arguments);
  }
  return _createClass(AnyExprCtx);
})(T6TriggerParser.AnyExprContext);

/** Accessory */
/*#__PURE__*/(function (_T6TriggerParser$Date) {
  _inherits(DateTimeCtx, _T6TriggerParser$Date);
  var _super17 = _createSuper(DateTimeCtx);
  function DateTimeCtx() {
    _classCallCheck(this, DateTimeCtx);
    return _super17.apply(this, arguments);
  }
  return _createClass(DateTimeCtx);
})(T6TriggerParser.DateTimeContext);
/*#__PURE__*/(function (_T6TriggerParser$Vehi2) {
  _inherits(VehicleImpactCtx, _T6TriggerParser$Vehi2);
  var _super18 = _createSuper(VehicleImpactCtx);
  function VehicleImpactCtx() {
    _classCallCheck(this, VehicleImpactCtx);
    return _super18.apply(this, arguments);
  }
  return _createClass(VehicleImpactCtx);
})(T6TriggerParser.VehicleImpactContext);
/*#__PURE__*/(function (_T6TriggerParser$Numb3) {
  _inherits(NumberCtx, _T6TriggerParser$Numb3);
  var _super19 = _createSuper(NumberCtx);
  function NumberCtx() {
    _classCallCheck(this, NumberCtx);
    return _super19.apply(this, arguments);
  }
  return _createClass(NumberCtx);
})(T6TriggerParser.NumberContext);
/*#__PURE__*/(function (_T6TriggerParser$Numb4) {
  _inherits(NumbersCtx, _T6TriggerParser$Numb4);
  var _super20 = _createSuper(NumbersCtx);
  function NumbersCtx() {
    _classCallCheck(this, NumbersCtx);
    return _super20.apply(this, arguments);
  }
  return _createClass(NumbersCtx);
})(T6TriggerParser.NumbersContext);
/*#__PURE__*/(function (_T6TriggerParser$Fiel) {
  _inherits(FieldCtx, _T6TriggerParser$Fiel);
  var _super21 = _createSuper(FieldCtx);
  function FieldCtx() {
    _classCallCheck(this, FieldCtx);
    return _super21.apply(this, arguments);
  }
  return _createClass(FieldCtx);
})(T6TriggerParser.FieldContext);
/*#__PURE__*/(function (_T6TriggerParser$OpCo) {
  _inherits(OpCtx, _T6TriggerParser$OpCo);
  var _super22 = _createSuper(OpCtx);
  function OpCtx() {
    _classCallCheck(this, OpCtx);
    return _super22.apply(this, arguments);
  }
  return _createClass(OpCtx);
})(T6TriggerParser.OpContext);
/*#__PURE__*/(function (_T6TriggerParser$Comp3) {
  _inherits(ComparatorCtx, _T6TriggerParser$Comp3);
  var _super23 = _createSuper(ComparatorCtx);
  function ComparatorCtx() {
    _classCallCheck(this, ComparatorCtx);
    return _super23.apply(this, arguments);
  }
  return _createClass(ComparatorCtx);
})(T6TriggerParser.ComparatorContext);
/*#__PURE__*/(function (_T6TriggerParser$Bina2) {
  _inherits(BinaryCtx, _T6TriggerParser$Bina2);
  var _super24 = _createSuper(BinaryCtx);
  function BinaryCtx() {
    _classCallCheck(this, BinaryCtx);
    return _super24.apply(this, arguments);
  }
  return _createClass(BinaryCtx);
})(T6TriggerParser.BinaryContext);
/*#__PURE__*/(function (_T6TriggerParser$NotC) {
  _inherits(NotCtx, _T6TriggerParser$NotC);
  var _super25 = _createSuper(NotCtx);
  function NotCtx() {
    _classCallCheck(this, NotCtx);
    return _super25.apply(this, arguments);
  }
  return _createClass(NotCtx);
})(T6TriggerParser.NotContext);
/*#__PURE__*/(function (_T6TriggerParser$Comp4) {
  _inherits(ComplexCtx, _T6TriggerParser$Comp4);
  var _super26 = _createSuper(ComplexCtx);
  function ComplexCtx() {
    _classCallCheck(this, ComplexCtx);
    return _super26.apply(this, arguments);
  }
  return _createClass(ComplexCtx);
})(T6TriggerParser.ComplexContext);
/*#__PURE__*/(function (_T6TriggerParser$Coun3) {
  _inherits(CountCtx, _T6TriggerParser$Coun3);
  var _super27 = _createSuper(CountCtx);
  function CountCtx() {
    _classCallCheck(this, CountCtx);
    return _super27.apply(this, arguments);
  }
  return _createClass(CountCtx);
})(T6TriggerParser.CountContext);
/*#__PURE__*/(function (_T6TriggerParser$Coun4) {
  _inherits(CountComplexCtx, _T6TriggerParser$Coun4);
  var _super28 = _createSuper(CountComplexCtx);
  function CountComplexCtx() {
    _classCallCheck(this, CountComplexCtx);
    return _super28.apply(this, arguments);
  }
  return _createClass(CountComplexCtx);
})(T6TriggerParser.CountComplexContext);
/*#__PURE__*/(function (_T6TriggerParser$Valu3) {
  _inherits(ValueCtx, _T6TriggerParser$Valu3);
  var _super29 = _createSuper(ValueCtx);
  function ValueCtx() {
    _classCallCheck(this, ValueCtx);
    return _super29.apply(this, arguments);
  }
  return _createClass(ValueCtx);
})(T6TriggerParser.ValueContext);
/*#__PURE__*/(function (_T6TriggerParser$Valu4) {
  _inherits(ValuesCtx, _T6TriggerParser$Valu4);
  var _super30 = _createSuper(ValuesCtx);
  function ValuesCtx() {
    _classCallCheck(this, ValuesCtx);
    return _super30.apply(this, arguments);
  }
  return _createClass(ValuesCtx);
})(T6TriggerParser.ValuesContext);
var EFieldType;
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
})(EFieldType || (EFieldType = {}));
var ESource;
(function (ESource) {
  ESource["LEXER"] = "Lexer";
  ESource["PARSER"] = "Parser";
  ESource["EVALUATE_VISITOR"] = "EvaluateConditionVisitor";
  ESource["FORMAT_VISITOR"] = "FormatConditionVisitor";
})(ESource || (ESource = {}));

var ErrorListener = /*#__PURE__*/function (_antlr4$error$ErrorLi) {
  _inherits(ErrorListener, _antlr4$error$ErrorLi);
  var _super = _createSuper(ErrorListener);
  function ErrorListener() {
    _classCallCheck(this, ErrorListener);
    return _super.apply(this, arguments);
  }
  _createClass(ErrorListener, [{
    key: "isLexer",
    value: function isLexer(recogniser) {
      return recogniser instanceof T6TriggerLexer;
    }
  }, {
    key: "syntaxError",
    value: function syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      var source = this.isLexer(recognizer) ? ESource.LEXER : ESource.PARSER;
      this.report = new CoLangError({
        message: msg,
        source: source,
        line: line,
        column: column,
        recognizer: recognizer,
        offendingSymbol: offendingSymbol,
        e: e
      });
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!ErrorListener.instance) {
        ErrorListener.instance = new ErrorListener();
      }
      return ErrorListener.instance;
    }
  }, {
    key: "clearInstance",
    value: function clearInstance() {
      ErrorListener.instance = null;
    }
  }]);
  return ErrorListener;
}(antlr4.error.ErrorListener);

var InputStream = antlr4.InputStream;
var Lexer = /*#__PURE__*/_createClass(function Lexer(condition) {
  _classCallCheck(this, Lexer);
  /** Creating a stream of characters from the condition (making a copy of the condition characters) */
  var chars = new InputStream(condition, true);
  /** Pass the stream of characters to the Lexer, which converts them into tokens */
  var lexer = new T6TriggerLexer(chars);
  lexer.removeErrorListeners();
  var errorListener = ErrorListener.getInstance();
  lexer.addErrorListener(errorListener);
  this.lexer = lexer;
});

var CommonTokenStream = antlr4.CommonTokenStream;
var Parser = /*#__PURE__*/_createClass(function Parser(coLangLexer) {
  _classCallCheck(this, Parser);
  var lexer = coLangLexer.lexer;
  /** Creating a token stream */
  var tokens = new CommonTokenStream(lexer);

  /** Pass the token stream to the parser */
  var parser = new T6TriggerParser(tokens);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  var errorListener = ErrorListener.getInstance();
  parser.addErrorListener(errorListener);
  this.parser = parser;

  /**
   * Specify the root node of the AST  (parse tree) - in our case, the top node is - "parse". That is, the parser will
   * start traversing the parse tree, starting with this rule
   */
  this.ast = parser.parse();
  this.error = errorListener.report;
  ErrorListener.clearInstance();
});

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
}(T6TriggerVisitor);

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
}(T6TriggerVisitor);

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
        this.fieldTokensScope = _objectSpread2({}, tokens);
      }
      function getScope(tokens) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _iterator = _createForOfIteratorHelper(tokens),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var token = _step.value;
            result[token.fieldName] = result[token.fieldName] ? [].concat(_toConsumableArray(result[token.fieldName]), [token]) : [token];
            if (token.fieldType === EFieldType.complex) {
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
        var res = _objectSpread2({}, result);
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
        case EFieldType.complex:
          return fieldValue === undefined;
        case EFieldType.decimal:
        case EFieldType.integer:
        case EFieldType.timestamp:
          return fieldValue === null;
        case EFieldType.ais:
        case EFieldType.enum:
        case EFieldType.string:
          return fieldValue === '';
        case EFieldType.enum_list:
          try {
            return fieldValue.length === 0;
          } catch (_unused) {
            throw new Error('Check the value for the enum_list type field. It must be like array literal - []');
          }
        case EFieldType.image:
          try {
            return fieldValue.hasOwnProperty('images') && fieldValue.images.length === 0;
          } catch (_unused2) {
            throw new Error('Check the value for the image type field. It must be like this object literal - { images: [] }');
          }
        case EFieldType.vehicleImpactType:
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
        case EFieldType.ais:
        case EFieldType.enum:
        case EFieldType.string:
        case EFieldType.decimal:
        case EFieldType.integer:
          return token1.fieldValue === token2.fieldValue;
        case EFieldType.timestamp:
          try {
            return token1.fieldValue === null || token2.fieldValue === null ? token1.fieldValue === token2.fieldValue : token1.fieldValue.getTime() === token2.fieldValue.getTime();
          } catch (_unused4) {
            throw new Error('Check the value for the timestamp type. It must be Date type');
          }
        case EFieldType.enum_list:
          try {
            var arr1 = token1.fieldValue;
            var arr2 = token2.fieldValue;
            return this.isArraysEqual(arr1, arr2);
          } catch (_unused5) {
            throw new Error('Check the value for the enum_list type field. It must be like array literal - []');
          }
        case EFieldType.image:
          try {
            var obj1 = token1.fieldValue;
            var obj2 = token2.fieldValue;
            return deepEqual(obj1, obj2);
          } catch (_unused6) {
            throw new Error('Check the value for the image type field. It must be like this object literal - { images: [] }');
          }
        case EFieldType.vehicleImpactType:
          try {
            var t1ValCopy = _objectSpread2({}, token1.fieldValue);
            delete t1ValCopy.passengerPositions;
            delete t1ValCopy.impactSides;
            var t2ValCopy = _objectSpread2({}, token2.fieldValue);
            delete t2ValCopy.passengerPositions;
            delete t2ValCopy.impactSides;
            if (deepEqual(t1ValCopy, t2ValCopy)) {
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
      return token.fieldType === EFieldType.integer || token.fieldType === EFieldType.decimal;
    }
  }, {
    key: "isString",
    value: function isString(token) {
      return token.fieldType === EFieldType.ais || token.fieldType === EFieldType.enum || token.fieldType === EFieldType.string;
    }
  }, {
    key: "isEnumList",
    value: function isEnumList(token) {
      return token.fieldType === EFieldType.enum_list;
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
      var acceptableFieldTypes = [EFieldType.string, EFieldType.integer, EFieldType.decimal];
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
      var acceptableFieldTypes = [EFieldType.ais, EFieldType.integer, EFieldType.decimal];
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
      var acceptableFieldTypes = [EFieldType.ais, EFieldType.integer, EFieldType.decimal];
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
      var acceptableFieldTypes = [EFieldType.ais, EFieldType.integer, EFieldType.decimal, EFieldType.string, EFieldType.enum, EFieldType.enum_list];
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
      var acceptableFieldTypes = [EFieldType.string, EFieldType.enum];
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
      var acceptableFieldTypes = [EFieldType.complex];
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
      var acceptableFieldTypes = [EFieldType.vehicleImpactType];
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
      var acceptableFieldTypes = [EFieldType.string, EFieldType.enum, EFieldType.enum_list];
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
      var acceptableFieldTypes = [EFieldType.string, EFieldType.enum, EFieldType.enum_list];
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
}(T6TriggerVisitor);

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
      var lexer = new Lexer(condition);
      var _Parser = new Parser(lexer),
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
        var formatConditionVisitor = new FormatConditionVisitor();
        ast.accept(formatConditionVisitor);
        return formatConditionVisitor.formattedCondition;
      } catch (e) {
        var _ref = e,
          message = _ref.message;
        var _error = new CoLangError({
          message: message,
          source: ESource.FORMAT_VISITOR
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
      var extractFieldNamesVisitor = new ExtractFieldNamesVisitor();
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
        var evaluateConditionVisitor = new EvaluateConditionVisitor(fieldTokens);
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
        var _error2 = new CoLangError({
          message: message,
          source: ESource.EVALUATE_VISITOR
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

var FieldTokenModel = /*#__PURE__*/_createClass(function FieldTokenModel(id, fieldName, fieldValue, fieldType) {
  var children = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  _classCallCheck(this, FieldTokenModel);
  this.id = id;
  this.fieldName = fieldName;
  this.fieldValue = fieldValue;
  this.fieldType = fieldType;
  this.children = children;
});

export { CoLang, CoLangError, EFieldType, ESource, FieldTokenModel, Lexer, Parser };
//# sourceMappingURL=bundle.js.map
