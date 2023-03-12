import antlr4 from 'antlr4';
import T6TriggerLexer from './gen/T6TriggerLexer';
import { ErrorListener } from './ErrorListener';

const { InputStream } = antlr4;

export class Lexer {
  lexer: T6TriggerLexer;

  constructor(condition: string) {
    /** Creating a stream of characters from the condition (making a copy of the condition characters) */
    const chars = new InputStream(condition, true);
    /** Pass the stream of characters to the Lexer, which converts them into tokens */
    const lexer = new T6TriggerLexer(chars);
    lexer.removeErrorListeners();
    const errorListener = ErrorListener.getInstance();
    lexer.addErrorListener(errorListener);
    this.lexer = lexer;
  }
}
