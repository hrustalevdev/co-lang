import type TerminalNode from 'antlr4/tree/TerminalNode';
import T6TriggerParser from './gen/T6TriggerParser';
type TTerminalNodes = TerminalNode[] | [];
export declare abstract class ParseCtx extends T6TriggerParser.ParseContext {
}
export declare abstract class ExprCtx extends T6TriggerParser.ExprContext {
    abstract children: unknown[];
}
export declare abstract class NumbersExprCtx extends T6TriggerParser.NumbersExprContext {
    abstract numbers(): NumbersCtx;
    abstract field(): FieldCtx;
}
export declare abstract class ComparatorExprCtx extends T6TriggerParser.ComparatorExprContext {
    abstract comparator(): ComparatorCtx;
    abstract field(): FieldCtx;
}
export declare abstract class ComplexExprCtx extends T6TriggerParser.ComplexExprContext {
    abstract complex(): ComplexCtx;
    abstract field(): FieldCtx;
}
export declare abstract class NumberExprCtx extends T6TriggerParser.NumberExprContext {
    abstract number(): NumberCtx;
    abstract field(): FieldCtx;
}
export declare abstract class BinaryExprCtx extends T6TriggerParser.BinaryExprContext {
    abstract expr: <T>(i?: T) => T extends number ? ExprCtx : ExprCtx[];
    abstract binary(): BinaryCtx;
}
export declare abstract class ParenExprCtx extends T6TriggerParser.ParenExprContext {
    abstract expr(): ExprCtx;
}
export declare abstract class CountExprCtx extends T6TriggerParser.CountExprContext {
    abstract count(): CountCtx;
    abstract field(): FieldCtx;
}
export declare abstract class NotExprCtx extends T6TriggerParser.NotExprContext {
    abstract not(): NotCtx;
    abstract field(): FieldCtx;
}
export declare abstract class CountComplexExprCtx extends T6TriggerParser.CountComplexExprContext {
    abstract countComplex(): CountComplexCtx;
    abstract field(): FieldCtx;
}
export declare abstract class ValueExprCtx extends T6TriggerParser.ValueExprContext {
    abstract value(): ValueCtx;
    abstract field(): FieldCtx;
}
export declare abstract class EmptyExprCtx extends T6TriggerParser.EmptyExprContext {
    abstract field(): FieldCtx;
}
export declare abstract class VehicleImpactExprCtx extends T6TriggerParser.VehicleImpactExprContext {
    abstract vehicleImpact(): VehicleImpactCtx;
    abstract field(): FieldCtx;
}
export declare abstract class ValuesExprCtx extends T6TriggerParser.ValuesExprContext {
    abstract values(): ValuesCtx;
    abstract field(): FieldCtx;
}
export declare abstract class AnyExprCtx extends T6TriggerParser.AnyExprContext {
    abstract field(): FieldCtx;
}
export declare abstract class DateTimeCtx extends T6TriggerParser.DateTimeContext {
    abstract DATE_TIME(): TerminalNode;
}
declare abstract class VehicleImpactCtx extends T6TriggerParser.VehicleImpactContext {
    abstract INT(): TerminalNode;
}
export declare abstract class NumberCtx extends T6TriggerParser.NumberContext {
    abstract INT(): TerminalNode;
    abstract DECIMAL(): TerminalNode;
}
declare abstract class NumbersCtx extends T6TriggerParser.NumbersContext {
    abstract number: <T>(i?: T) => T extends number ? NumberCtx : NumberCtx[];
    abstract SEPARATOR: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
}
export declare abstract class FieldCtx extends T6TriggerParser.FieldContext {
    abstract IDENTIFIER(): TerminalNode;
}
export declare abstract class OpCtx extends T6TriggerParser.OpContext {
}
export declare abstract class ComparatorCtx extends T6TriggerParser.ComparatorContext {
    abstract op(): OpCtx;
    abstract number(): NumberCtx;
    abstract dateTime(): DateTimeCtx;
}
declare abstract class BinaryCtx extends T6TriggerParser.BinaryContext {
}
declare abstract class NotCtx extends T6TriggerParser.NotContext {
    abstract numbers(): NumbersCtx;
    abstract values(): ValuesCtx;
}
declare abstract class ComplexCtx extends T6TriggerParser.ComplexContext {
    abstract expr(): ExprCtx;
}
export declare abstract class CountCtx extends T6TriggerParser.CountContext {
    abstract comparator(): ComparatorCtx;
    abstract value(): ValueCtx;
}
export declare abstract class CountComplexCtx extends T6TriggerParser.CountComplexContext {
    abstract comparator(): ComparatorCtx;
    abstract expr(): ExprCtx;
    abstract field(): FieldCtx;
}
export declare abstract class ValueCtx extends T6TriggerParser.ValueContext {
    abstract number: <T>(i?: T) => T extends number ? NumberCtx : NumberCtx[];
    abstract op: <T>(i?: T) => T extends number ? OpCtx : OpCtx[];
    abstract IDENTIFIER: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract LPAREN: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract RPAREN: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract SEPARATOR: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract IF: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract FROM: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract THEN: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract ANY: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract EMPTY: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract NOT: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract COMPLEX: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract COUNT: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract COUNT_COMPLEX: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract DISTINCT: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract IMPACT_SIDES: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract AND: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
    abstract OR: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
}
declare abstract class ValuesCtx extends T6TriggerParser.ValuesContext {
    abstract value: <T>(i?: T) => T extends number ? ValueCtx : ValueCtx[];
    abstract SEPARATOR: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
}
export declare enum EFieldType {
    string = "string",
    enum = "enum",
    integer = "integer",
    timestamp = "timestamp",
    complex = "complex",
    decimal = "decimal",
    enum_list = "enum_list",
    injury = "injury",
    user = "user",
    image = "image",
    user_list = "user_list",
    icd = "icd",
    ais = "ais",
    custom = "custom",
    vehicleImpactType = "vehicleImpactType",
    address = "address"
}
export declare enum ESource {
    LEXER = "Lexer",
    PARSER = "Parser",
    EVALUATE_VISITOR = "EvaluateConditionVisitor",
    FORMAT_VISITOR = "FormatConditionVisitor"
}
interface IImageModel {
    imageId: string;
    imageLabel: string;
}
export interface IImageDataValue {
    images: IImageModel[];
}
export interface IVehicleDataValue {
    isRightHandSide?: boolean;
    isSeatBelt?: boolean;
    isHelmet?: boolean;
    isPassengerPositionKnown?: boolean;
    isImpactKnown?: boolean;
    passengerPositions?: number[];
    impactSides?: number[];
}
export {};
//# sourceMappingURL=types.d.ts.map