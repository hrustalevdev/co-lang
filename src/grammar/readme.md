### Generate Lexer, Parser & Visitor in Windows

1. Download antlr-4.11.1-complete.jar (or whatever version) from [https://www.antlr.org/download.html](https://www.antlr.org/download.html)
   Save to your directory for 3rd party Java libraries, say `C:\Javalib`
2. Add `antlr-4.11.1-complete.jar` to CLASSPATH. Using System Properties dialog > Environment variables > Create or
   append to `CLASSPATH` **system** variable `.;C:\Javalib\antlr-4.11.1-complete.jar;`:

![image](https://i.stack.imgur.com/lBy27.png)

3. Find and edit Path variable, simply add `C:\Javalib;` to end of the line, like picture below:

![image](https://i.stack.imgur.com/G0gy9.png)

4. Create short convenient commands for the ANTLR Tool, and TestRig:
    * **antlr4.bat**:
    ```
    java org.antlr.v4.Tool %*
    ```
    * **grun.bat**:
    ```
    @ECHO OFF
    SET TEST_CURRENT_DIR=%CLASSPATH:.;=%
    if "%TEST_CURRENT_DIR%" == "%CLASSPATH%" ( SET CLASSPATH=.;%CLASSPATH% )
    @ECHO ON
    java org.antlr.v4.gui.TestRig %*
    ```

![image](https://i.stack.imgur.com/q8hNv.png)

5. **Testing the installation**. Simply write `antlr4` in the command line, you should see something like this:
    ```
   $ antlr4 
   $ java org.antlr.v4.Tool
    ANTLR Parser Generator Version 4.11.1
    -o ___ specify output directory where all output is generated
    -lib ___ specify location of .tokens files
    ...
    ```
6. 🚀 In order to generate Lexer, Parser & Visitor in the "../gen" folder, enter the following command in the terminal:
    ```
    antlr4 -Dlanguage=JavaScript -o ../gen -no-listener -visitor T6Trigger.g4
    ```
