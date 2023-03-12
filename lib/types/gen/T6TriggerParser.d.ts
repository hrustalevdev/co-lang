declare class T6TriggerParser extends antlr4.Parser {
    static grammarFileName: string;
    static literalNames: (string | null)[];
    static symbolicNames: (string | null)[];
    static ruleNames: string[];
    constructor(input: any);
    _interp: antlr4.atn.ParserATNSimulator;
    ruleNames: string[];
    literalNames: (string | null)[];
    symbolicNames: (string | null)[];
    get atn(): antlr4.atn.ATN;
    sempred(localctx: any, ruleIndex: any, predIndex: any): boolean;
    expr_sempred(localctx: any, predIndex: any): boolean;
    parse(): ParseContext;
    expr(_p: any): any;
    _ctx: any;
    dateTime(): DateTimeContext;
    vehicleImpact(): VehicleImpactContext;
    number(): NumberContext;
    numbers(): NumbersContext;
    field(): FieldContext;
    op(): OpContext;
    comparator(): ComparatorContext;
    binary(): BinaryContext;
    not(): NotContext;
    complex(): ComplexContext;
    count(): CountContext;
    countComplex(): CountComplexContext;
    value(): ValueContext;
    values(): ValuesContext;
}
declare namespace T6TriggerParser {
    export const EOF: -1;
    export const T__0: number;
    export const T__1: number;
    export const T__2: number;
    export const T__3: number;
    export const T__4: number;
    export const T__5: number;
    export const T__6: number;
    export const T__7: number;
    export const IF: number;
    export const FROM: number;
    export const THEN: number;
    export const ANY: number;
    export const EMPTY: number;
    export const NOT: number;
    export const COMPLEX: number;
    export const COUNT: number;
    export const COUNT_COMPLEX: number;
    export const DISTINCT: number;
    export const IMPACT_SIDES: number;
    export const AND: number;
    export const OR: number;
    export const GT: number;
    export const GE: number;
    export const LT: number;
    export const LE: number;
    export const EQ: number;
    export const LPAREN: number;
    export const RPAREN: number;
    export const SEPARATOR: number;
    export const INT: number;
    export const DECIMAL: number;
    export const DATE_TIME: number;
    export const IDENTIFIER: number;
    export const WS: number;
    export const RULE_parse: number;
    export const RULE_expr: number;
    export const RULE_dateTime: number;
    export const RULE_vehicleImpact: number;
    export const RULE_number: number;
    export const RULE_numbers: number;
    export const RULE_field: number;
    export const RULE_op: number;
    export const RULE_comparator: number;
    export const RULE_binary: number;
    export const RULE_not: number;
    export const RULE_complex: number;
    export const RULE_count: number;
    export const RULE_countComplex: number;
    export const RULE_value: number;
    export const RULE_values: number;
    export { NumbersExprContext };
    export { ComparatorExprContext };
    export { ComplexExprContext };
    export { NumberExprContext };
    export { BinaryExprContext };
    export { ParenExprContext };
    export { CountExprContext };
    export { NotExprContext };
    export { CountComplexExprContext };
    export { ValueExprContext };
    export { EmptyExprContext };
    export { VehicleImpactExprContext };
    export { ValuesExprContext };
    export { AnyExprContext };
    export { ParseContext };
    export { ExprContext };
    export { DateTimeContext };
    export { VehicleImpactContext };
    export { NumberContext };
    export { NumbersContext };
    export { FieldContext };
    export { OpContext };
    export { ComparatorContext };
    export { BinaryContext };
    export { NotContext };
    export { ComplexContext };
    export { CountContext };
    export { CountComplexContext };
    export { ValueContext };
    export { ValuesContext };
}
export default T6TriggerParser;
import antlr4 from "antlr4";
declare class ParseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expr(): ExprContext;
    EOF(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class DateTimeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DATE_TIME(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class VehicleImpactContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IMPACT_SIDES(): antlr4.tree.TerminalNode;
    EQ(): antlr4.tree.TerminalNode;
    INT(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class NumberContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    INT(): antlr4.tree.TerminalNode;
    DECIMAL(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class NumbersContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    number: (i: any) => any;
    SEPARATOR: (i: any) => any;
    accept(visitor: any): any;
}
declare class FieldContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IDENTIFIER(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class OpContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    GT(): antlr4.tree.TerminalNode;
    GE(): antlr4.tree.TerminalNode;
    LT(): antlr4.tree.TerminalNode;
    LE(): antlr4.tree.TerminalNode;
    EQ(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class ComparatorContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    op(): OpContext;
    number(): NumberContext;
    dateTime(): DateTimeContext;
    accept(visitor: any): any;
}
declare class BinaryContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AND(): antlr4.tree.TerminalNode;
    OR(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class NotContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    NOT(): antlr4.tree.TerminalNode;
    LPAREN(): antlr4.tree.TerminalNode;
    RPAREN(): antlr4.tree.TerminalNode;
    numbers(): NumbersContext;
    values(): ValuesContext;
    accept(visitor: any): any;
}
declare class ComplexContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COMPLEX(): antlr4.tree.TerminalNode;
    LPAREN(): antlr4.tree.TerminalNode;
    expr(): ExprContext;
    RPAREN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class CountContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COUNT(): antlr4.tree.TerminalNode;
    LPAREN(): antlr4.tree.TerminalNode;
    RPAREN(): antlr4.tree.TerminalNode;
    comparator(): ComparatorContext;
    DISTINCT(): antlr4.tree.TerminalNode;
    value(): ValueContext;
    accept(visitor: any): any;
}
declare class CountComplexContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COUNT_COMPLEX(): antlr4.tree.TerminalNode;
    LPAREN(): antlr4.tree.TerminalNode;
    RPAREN(): antlr4.tree.TerminalNode;
    comparator(): ComparatorContext;
    expr(): ExprContext;
    DISTINCT(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    accept(visitor: any): any;
}
declare class ValueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    number: (i: any) => any;
    op: (i: any) => any;
    IDENTIFIER: (i: any) => any;
    LPAREN: (i: any) => any;
    RPAREN: (i: any) => any;
    SEPARATOR: (i: any) => any;
    IF: (i: any) => any;
    FROM: (i: any) => any;
    THEN: (i: any) => any;
    ANY: (i: any) => any;
    EMPTY: (i: any) => any;
    NOT: (i: any) => any;
    COMPLEX: (i: any) => any;
    COUNT: (i: any) => any;
    COUNT_COMPLEX: (i: any) => any;
    DISTINCT: (i: any) => any;
    IMPACT_SIDES: (i: any) => any;
    AND: (i: any) => any;
    OR: (i: any) => any;
    accept(visitor: any): any;
}
declare class ValuesContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    value: (i: any) => any;
    SEPARATOR: (i: any) => any;
    accept(visitor: any): any;
}
declare class NumbersExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    numbers(): NumbersContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class ComparatorExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    comparator(): ComparatorContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class ComplexExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    complex(): ComplexContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class NumberExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    number(): NumberContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class BinaryExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    expr: (i: any) => any;
    binary(): BinaryContext;
    accept(visitor: any): any;
}
declare class ParenExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    LPAREN(): antlr4.tree.TerminalNode;
    expr(): ExprContext;
    RPAREN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class CountExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    count(): CountContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class NotExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    not(): NotContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class CountComplexExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    countComplex(): CountComplexContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class ValueExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    value(): ValueContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class EmptyExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    EMPTY(): antlr4.tree.TerminalNode;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class VehicleImpactExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    vehicleImpact(): VehicleImpactContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class ValuesExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    values(): ValuesContext;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class AnyExprContext extends ExprContext {
    constructor(parser: any, ctx: any);
    IF(): antlr4.tree.TerminalNode;
    ANY(): antlr4.tree.TerminalNode;
    FROM(): antlr4.tree.TerminalNode;
    field(): FieldContext;
    THEN(): antlr4.tree.TerminalNode;
    accept(visitor: any): any;
}
declare class ExprContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    copyFrom(ctx: any): void;
}
//# sourceMappingURL=T6TriggerParser.d.ts.map