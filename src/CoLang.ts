import { CoLangError } from './CoLangError';
import { Lexer } from './Lexer';
import { Parser } from './Parser';
import { FieldTokenModel } from './FieldTokenModel';
import { FormatConditionVisitor } from './FormatConditionVisitor';
import { ExtractFieldNamesVisitor } from './ExtractFieldNamesVisitor';
import { EvaluateConditionVisitor } from './EvaluateConditionVisitor';
import { ESource, ParseCtx } from './types';

type TCondition = string;
export type TOnError = (error: CoLangError, condition: string, trackId?: string | null) => void;

/** ast - Abstract Syntax Tree (AST) */
interface IParseResult {
  ast: ParseCtx;
  error?: CoLangError;
}

export interface IEvaluationReport {
  evaluationResult: boolean;
  triggeredFieldTokens: FieldTokenModel[] | null;
}

export interface IAdditionalOptions {
  trackId?: string | null;
}

export class CoLang {
  private cachedParse: Record<TCondition, IParseResult>;
  private withCache: boolean = true;
  private readonly onError?: TOnError;

  constructor(params?: { withCache?: boolean; onError?: TOnError }) {
    this.cachedParse = {};

    if (params) {
      this.withCache = params.withCache ?? true;
      this.onError = params.onError;
    }

    this.checkCondition = this.checkCondition.bind(this);
    this.formatCondition = this.formatCondition.bind(this);
    this.getFieldEntries = this.getFieldEntries.bind(this);
    this.evaluateFieldTokens = this.evaluateFieldTokens.bind(this);
    this.clearCache = this.clearCache.bind(this);
  }

  private getParseResult(condition: string) {
    if (this.cachedParse[condition]) return this.cachedParse[condition];

    const lexer = new Lexer(condition);
    const { ast, error } = new Parser(lexer);

    if (this.withCache) {
      this.cachedParse[condition] = { ast, error };
    }

    return { ast, error };
  }

  private isError(
    error: CoLangError | undefined,
    condition: string,
    trackIdentifier?: string | null
  ) {
    if (error) {
      if (this.onError) this.onError(error, condition, trackIdentifier);
      return true;
    }

    return false;
  }

  checkCondition(condition: string, withCache = false) {
    this.withCache = withCache;
    const { error } = this.getParseResult(condition);

    if (error && this.onError) this.onError(error, condition);

    return error;
  }

  formatCondition(condition: string, withCache = false) {
    this.withCache = withCache;
    const { ast, error } = this.getParseResult(condition);

    if (this.isError(error, condition)) return condition;

    try {
      const formatConditionVisitor = new FormatConditionVisitor();
      ast.accept(formatConditionVisitor);

      return formatConditionVisitor.formattedCondition;
    } catch (e) {
      const { message } = e as Error;
      const error = new CoLangError({ message, source: ESource.FORMAT_VISITOR });

      if (this.onError) this.onError(error, condition);

      return condition;
    }
  }

  getFieldEntries(condition: string, options?: IAdditionalOptions) {
    const { ast, error } = this.getParseResult(condition);

    if (this.isError(error, condition, options?.trackId)) return null;

    const extractFieldNamesVisitor = new ExtractFieldNamesVisitor();
    ast.accept(extractFieldNamesVisitor);

    return extractFieldNamesVisitor.fieldNames;
  }

  evaluateFieldTokens(
    condition: string,
    fieldTokens: FieldTokenModel[],
    options?: IAdditionalOptions
  ) {
    const { ast, error } = this.getParseResult(condition);

    if (this.isError(error, condition, options?.trackId)) return null;

    try {
      const evaluateConditionVisitor = new EvaluateConditionVisitor(fieldTokens);
      ast.accept(evaluateConditionVisitor);
      const { evaluationResult, triggeredFieldTokens } = evaluateConditionVisitor;

      return { evaluationResult, triggeredFieldTokens } as IEvaluationReport;
    } catch (e) {
      const { message } = e as Error;
      const error = new CoLangError({ message, source: ESource.EVALUATE_VISITOR });

      if (this.onError) this.onError(error, condition, options?.trackId);

      return null;
    }
  }

  clearCache() {
    this.cachedParse = {};
  }
}
