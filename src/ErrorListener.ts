import antlr4 from 'antlr4';
import type RecognitionException from 'antlr4/error/RecognitionException';
import type Recognizer from 'antlr4/Recognizer';
import type Token from 'antlr4/Token';
import T6TriggerLexer from './gen/T6TriggerLexer';
import { CoLangError } from './CoLangError';
import { ESource } from './types';

export class ErrorListener extends antlr4.error.ErrorListener {
  private static instance: ErrorListener | null;
  report?: CoLangError;

  static getInstance() {
    if (!ErrorListener.instance) {
      ErrorListener.instance = new ErrorListener();
    }

    return ErrorListener.instance;
  }

  static clearInstance() {
    ErrorListener.instance = null;
  }

  private isLexer(recogniser: Recognizer): recogniser is T6TriggerLexer {
    return recogniser instanceof T6TriggerLexer;
  }

  override syntaxError(
    recognizer: Recognizer,
    offendingSymbol: Token,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException
  ) {
    const source = this.isLexer(recognizer) ? ESource.LEXER : ESource.PARSER;
    this.report = new CoLangError({
      message: msg,
      source,
      line,
      column,
      recognizer,
      offendingSymbol,
      e,
    });
  }
}
