import T6TriggerParser from './gen/T6TriggerParser';
import { Lexer } from './Lexer';
import { CoLangError } from './CoLangError';
import { ParseCtx } from './types';
export declare class Parser {
    parser: T6TriggerParser;
    ast: ParseCtx;
    error?: CoLangError;
    constructor(coLangLexer: Lexer);
}
//# sourceMappingURL=Parser.d.ts.map