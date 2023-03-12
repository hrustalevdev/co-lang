import antlr4 from 'antlr4';
import type RecognitionException from 'antlr4/error/RecognitionException';
import type Recognizer from 'antlr4/Recognizer';
import type Token from 'antlr4/Token';
import { CoLangError } from './CoLangError';
export declare class ErrorListener extends antlr4.error.ErrorListener {
    private static instance;
    report?: CoLangError;
    static getInstance(): ErrorListener;
    static clearInstance(): void;
    private isLexer;
    syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException): void;
}
//# sourceMappingURL=ErrorListener.d.ts.map