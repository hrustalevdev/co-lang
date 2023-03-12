import { CoLangError } from './CoLangError';
import { FieldTokenModel } from './FieldTokenModel';
export type TOnError = (error: CoLangError, condition: string, trackId?: string | null) => void;
export interface IEvaluationReport {
    evaluationResult: boolean;
    triggeredFieldTokens: FieldTokenModel[] | null;
}
export interface IAdditionalOptions {
    trackId?: string | null;
}
export declare class CoLang {
    private cachedParse;
    private withCache;
    private readonly onError?;
    constructor(params?: {
        withCache?: boolean;
        onError?: TOnError;
    });
    private getParseResult;
    private isError;
    checkCondition(condition: string, withCache?: boolean): CoLangError | undefined;
    formatCondition(condition: string, withCache?: boolean): string;
    getFieldEntries(condition: string, options?: IAdditionalOptions): string[] | null;
    evaluateFieldTokens(condition: string, fieldTokens: FieldTokenModel[], options?: IAdditionalOptions): IEvaluationReport | null;
    clearCache(): void;
}
//# sourceMappingURL=CoLang.d.ts.map