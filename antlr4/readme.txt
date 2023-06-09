Typical Workflow

    When you use ANTLR you start by writing a grammar, a file with extension .g4, 
    which contains the rules of the language that you are analyzing. 

    You then use the antlr4 program to generate the files that your program will actually use, such as the lexer and the parser.

    antlr4 <options> <grammar-file-g4>

    There are a couple of important options you can specify when running antlr4.

    First, you can specify the target language, to generate a parser in Python or JavaScript or any other target different from Java (which is the default one). 
    The other ones are used to generate visitor and listener (do not worry if you do not yet know what these are, we are going to explain them later).

    By default only the listener is generated, so to create the visitor you use the -visitor command line option, 
    and -no-listener if you do not want to generate the listener. 
    
    There are also the opposite options, -no-visitor and -listener, but they represent the default behavior.

    antlr4 -visitor <Grammar-file>

    You can optionally test your grammar using a little utility named TestRig (although, as we have seen, it is usually aliased to grun).

    grun <grammar-name> <rule-to-test> <input-filename(s)>

    The filename(s) are optional and you can instead analyze the input that you type on the console.

    If you want to use the testing tool, you need to generate a Java parser, even if your program is written in another language. This can be done just by selecting a different option with antlr4.

    Grun is useful when testing manually the first draft of your grammar. As it becomes more stable, you may want to relay on automated tests (we will see how to write them).

    Grun also has a few useful options: -tokens, to show the tokens detected,  -gui to generate an image of the AST.