/* eslint-disable */
// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import T6TriggerVisitor from './T6TriggerVisitor.js';

const serializedATN = [
  4, 1, 34, 211, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6,
  2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14,
  7, 14, 2, 15, 7, 15, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 3, 1, 113, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 119, 8, 1, 10, 1, 12, 1, 122, 9, 1, 1, 2, 1,
  2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 5, 5, 135, 8, 5, 10, 5, 12, 5, 138, 9, 5,
  1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 3, 8, 147, 8, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10,
  3, 10, 155, 8, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 3,
  12, 168, 8, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 180,
  8, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14,
  1, 14, 1, 14, 1, 14, 5, 14, 198, 8, 14, 10, 14, 12, 14, 201, 9, 14, 1, 15, 1, 15, 1, 15, 5, 15,
  206, 8, 15, 10, 15, 12, 15, 209, 9, 15, 1, 15, 3, 136, 199, 207, 1, 2, 16, 0, 2, 4, 6, 8, 10, 12,
  14, 16, 18, 20, 22, 24, 26, 28, 30, 0, 4, 1, 0, 30, 31, 1, 0, 22, 26, 1, 0, 20, 21, 3, 0, 1, 1, 9,
  21, 29, 29, 226, 0, 32, 1, 0, 0, 0, 2, 112, 1, 0, 0, 0, 4, 123, 1, 0, 0, 0, 6, 125, 1, 0, 0, 0, 8,
  129, 1, 0, 0, 0, 10, 131, 1, 0, 0, 0, 12, 139, 1, 0, 0, 0, 14, 141, 1, 0, 0, 0, 16, 143, 1, 0, 0,
  0, 18, 148, 1, 0, 0, 0, 20, 150, 1, 0, 0, 0, 22, 158, 1, 0, 0, 0, 24, 163, 1, 0, 0, 0, 26, 172, 1,
  0, 0, 0, 28, 199, 1, 0, 0, 0, 30, 202, 1, 0, 0, 0, 32, 33, 3, 2, 1, 0, 33, 34, 5, 0, 0, 1, 34, 1,
  1, 0, 0, 0, 35, 36, 6, 1, -1, 0, 36, 37, 5, 9, 0, 0, 37, 38, 3, 16, 8, 0, 38, 39, 5, 10, 0, 0, 39,
  40, 3, 12, 6, 0, 40, 41, 5, 11, 0, 0, 41, 113, 1, 0, 0, 0, 42, 43, 5, 9, 0, 0, 43, 44, 5, 12, 0,
  0, 44, 45, 5, 10, 0, 0, 45, 46, 3, 12, 6, 0, 46, 47, 5, 11, 0, 0, 47, 113, 1, 0, 0, 0, 48, 49, 5,
  9, 0, 0, 49, 50, 5, 13, 0, 0, 50, 51, 5, 10, 0, 0, 51, 52, 3, 12, 6, 0, 52, 53, 5, 11, 0, 0, 53,
  113, 1, 0, 0, 0, 54, 55, 5, 9, 0, 0, 55, 56, 3, 8, 4, 0, 56, 57, 5, 10, 0, 0, 57, 58, 3, 12, 6, 0,
  58, 59, 5, 11, 0, 0, 59, 113, 1, 0, 0, 0, 60, 61, 5, 9, 0, 0, 61, 62, 3, 10, 5, 0, 62, 63, 5, 10,
  0, 0, 63, 64, 3, 12, 6, 0, 64, 65, 5, 11, 0, 0, 65, 113, 1, 0, 0, 0, 66, 67, 5, 9, 0, 0, 67, 68,
  3, 20, 10, 0, 68, 69, 5, 10, 0, 0, 69, 70, 3, 12, 6, 0, 70, 71, 5, 11, 0, 0, 71, 113, 1, 0, 0, 0,
  72, 73, 5, 9, 0, 0, 73, 74, 3, 22, 11, 0, 74, 75, 5, 10, 0, 0, 75, 76, 3, 12, 6, 0, 76, 77, 5, 11,
  0, 0, 77, 113, 1, 0, 0, 0, 78, 79, 5, 9, 0, 0, 79, 80, 3, 24, 12, 0, 80, 81, 5, 10, 0, 0, 81, 82,
  3, 12, 6, 0, 82, 83, 5, 11, 0, 0, 83, 113, 1, 0, 0, 0, 84, 85, 5, 9, 0, 0, 85, 86, 3, 26, 13, 0,
  86, 87, 5, 10, 0, 0, 87, 88, 3, 12, 6, 0, 88, 89, 5, 11, 0, 0, 89, 113, 1, 0, 0, 0, 90, 91, 5, 27,
  0, 0, 91, 92, 3, 2, 1, 0, 92, 93, 5, 28, 0, 0, 93, 113, 1, 0, 0, 0, 94, 95, 5, 9, 0, 0, 95, 96, 3,
  6, 3, 0, 96, 97, 5, 10, 0, 0, 97, 98, 3, 12, 6, 0, 98, 99, 5, 11, 0, 0, 99, 113, 1, 0, 0, 0, 100,
  101, 5, 9, 0, 0, 101, 102, 3, 28, 14, 0, 102, 103, 5, 10, 0, 0, 103, 104, 3, 12, 6, 0, 104, 105,
  5, 11, 0, 0, 105, 113, 1, 0, 0, 0, 106, 107, 5, 9, 0, 0, 107, 108, 3, 30, 15, 0, 108, 109, 5, 10,
  0, 0, 109, 110, 3, 12, 6, 0, 110, 111, 5, 11, 0, 0, 111, 113, 1, 0, 0, 0, 112, 35, 1, 0, 0, 0,
  112, 42, 1, 0, 0, 0, 112, 48, 1, 0, 0, 0, 112, 54, 1, 0, 0, 0, 112, 60, 1, 0, 0, 0, 112, 66, 1, 0,
  0, 0, 112, 72, 1, 0, 0, 0, 112, 78, 1, 0, 0, 0, 112, 84, 1, 0, 0, 0, 112, 90, 1, 0, 0, 0, 112, 94,
  1, 0, 0, 0, 112, 100, 1, 0, 0, 0, 112, 106, 1, 0, 0, 0, 113, 120, 1, 0, 0, 0, 114, 115, 10, 14, 0,
  0, 115, 116, 3, 18, 9, 0, 116, 117, 3, 2, 1, 15, 117, 119, 1, 0, 0, 0, 118, 114, 1, 0, 0, 0, 119,
  122, 1, 0, 0, 0, 120, 118, 1, 0, 0, 0, 120, 121, 1, 0, 0, 0, 121, 3, 1, 0, 0, 0, 122, 120, 1, 0,
  0, 0, 123, 124, 5, 32, 0, 0, 124, 5, 1, 0, 0, 0, 125, 126, 5, 19, 0, 0, 126, 127, 5, 26, 0, 0,
  127, 128, 5, 30, 0, 0, 128, 7, 1, 0, 0, 0, 129, 130, 7, 0, 0, 0, 130, 9, 1, 0, 0, 0, 131, 136, 3,
  8, 4, 0, 132, 133, 5, 29, 0, 0, 133, 135, 3, 8, 4, 0, 134, 132, 1, 0, 0, 0, 135, 138, 1, 0, 0, 0,
  136, 137, 1, 0, 0, 0, 136, 134, 1, 0, 0, 0, 137, 11, 1, 0, 0, 0, 138, 136, 1, 0, 0, 0, 139, 140,
  5, 33, 0, 0, 140, 13, 1, 0, 0, 0, 141, 142, 7, 1, 0, 0, 142, 15, 1, 0, 0, 0, 143, 146, 3, 14, 7,
  0, 144, 147, 3, 8, 4, 0, 145, 147, 3, 4, 2, 0, 146, 144, 1, 0, 0, 0, 146, 145, 1, 0, 0, 0, 147,
  17, 1, 0, 0, 0, 148, 149, 7, 2, 0, 0, 149, 19, 1, 0, 0, 0, 150, 151, 5, 14, 0, 0, 151, 154, 5, 27,
  0, 0, 152, 155, 3, 10, 5, 0, 153, 155, 3, 30, 15, 0, 154, 152, 1, 0, 0, 0, 154, 153, 1, 0, 0, 0,
  155, 156, 1, 0, 0, 0, 156, 157, 5, 28, 0, 0, 157, 21, 1, 0, 0, 0, 158, 159, 5, 15, 0, 0, 159, 160,
  5, 27, 0, 0, 160, 161, 3, 2, 1, 0, 161, 162, 5, 28, 0, 0, 162, 23, 1, 0, 0, 0, 163, 164, 5, 16, 0,
  0, 164, 167, 5, 27, 0, 0, 165, 168, 5, 18, 0, 0, 166, 168, 3, 28, 14, 0, 167, 165, 1, 0, 0, 0,
  167, 166, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 170, 5, 28, 0, 0, 170, 171, 3, 16, 8, 0, 171, 25,
  1, 0, 0, 0, 172, 173, 5, 17, 0, 0, 173, 179, 5, 27, 0, 0, 174, 180, 3, 2, 1, 0, 175, 176, 5, 18,
  0, 0, 176, 177, 3, 12, 6, 0, 177, 178, 3, 2, 1, 0, 178, 180, 1, 0, 0, 0, 179, 174, 1, 0, 0, 0,
  179, 175, 1, 0, 0, 0, 180, 181, 1, 0, 0, 0, 181, 182, 5, 28, 0, 0, 182, 183, 3, 16, 8, 0, 183, 27,
  1, 0, 0, 0, 184, 198, 8, 3, 0, 0, 185, 198, 3, 8, 4, 0, 186, 198, 3, 14, 7, 0, 187, 198, 5, 33, 0,
  0, 188, 198, 5, 27, 0, 0, 189, 198, 5, 28, 0, 0, 190, 198, 5, 2, 0, 0, 191, 198, 5, 3, 0, 0, 192,
  198, 5, 4, 0, 0, 193, 198, 5, 5, 0, 0, 194, 198, 5, 6, 0, 0, 195, 198, 5, 7, 0, 0, 196, 198, 5, 8,
  0, 0, 197, 184, 1, 0, 0, 0, 197, 185, 1, 0, 0, 0, 197, 186, 1, 0, 0, 0, 197, 187, 1, 0, 0, 0, 197,
  188, 1, 0, 0, 0, 197, 189, 1, 0, 0, 0, 197, 190, 1, 0, 0, 0, 197, 191, 1, 0, 0, 0, 197, 192, 1, 0,
  0, 0, 197, 193, 1, 0, 0, 0, 197, 194, 1, 0, 0, 0, 197, 195, 1, 0, 0, 0, 197, 196, 1, 0, 0, 0, 198,
  201, 1, 0, 0, 0, 199, 200, 1, 0, 0, 0, 199, 197, 1, 0, 0, 0, 200, 29, 1, 0, 0, 0, 201, 199, 1, 0,
  0, 0, 202, 207, 3, 28, 14, 0, 203, 204, 5, 29, 0, 0, 204, 206, 3, 28, 14, 0, 205, 203, 1, 0, 0, 0,
  206, 209, 1, 0, 0, 0, 207, 208, 1, 0, 0, 0, 207, 205, 1, 0, 0, 0, 208, 31, 1, 0, 0, 0, 209, 207,
  1, 0, 0, 0, 10, 112, 120, 136, 146, 154, 167, 179, 197, 199, 207,
];

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.PredictionContextCache();

export default class T6TriggerParser extends antlr4.Parser {
  static grammarFileName = 'java-escape';
  static literalNames = [
    null,
    "'\\u0024'",
    "'-'",
    "'/'",
    "'\\u00B0'",
    "'\\u002B'",
    "'\\u0025'",
    "'\\u0026'",
    "'.'",
    "'$IF'",
    "'$FROM'",
    "'$THEN'",
    "'$ANY'",
    "'$EMPTY'",
    "'$NOT'",
    "'$COMPLEX'",
    "'$COUNT'",
    "'$COUNT_COMPLEX'",
    "'$DISTINCT'",
    "'impactSides'",
    "'$AND'",
    "'$OR'",
    "'>'",
    "'>='",
    "'<'",
    "'<='",
    "'='",
    "'('",
    "')'",
  ];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'IF',
    'FROM',
    'THEN',
    'ANY',
    'EMPTY',
    'NOT',
    'COMPLEX',
    'COUNT',
    'COUNT_COMPLEX',
    'DISTINCT',
    'IMPACT_SIDES',
    'AND',
    'OR',
    'GT',
    'GE',
    'LT',
    'LE',
    'EQ',
    'LPAREN',
    'RPAREN',
    'SEPARATOR',
    'INT',
    'DECIMAL',
    'DATE_TIME',
    'IDENTIFIER',
    'WS',
  ];
  static ruleNames = [
    'parse',
    'expr',
    'dateTime',
    'vehicleImpact',
    'number',
    'numbers',
    'field',
    'op',
    'comparator',
    'binary',
    'not',
    'complex',
    'count',
    'countComplex',
    'value',
    'values',
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = T6TriggerParser.ruleNames;
    this.literalNames = T6TriggerParser.literalNames;
    this.symbolicNames = T6TriggerParser.symbolicNames;
  }

  get atn() {
    return atn;
  }

  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 1:
        return this.expr_sempred(localctx, predIndex);
      default:
        throw 'No predicate with index:' + ruleIndex;
    }
  }

  expr_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 14);
      default:
        throw 'No predicate with index:' + predIndex;
    }
  }

  parse() {
    let localctx = new ParseContext(this, this._ctx, this.state);
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

  expr(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new ExprContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 2;
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

  dateTime() {
    let localctx = new DateTimeContext(this, this._ctx, this.state);
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

  vehicleImpact() {
    let localctx = new VehicleImpactContext(this, this._ctx, this.state);
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

  number() {
    let localctx = new NumberContext(this, this._ctx, this.state);
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

  numbers() {
    let localctx = new NumbersContext(this, this._ctx, this.state);
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

  field() {
    let localctx = new FieldContext(this, this._ctx, this.state);
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

  op() {
    let localctx = new OpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, T6TriggerParser.RULE_op);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 141;
      _la = this._input.LA(1);
      if (!((_la & ~0x1f) == 0 && ((1 << _la) & 130023424) !== 0)) {
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

  comparator() {
    let localctx = new ComparatorContext(this, this._ctx, this.state);
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

  binary() {
    let localctx = new BinaryContext(this, this._ctx, this.state);
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

  not() {
    let localctx = new NotContext(this, this._ctx, this.state);
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

  complex() {
    let localctx = new ComplexContext(this, this._ctx, this.state);
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

  count() {
    let localctx = new CountContext(this, this._ctx, this.state);
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

  countComplex() {
    let localctx = new CountComplexContext(this, this._ctx, this.state);
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

  value() {
    let localctx = new ValueContext(this, this._ctx, this.state);
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
              if (_la <= 0 || ((_la & ~0x1f) == 0 && ((1 << _la) & 541064706) !== 0)) {
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

  values() {
    let localctx = new ValuesContext(this, this._ctx, this.state);
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
}

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

class ParseContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_parse;
  }

  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }

  EOF() {
    return this.getToken(T6TriggerParser.EOF, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitParse(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ExprContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_expr;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class NumbersExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  numbers() {
    return this.getTypedRuleContext(NumbersContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNumbersExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.NumbersExprContext = NumbersExprContext;

class ComparatorExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  comparator() {
    return this.getTypedRuleContext(ComparatorContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitComparatorExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ComparatorExprContext = ComparatorExprContext;

class ComplexExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  complex() {
    return this.getTypedRuleContext(ComplexContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitComplexExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ComplexExprContext = ComplexExprContext;

class NumberExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNumberExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.NumberExprContext = NumberExprContext;

class BinaryExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  expr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprContext);
    } else {
      return this.getTypedRuleContext(ExprContext, i);
    }
  };

  binary() {
    return this.getTypedRuleContext(BinaryContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitBinaryExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.BinaryExprContext = BinaryExprContext;

class ParenExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitParenExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ParenExprContext = ParenExprContext;

class CountExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  count() {
    return this.getTypedRuleContext(CountContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitCountExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.CountExprContext = CountExprContext;

class NotExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  not() {
    return this.getTypedRuleContext(NotContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNotExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.NotExprContext = NotExprContext;

class CountComplexExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  countComplex() {
    return this.getTypedRuleContext(CountComplexContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitCountComplexExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.CountComplexExprContext = CountComplexExprContext;

class ValueExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  value() {
    return this.getTypedRuleContext(ValueContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitValueExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ValueExprContext = ValueExprContext;

class EmptyExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  EMPTY() {
    return this.getToken(T6TriggerParser.EMPTY, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitEmptyExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.EmptyExprContext = EmptyExprContext;

class VehicleImpactExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  vehicleImpact() {
    return this.getTypedRuleContext(VehicleImpactContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitVehicleImpactExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.VehicleImpactExprContext = VehicleImpactExprContext;

class ValuesExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  values() {
    return this.getTypedRuleContext(ValuesContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitValuesExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ValuesExprContext = ValuesExprContext;

class AnyExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  ANY() {
    return this.getToken(T6TriggerParser.ANY, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitAnyExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.AnyExprContext = AnyExprContext;

class DateTimeContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_dateTime;
  }

  DATE_TIME() {
    return this.getToken(T6TriggerParser.DATE_TIME, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitDateTime(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class VehicleImpactContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_vehicleImpact;
  }

  IMPACT_SIDES() {
    return this.getToken(T6TriggerParser.IMPACT_SIDES, 0);
  }

  EQ() {
    return this.getToken(T6TriggerParser.EQ, 0);
  }

  INT() {
    return this.getToken(T6TriggerParser.INT, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitVehicleImpact(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class NumberContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_number;
  }

  INT() {
    return this.getToken(T6TriggerParser.INT, 0);
  }

  DECIMAL() {
    return this.getToken(T6TriggerParser.DECIMAL, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNumber(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class NumbersContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_numbers;
  }

  number = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(NumberContext);
    } else {
      return this.getTypedRuleContext(NumberContext, i);
    }
  };

  SEPARATOR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.SEPARATOR);
    } else {
      return this.getToken(T6TriggerParser.SEPARATOR, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNumbers(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class FieldContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_field;
  }

  IDENTIFIER() {
    return this.getToken(T6TriggerParser.IDENTIFIER, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitField(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class OpContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_op;
  }

  GT() {
    return this.getToken(T6TriggerParser.GT, 0);
  }

  GE() {
    return this.getToken(T6TriggerParser.GE, 0);
  }

  LT() {
    return this.getToken(T6TriggerParser.LT, 0);
  }

  LE() {
    return this.getToken(T6TriggerParser.LE, 0);
  }

  EQ() {
    return this.getToken(T6TriggerParser.EQ, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitOp(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ComparatorContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_comparator;
  }

  op() {
    return this.getTypedRuleContext(OpContext, 0);
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  dateTime() {
    return this.getTypedRuleContext(DateTimeContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitComparator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class BinaryContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_binary;
  }

  AND() {
    return this.getToken(T6TriggerParser.AND, 0);
  }

  OR() {
    return this.getToken(T6TriggerParser.OR, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitBinary(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class NotContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_not;
  }

  NOT() {
    return this.getToken(T6TriggerParser.NOT, 0);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  numbers() {
    return this.getTypedRuleContext(NumbersContext, 0);
  }

  values() {
    return this.getTypedRuleContext(ValuesContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNot(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ComplexContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_complex;
  }

  COMPLEX() {
    return this.getToken(T6TriggerParser.COMPLEX, 0);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitComplex(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class CountContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_count;
  }

  COUNT() {
    return this.getToken(T6TriggerParser.COUNT, 0);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  comparator() {
    return this.getTypedRuleContext(ComparatorContext, 0);
  }

  DISTINCT() {
    return this.getToken(T6TriggerParser.DISTINCT, 0);
  }

  value() {
    return this.getTypedRuleContext(ValueContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitCount(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class CountComplexContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_countComplex;
  }

  COUNT_COMPLEX() {
    return this.getToken(T6TriggerParser.COUNT_COMPLEX, 0);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  comparator() {
    return this.getTypedRuleContext(ComparatorContext, 0);
  }

  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }

  DISTINCT() {
    return this.getToken(T6TriggerParser.DISTINCT, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitCountComplex(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ValueContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_value;
  }

  number = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(NumberContext);
    } else {
      return this.getTypedRuleContext(NumberContext, i);
    }
  };

  op = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(OpContext);
    } else {
      return this.getTypedRuleContext(OpContext, i);
    }
  };

  IDENTIFIER = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.IDENTIFIER);
    } else {
      return this.getToken(T6TriggerParser.IDENTIFIER, i);
    }
  };

  LPAREN = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.LPAREN);
    } else {
      return this.getToken(T6TriggerParser.LPAREN, i);
    }
  };

  RPAREN = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.RPAREN);
    } else {
      return this.getToken(T6TriggerParser.RPAREN, i);
    }
  };

  SEPARATOR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.SEPARATOR);
    } else {
      return this.getToken(T6TriggerParser.SEPARATOR, i);
    }
  };

  IF = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.IF);
    } else {
      return this.getToken(T6TriggerParser.IF, i);
    }
  };

  FROM = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.FROM);
    } else {
      return this.getToken(T6TriggerParser.FROM, i);
    }
  };

  THEN = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.THEN);
    } else {
      return this.getToken(T6TriggerParser.THEN, i);
    }
  };

  ANY = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.ANY);
    } else {
      return this.getToken(T6TriggerParser.ANY, i);
    }
  };

  EMPTY = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.EMPTY);
    } else {
      return this.getToken(T6TriggerParser.EMPTY, i);
    }
  };

  NOT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.NOT);
    } else {
      return this.getToken(T6TriggerParser.NOT, i);
    }
  };

  COMPLEX = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.COMPLEX);
    } else {
      return this.getToken(T6TriggerParser.COMPLEX, i);
    }
  };

  COUNT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.COUNT);
    } else {
      return this.getToken(T6TriggerParser.COUNT, i);
    }
  };

  COUNT_COMPLEX = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.COUNT_COMPLEX);
    } else {
      return this.getToken(T6TriggerParser.COUNT_COMPLEX, i);
    }
  };

  DISTINCT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.DISTINCT);
    } else {
      return this.getToken(T6TriggerParser.DISTINCT, i);
    }
  };

  IMPACT_SIDES = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.IMPACT_SIDES);
    } else {
      return this.getToken(T6TriggerParser.IMPACT_SIDES, i);
    }
  };

  AND = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.AND);
    } else {
      return this.getToken(T6TriggerParser.AND, i);
    }
  };

  OR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.OR);
    } else {
      return this.getToken(T6TriggerParser.OR, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ValuesContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_values;
  }

  value = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ValueContext);
    } else {
      return this.getTypedRuleContext(ValueContext, i);
    }
  };

  SEPARATOR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.SEPARATOR);
    } else {
      return this.getToken(T6TriggerParser.SEPARATOR, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitValues(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

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
