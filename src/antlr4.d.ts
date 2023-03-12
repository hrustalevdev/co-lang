import { default as atn } from 'antlr4/atn/index';
import { default as dfa } from 'antlr4/dfa/index';
import { default as tree } from 'antlr4/tree/index';
import { default as error } from 'antlr4/error/index';
import { default as Token } from 'antlr4/Token';
import { default as CommonToken } from 'antlr4/CommonToken';
import { default as CharStreams } from 'antlr4/CharStreams';
import { default as InputStream } from 'antlr4/InputStream';
import { default as FileStream } from 'antlr4/FileStream';
import { default as CommonTokenStream } from 'antlr4/CommonTokenStream';
import { default as Lexer } from 'antlr4/Lexer';
import { default as Parser } from 'antlr4/Parser';
import { default as PredictionContextCache } from 'antlr4/atn/PredictionContextCache';
import { default as Interval } from 'antlr4/misc/Interval';
import { default as IntervalSet } from 'antlr4/misc/IntervalSet';
import { default as LL1Analyzer } from 'antlr4/atn/LL1Analyzer';
import { default as Utils } from 'antlr4/utils/index';
import RuleContext from 'antlr4/context/RuleContext';
import RecognitionException from 'antlr4/error/RecognitionException';
import ParseTreeListener from 'antlr4/tree/ParseTreeListener';
import TerminalNode from 'antlr4/tree/TerminalNode';
import ErrorNode from 'antlr4/tree/ErrorNode';
import ParseTree from 'antlr4/tree/ParseTree';

declare namespace antlr4 {
  export { atn };
  export { dfa };
  export { tree };
  export { error };
  export { Token };
  export { CommonToken };
  export { CharStreams };
  export { InputStream };
  export { FileStream };
  export { CommonTokenStream };
  export { Lexer };
  export { Parser };
  export { PredictionContextCache };
  export { Interval };
  export { IntervalSet };
  export { LL1Analyzer };
  export { Utils };
  export class ParserRuleContext extends RuleContext {
    static readonly EMPTY: ParserRuleContext;

    readonly start: Token;
    readonly stop: Token;
    readonly ruleIndex: number;
    readonly exception: RecognitionException;

    constructor(parent?: RuleContext, invokingState?: number);

    copyFrom(ctx: ParserRuleContext): void;

    enterRule(listener: ParseTreeListener): void;

    exitRule(listener: ParseTreeListener): void;

    addChild(child: ParserRuleContext): TerminalNode;

    removeLastChild(): void;

    addTokenNode(token: Token): Token;

    addErrorNode(badToken: Token): ErrorNode;

    getChild<T extends ParseTree>(i: number, type?: { new (...args: any[]): T }): T | null;

    getToken(ttype: number, i: number): TerminalNode;

    getTokens(ttype: number): Token[];

    getTypedRuleContext<T extends ParserRuleContext>(cxtType: { new (...args: any[]): T }, i: number): T;

    getTypedRuleContexts<T extends ParserRuleContext>(cxtType: { new (...args: any[]): T }): T[];
  }
}

export default antlr4;
