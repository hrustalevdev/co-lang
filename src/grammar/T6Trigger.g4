grammar T6Trigger;

/*=======================================
    PARSER specification
=======================================*/

parse
    : expr EOF
    ;

expr
    : expr binary expr                                                #binaryExpr
    | IF comparator FROM field THEN                                   #comparatorExpr
    | IF ANY FROM field THEN                                          #anyExpr
    | IF EMPTY FROM field THEN                                        #emptyExpr
    | IF number FROM field THEN                                       #numberExpr
    | IF numbers FROM field THEN                                      #numbersExpr
    | IF not FROM field THEN                                          #notExpr
    | IF complex FROM field THEN                                      #complexExpr
    | IF count FROM field THEN                                        #countExpr
    | IF countComplex FROM field THEN                                 #countComplexExpr
    | LPAREN expr RPAREN                                              #parenExpr
    | IF vehicleImpact FROM field THEN                                #vehicleImpactExpr
    | IF value FROM field THEN                                        #valueExpr
    | IF values FROM field THEN                                       #valuesExpr
    ;

dateTime
    : DATE_TIME
    ;
vehicleImpact
    : IMPACT_SIDES EQ INT
    ;
number
    : INT
    | DECIMAL
    ;
numbers
    : number(SEPARATOR number)*?
    ;
field
    : IDENTIFIER
    ;
op
    : GT
    | GE
    | LT
    | LE
    | EQ
    ;
comparator
    : op(number|dateTime)
    ;
binary
    : AND
    | OR
    ;
not
    : NOT LPAREN (numbers|values) RPAREN
    ;
complex
    : COMPLEX LPAREN expr RPAREN
    ;
count
    : COUNT LPAREN (DISTINCT|value) RPAREN comparator
    ;
countComplex
    : COUNT_COMPLEX LPAREN (expr | DISTINCT field expr) RPAREN comparator
    ;
value
    : ( ~( SEPARATOR
         | '\u0024' // dollar
         | IF
         | FROM
         | THEN
         | ANY
         | EMPTY
         | NOT
         | COMPLEX
         | COUNT
         | COUNT_COMPLEX
         | DISTINCT
         | IMPACT_SIDES
         | AND
         | OR
         )
      | number
      | op
      | IDENTIFIER
      | LPAREN
      | RPAREN
      | '-'
      | '/'
      | '\u00B0' // degree
      | '\u002B' // plus
      | '\u0025' // precent
      | '\u0026' // ampersand
      | '.'
      )*?
    ;
values
    : value(SEPARATOR value)*?
    ;


/*=======================================
    LEXER specification
=======================================*/

/*  Main keywords
------------------------*/
IF
    : '$IF'
    ;
FROM
    : '$FROM'
    ;
THEN
    : '$THEN'
    ;

/*  Secondary keywords
------------------------*/
ANY
    : '$ANY'
    ;
EMPTY
    : '$EMPTY'
    ;
NOT
    : '$NOT'
    ;
COMPLEX
    : '$COMPLEX'
    ;
COUNT
    : '$COUNT'
    ;
COUNT_COMPLEX
    : '$COUNT_COMPLEX'
    ;

/*  Tertiary keywords
------------------------*/
DISTINCT
    : '$DISTINCT'
    ;
IMPACT_SIDES
    : 'impactSides'
    ;

/*  Binary keywords
------------------------*/
AND
    : '$AND'
    ;
OR
    : '$OR'
    ;

/*  Operators
------------------------*/
GT
    : '>'
    ;
GE
    : '>='
    ;
LT
    : '<'
    ;
LE
    : '<='
    ;
EQ
    : '='
    ;

/*  Parentheses
------------------------*/
LPAREN
    : '('
    ;
RPAREN
    : ')'
    ;

/*  Separators
------------------------*/
SEPARATOR
   : ','
   | ';'
   ;

/*  Numeric literals
------------------------*/
INT
    : '-'?DIGIT+
    ;
DECIMAL
    : INT'.'INT
    ;

/*  Date, time
------------------------*/
DATE_TIME
    : (INT|DECIMAL)[Myd]
    ;

/*  Identifier
------------------------*/
IDENTIFIER
    : (LETTER|DIGIT)(LETTER|DIGIT|'_')*
    ;

/*  Whitespace
------------------------*/
WS
    : [ \r\t\u000C\n]+
    -> skip
    ;

/*  Fragments
------------------------*/
fragment
LETTER
    : [a-zA-Z]
    ;

fragment
DIGIT
    : [0-9]
    ;
