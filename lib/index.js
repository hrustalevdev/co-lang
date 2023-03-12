"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ESource: true,
  EFieldType: true
};
Object.defineProperty(exports, "EFieldType", {
  enumerable: true,
  get: function get() {
    return _types.EFieldType;
  }
});
Object.defineProperty(exports, "ESource", {
  enumerable: true,
  get: function get() {
    return _types.ESource;
  }
});
var _CoLang = require("./CoLang");
Object.keys(_CoLang).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CoLang[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CoLang[key];
    }
  });
});
var _Lexer = require("./Lexer");
Object.keys(_Lexer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Lexer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Lexer[key];
    }
  });
});
var _Parser = require("./Parser");
Object.keys(_Parser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Parser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Parser[key];
    }
  });
});
var _CoLangError = require("./CoLangError");
Object.keys(_CoLangError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CoLangError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CoLangError[key];
    }
  });
});
var _FieldTokenModel = require("./FieldTokenModel");
Object.keys(_FieldTokenModel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FieldTokenModel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FieldTokenModel[key];
    }
  });
});
var _types = require("./types");
//# sourceMappingURL=index.js.map