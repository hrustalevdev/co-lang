import type TerminalNode from 'antlr4/tree/TerminalNode';
import T6TriggerParser from './gen/T6TriggerParser';

type TTerminalNodes = TerminalNode[] | [];

export abstract class ParseCtx extends T6TriggerParser.ParseContext {
}

export abstract class ExprCtx extends T6TriggerParser.ExprContext {
  abstract children: unknown[];
}

/** ExprContext alternatives */
export abstract class NumbersExprCtx extends T6TriggerParser.NumbersExprContext {
  abstract override numbers(): NumbersCtx;

  abstract override field(): FieldCtx;
}

export abstract class ComparatorExprCtx extends T6TriggerParser.ComparatorExprContext {
  abstract override comparator(): ComparatorCtx;

  abstract override field(): FieldCtx;
}

export abstract class ComplexExprCtx extends T6TriggerParser.ComplexExprContext {
  abstract override complex(): ComplexCtx;

  abstract override field(): FieldCtx;
}

export abstract class NumberExprCtx extends T6TriggerParser.NumberExprContext {
  abstract override number(): NumberCtx;

  abstract override field(): FieldCtx;
}

export abstract class BinaryExprCtx extends T6TriggerParser.BinaryExprContext {
  abstract override expr: <T>(i?: T) => T extends number ? ExprCtx : ExprCtx[];

  abstract override binary(): BinaryCtx;
}

export abstract class ParenExprCtx extends T6TriggerParser.ParenExprContext {
  abstract override expr(): ExprCtx;
}

export abstract class CountExprCtx extends T6TriggerParser.CountExprContext {
  abstract override count(): CountCtx;

  abstract override field(): FieldCtx;
}

export abstract class NotExprCtx extends T6TriggerParser.NotExprContext {
  abstract override not(): NotCtx;

  abstract override field(): FieldCtx;
}

export abstract class CountComplexExprCtx extends T6TriggerParser.CountComplexExprContext {
  abstract override countComplex(): CountComplexCtx;

  abstract override field(): FieldCtx;
}

export abstract class ValueExprCtx extends T6TriggerParser.ValueExprContext {
  abstract override value(): ValueCtx;

  abstract override field(): FieldCtx;
}

export abstract class EmptyExprCtx extends T6TriggerParser.EmptyExprContext {
  abstract override field(): FieldCtx;
}

export abstract class VehicleImpactExprCtx extends T6TriggerParser.VehicleImpactExprContext {
  abstract override vehicleImpact(): VehicleImpactCtx;

  abstract override field(): FieldCtx;
}

export abstract class ValuesExprCtx extends T6TriggerParser.ValuesExprContext {
  abstract override values(): ValuesCtx;

  abstract override field(): FieldCtx;
}

export abstract class AnyExprCtx extends T6TriggerParser.AnyExprContext {
  abstract override field(): FieldCtx;
}

/** Accessory */
export abstract class DateTimeCtx extends T6TriggerParser.DateTimeContext {
  abstract override DATE_TIME(): TerminalNode;
}

abstract class VehicleImpactCtx extends T6TriggerParser.VehicleImpactContext {
  abstract override INT(): TerminalNode;
}

export abstract class NumberCtx extends T6TriggerParser.NumberContext {
  abstract override INT(): TerminalNode;

  abstract override DECIMAL(): TerminalNode;
}

abstract class NumbersCtx extends T6TriggerParser.NumbersContext {
  abstract override number: <T>(i?: T) => T extends number ? NumberCtx : NumberCtx[];
  // prettier-ignore
  abstract override SEPARATOR: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
}

export abstract class FieldCtx extends T6TriggerParser.FieldContext {
  abstract override IDENTIFIER(): TerminalNode;
}

export abstract class OpCtx extends T6TriggerParser.OpContext {
}

export abstract class ComparatorCtx extends T6TriggerParser.ComparatorContext {
  abstract override op(): OpCtx;

  abstract override number(): NumberCtx;

  abstract override dateTime(): DateTimeCtx;
}

abstract class BinaryCtx extends T6TriggerParser.BinaryContext {
}

abstract class NotCtx extends T6TriggerParser.NotContext {
  abstract override numbers(): NumbersCtx;

  abstract override values(): ValuesCtx;
}

abstract class ComplexCtx extends T6TriggerParser.ComplexContext {
  abstract override expr(): ExprCtx;
}

export abstract class CountCtx extends T6TriggerParser.CountContext {
  abstract override comparator(): ComparatorCtx;

  abstract override value(): ValueCtx;
}

export abstract class CountComplexCtx extends T6TriggerParser.CountComplexContext {
  abstract override comparator(): ComparatorCtx;

  abstract override expr(): ExprCtx;

  abstract override field(): FieldCtx;
}

export abstract class ValueCtx extends T6TriggerParser.ValueContext {
  abstract override number: <T>(i?: T) => T extends number ? NumberCtx : NumberCtx[];
  abstract override op: <T>(i?: T) => T extends number ? OpCtx : OpCtx[];
  abstract override IDENTIFIER: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override LPAREN: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override RPAREN: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override SEPARATOR: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override IF: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override FROM: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override THEN: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override ANY: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override EMPTY: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override NOT: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override COMPLEX: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override COUNT: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override COUNT_COMPLEX: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override DISTINCT: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override IMPACT_SIDES: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override AND: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
  abstract override OR: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
}

abstract class ValuesCtx extends T6TriggerParser.ValuesContext {
  abstract override value: <T>(i?: T) => T extends number ? ValueCtx : ValueCtx[];
  abstract override SEPARATOR: <T>(i?: T) => T extends number ? TerminalNode : TTerminalNodes;
}

export enum EFieldType {
  string = 'string',
  enum = 'enum',
  integer = 'integer',
  timestamp = 'timestamp',
  complex = 'complex',
  decimal = 'decimal',
  enum_list = 'enum_list',
  injury = 'injury',
  user = 'user',
  image = 'image',
  user_list = 'user_list',
  icd = 'icd',
  ais = 'ais',
  custom = 'custom',
  vehicleImpactType = 'vehicleImpactType',
  address = 'address',
}

export enum ESource {
  LEXER = 'Lexer',
  PARSER = 'Parser',
  EVALUATE_VISITOR = 'EvaluateConditionVisitor',
  FORMAT_VISITOR = 'FormatConditionVisitor',
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
