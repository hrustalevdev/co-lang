import T6TriggerVisitor from './gen/T6TriggerVisitor';
import {
  ParseCtx,
  ComparatorExprCtx,
  ValueExprCtx,
  ValuesExprCtx,
  NotExprCtx,
  EmptyExprCtx,
  AnyExprCtx,
  NumberExprCtx,
  BinaryExprCtx,
  NumbersExprCtx,
  ParenExprCtx,
  ComplexExprCtx,
  CountExprCtx,
  VehicleImpactExprCtx,
  CountComplexExprCtx,
} from './types';

export class ExtractFieldNamesVisitor extends T6TriggerVisitor {
  private readonly fieldNamesSet: Set<string>;

  constructor() {
    super();
    this.fieldNamesSet = new Set();
  }

  override visitParse(ctx: ParseCtx) {
    super.visit(ctx.expr());
    return null;
  }

  override visitValueExpr(ctx: ValueExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return null;
  }

  override visitValuesExpr(ctx: ValuesExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return null;
  }

  override visitComparatorExpr(ctx: ComparatorExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return null;
  }

  override visitAnyExpr(ctx: AnyExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return null;
  }

  override visitEmptyExpr(ctx: EmptyExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return super.visitEmptyExpr(ctx);
  }

  override visitNotExpr(ctx: NotExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return null;
  }

  override visitNumberExpr(ctx: NumberExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return null;
  }

  override visitBinaryExpr(ctx: BinaryExprCtx) {
    super.visit(ctx.expr(0));
    super.visit(ctx.expr(1));
    return null;
  }

  override visitNumbersExpr(ctx: NumbersExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return null;
  }

  override visitParenExpr(ctx: ParenExprCtx) {
    super.visit(ctx.expr());
    return null;
  }

  override visitComplexExpr(ctx: ComplexExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    super.visit(ctx.complex().expr());
    return null;
  }

  override visitCountExpr(ctx: CountExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return null;
  }

  override visitCountComplexExpr(ctx: CountComplexExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());

    if (ctx.countComplex().DISTINCT() !== null) {
      this.fieldNamesSet.add(ctx.countComplex().field().getText());
    }

    super.visit(ctx.countComplex().expr());
    return null;
  }

  override visitVehicleImpactExpr(ctx: VehicleImpactExprCtx) {
    this.fieldNamesSet.add(ctx.field().getText());
    return null;
  }

  get fieldNames(): string[] {
    return [...this.fieldNamesSet];
  }
}
