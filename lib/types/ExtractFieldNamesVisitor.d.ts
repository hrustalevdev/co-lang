import T6TriggerVisitor from './gen/T6TriggerVisitor';
import { ParseCtx, ComparatorExprCtx, ValueExprCtx, ValuesExprCtx, NotExprCtx, EmptyExprCtx, AnyExprCtx, NumberExprCtx, BinaryExprCtx, NumbersExprCtx, ParenExprCtx, ComplexExprCtx, CountExprCtx, VehicleImpactExprCtx, CountComplexExprCtx } from './types';
export declare class ExtractFieldNamesVisitor extends T6TriggerVisitor {
    private readonly fieldNamesSet;
    constructor();
    visitParse(ctx: ParseCtx): null;
    visitValueExpr(ctx: ValueExprCtx): null;
    visitValuesExpr(ctx: ValuesExprCtx): null;
    visitComparatorExpr(ctx: ComparatorExprCtx): null;
    visitAnyExpr(ctx: AnyExprCtx): null;
    visitEmptyExpr(ctx: EmptyExprCtx): any;
    visitNotExpr(ctx: NotExprCtx): null;
    visitNumberExpr(ctx: NumberExprCtx): null;
    visitBinaryExpr(ctx: BinaryExprCtx): null;
    visitNumbersExpr(ctx: NumbersExprCtx): null;
    visitParenExpr(ctx: ParenExprCtx): null;
    visitComplexExpr(ctx: ComplexExprCtx): null;
    visitCountExpr(ctx: CountExprCtx): null;
    visitCountComplexExpr(ctx: CountComplexExprCtx): null;
    visitVehicleImpactExpr(ctx: VehicleImpactExprCtx): null;
    get fieldNames(): string[];
}
//# sourceMappingURL=ExtractFieldNamesVisitor.d.ts.map