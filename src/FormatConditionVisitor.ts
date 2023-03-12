import T6TriggerVisitor from './gen/T6TriggerVisitor';
import {
  AnyExprCtx,
  BinaryExprCtx,
  ComparatorExprCtx,
  ComplexExprCtx,
  CountComplexExprCtx,
  CountExprCtx,
  EmptyExprCtx,
  NotExprCtx,
  NumberExprCtx,
  NumbersExprCtx,
  ParenExprCtx,
  ParseCtx,
  ValueCtx,
  ValueExprCtx,
  ValuesExprCtx,
  VehicleImpactExprCtx
} from './types';

export class FormatConditionVisitor extends T6TriggerVisitor {
  private readonly indent;
  private exprLvl = 0;

  formattedCondition = '';

  constructor(spaces: number = 2) {
    super();
    this.indent = '\u0020'.repeat(spaces);
  }

  private getExprIndent() {
    return this.exprLvl ? this.indent.repeat(this.exprLvl) : '';
  }

  private getConditionValue(ctx: ValueCtx) {
    const inputStream = ctx.start.source[1];
    if (!inputStream) throw new Error('InputStream is missing in TokenSourceTuple');

    return inputStream.getText(ctx.start.start, ctx.stop.stop);
  }

  override visitParse(ctx: ParseCtx) {
    try {
      this.formattedCondition = (super.visit(ctx.expr()) as string).trim();
    } catch (e) {
      throw e;
    }
  }

  override visitBinaryExpr(ctx: BinaryExprCtx) {
    const eIndent = this.getExprIndent();

    const leftExpr = super.visit(ctx.expr(0)) as string;
    const rightExpr = super.visit(ctx.expr(1)) as string;
    const op = !!ctx.binary().OR() ? ctx.binary().OR().getText() : ctx.binary().AND().getText();

    return `${leftExpr}${eIndent}${op}\n${rightExpr}`;
  }

  override visitComparatorExpr(ctx: ComparatorExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const comparator = ctx.comparator().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${comparator} ${FROM} ${field} ${THEN}\n`;
  }

  override visitAnyExpr(ctx: AnyExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const ANY = ctx.ANY().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${ANY} ${FROM} ${field} ${THEN}\n`;
  }

  override visitEmptyExpr(ctx: EmptyExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const EMPTY = ctx.EMPTY().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${EMPTY} ${FROM} ${field} ${THEN}\n`;
  }

  override visitNumberExpr(ctx: NumberExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const number = ctx.number().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${number} ${FROM} ${field} ${THEN}\n`;
  }

  override visitNumbersExpr(ctx: NumbersExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const numbers = ctx.numbers().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${numbers} ${FROM} ${field} ${THEN}\n`;
  }

  override visitNotExpr(ctx: NotExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const NOT = ctx.not().NOT().getText();
    const LPAREN = ctx.not().LPAREN().getText();
    const numOrVal = ctx.not().numbers()
      ? ctx.not().numbers().getText()
      : ctx.not()
        .values().value()
        .map((vCtx) => this.getConditionValue(vCtx));
    const RPAREN = ctx.not().RPAREN().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${NOT}${LPAREN}${numOrVal}${RPAREN} ${FROM} ${field} ${THEN}\n`;
  }

  override visitComplexExpr(ctx: ComplexExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const COMPLEX = ctx.complex().COMPLEX().getText();
    const LPAREN = ctx.complex().LPAREN().getText();
    this.exprLvl++;
    const expr = super.visit(ctx.complex().expr()) as string
    this.exprLvl--;
    const RPAREN = ctx.complex().RPAREN().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${COMPLEX}${LPAREN}\n${expr}${eIndent}${RPAREN} ${FROM} ${field} ${THEN}\n`;
  }

  override visitCountExpr(ctx: CountExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const COUNT = ctx.count().COUNT().getText();
    const LPAREN = ctx.count().LPAREN().getText();
    const distOrVal = ctx.count().DISTINCT()
      ? ctx.count().DISTINCT().getText()
      : this.getConditionValue(ctx.count().value());
    const RPAREN = ctx.count().RPAREN().getText();
    const comparator = ctx.count().comparator().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${COUNT}${LPAREN}${distOrVal}${RPAREN}${comparator} ${FROM} ${field} ${THEN}\n`;
  }

  override visitCountComplexExpr(ctx: CountComplexExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const COUNT_COMPLEX = ctx.countComplex().COUNT_COMPLEX().getText();
    const LPAREN = ctx.countComplex().LPAREN().getText();
    this.exprLvl++;
    const expr = super.visit(ctx.countComplex().expr()) as string;
    this.exprLvl--;
    const RPAREN = ctx.countComplex().RPAREN().getText();
    const comparator = ctx.countComplex().comparator().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    if (ctx.countComplex().DISTINCT()) {
      const DISTINCT = ctx.countComplex().DISTINCT().getText();
      const complexField = ctx.countComplex().field().getText();

      return `${eIndent}${IF} ${COUNT_COMPLEX}${LPAREN}\n${eIndent}${this.indent}${DISTINCT} ${complexField}\n${expr}${eIndent}${RPAREN}${comparator} ${FROM} ${field} ${THEN}\n`;
    }

    return `${eIndent}${IF} ${COUNT_COMPLEX}${LPAREN}\n${expr}${eIndent}${RPAREN}${comparator} ${FROM} ${field} ${THEN}\n`;
  }

  override visitParenExpr(ctx: ParenExprCtx) {
    const LPAREN = ctx.LPAREN().getText();
    const leIndent = this.getExprIndent();
    this.exprLvl++;
    const expr = super.visit(ctx.expr()) as string;
    this.exprLvl--;
    const reIndent = this.getExprIndent();
    const RPAREN = ctx.RPAREN().getText();

    return `${leIndent}${LPAREN}\n${expr}${reIndent}${RPAREN}\n`
  }

  override visitVehicleImpactExpr(ctx: VehicleImpactExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const vehicleImpact = ctx.vehicleImpact().getText();
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${vehicleImpact} ${FROM} ${field} ${THEN}\n`;
  }

  override visitValueExpr(ctx: ValueExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const value = this.getConditionValue(ctx.value());
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${value} ${FROM} ${field} ${THEN}\n`;
  }

  override visitValuesExpr(ctx: ValuesExprCtx) {
    const eIndent = this.getExprIndent();

    const IF = ctx.IF().getText();
    const values = ctx
      .values()
      .value()
      .map((vCtx) => this.getConditionValue(vCtx));
    const FROM = ctx.FROM().getText();
    const field = ctx.field().getText();
    const THEN = ctx.THEN().getText();

    return `${eIndent}${IF} ${values} ${FROM} ${field} ${THEN}\n`;
  }
}
