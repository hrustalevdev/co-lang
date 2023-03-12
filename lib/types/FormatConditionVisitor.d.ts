import T6TriggerVisitor from './gen/T6TriggerVisitor';
import { AnyExprCtx, BinaryExprCtx, ComparatorExprCtx, ComplexExprCtx, CountComplexExprCtx, CountExprCtx, EmptyExprCtx, NotExprCtx, NumberExprCtx, NumbersExprCtx, ParenExprCtx, ParseCtx, ValueExprCtx, ValuesExprCtx, VehicleImpactExprCtx } from './types';
export declare class FormatConditionVisitor extends T6TriggerVisitor {
    private readonly indent;
    private exprLvl;
    formattedCondition: string;
    constructor(spaces?: number);
    private getExprIndent;
    private getConditionValue;
    visitParse(ctx: ParseCtx): void;
    visitBinaryExpr(ctx: BinaryExprCtx): string;
    visitComparatorExpr(ctx: ComparatorExprCtx): string;
    visitAnyExpr(ctx: AnyExprCtx): string;
    visitEmptyExpr(ctx: EmptyExprCtx): string;
    visitNumberExpr(ctx: NumberExprCtx): string;
    visitNumbersExpr(ctx: NumbersExprCtx): string;
    visitNotExpr(ctx: NotExprCtx): string;
    visitComplexExpr(ctx: ComplexExprCtx): string;
    visitCountExpr(ctx: CountExprCtx): string;
    visitCountComplexExpr(ctx: CountComplexExprCtx): string;
    visitParenExpr(ctx: ParenExprCtx): string;
    visitVehicleImpactExpr(ctx: VehicleImpactExprCtx): string;
    visitValueExpr(ctx: ValueExprCtx): string;
    visitValuesExpr(ctx: ValuesExprCtx): string;
}
//# sourceMappingURL=FormatConditionVisitor.d.ts.map