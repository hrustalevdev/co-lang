import type RecognitionException from 'antlr4/error/RecognitionException';
import type Recognizer from 'antlr4/Recognizer';
import type Token from 'antlr4/Token';
import { ESource } from './types';

interface ICoLangError {
  message: string;
  source: ESource;
  line?: number;
  column?: number;
  recognizer?: Recognizer;
  offendingSymbol?: Token;
  e?: RecognitionException;
}

export class CoLangError extends Error implements ICoLangError {
  source: ESource;
  line?: number;
  column?: number;
  recognizer?: Recognizer;
  offendingSymbol?: Token;
  e?: RecognitionException;

  constructor(args: ICoLangError) {
    super(args.message);
    this.name = 'CoLangError';
    this.source = args.source;
    this.line = args.line;
    this.column = args.column;
    this.recognizer = args.recognizer;
    this.offendingSymbol = args.offendingSymbol;
    this.e = args.e;
  }
}
