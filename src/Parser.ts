import antlr4 from 'antlr4';
import T6TriggerParser from './gen/T6TriggerParser';
import { Lexer } from './Lexer';
import { ErrorListener } from './ErrorListener';
import { CoLangError } from './CoLangError';
import { ParseCtx } from './types';

const { CommonTokenStream } = antlr4;

export class Parser {
  parser: T6TriggerParser;
  ast: ParseCtx;
  error?: CoLangError;

  constructor(coLangLexer: Lexer) {
    const { lexer } = coLangLexer;
    /** Creating a token stream */
    const tokens = new CommonTokenStream(lexer);

    /** Pass the token stream to the parser */
    const parser = new T6TriggerParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    const errorListener = ErrorListener.getInstance();
    parser.addErrorListener(errorListener);
    this.parser = parser;

    /**
     * Specify the root node of the AST  (parse tree) - in our case, the top node is - "parse". That is, the parser will
     * start traversing the parse tree, starting with this rule
     */
    this.ast = parser.parse();
    this.error = errorListener.report;
    ErrorListener.clearInstance();
  }
}
