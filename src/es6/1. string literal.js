//Strings

let hello = 'hello';
let world = 'world';
let helloWorld = hello + ' ' + world;

console.log(helloWorld);

// Template literal

let literalHelloWorld = `${hello} ${world}`;

console.log(literalHelloWorld);

// In summary, the code demonstrates two ways of combining the strings "hello" and "world" to form the final output:

// Concatenation using the + operator:

// The values of hello and world are concatenated using the + operator, with a space in between, and the result is stored in the variable helloWorld.
// The value of helloWorld is then logged to the console using console.log(helloWorld).
// Template literal:

// The template literal syntax ${expression} is used to combine the variables hello and world within backticks ( ).
// The template literal ${hello} ${world} is assigned to the variable literalHelloWorld.
// The value of literalHelloWorld is then logged to the console using console.log(literalHelloWorld).
// Both approaches result in the same output, which is the string "hello world". However, template literals offer a more convenient and readable way to work with strings, especially when incorporating variables and multiline strings, compared to traditional string concatenation using the + operator.

// Multi-line strings

let multiline = 'this is a multi-line string \n' + 'this is another line';

let literalMultiline = `this is a multi-line string 
this is the continuation of the string`;

console.log(multiline);
console.log(literalMultiline);

// In the code provided, two methods of creating multiline strings are demonstrated:

// Concatenation with newline character (\n):

// The multiline variable is assigned a multiline string using concatenation.
// The first line of the string includes 'this is a multi-line string \n', where \n represents a newline character.
// The second line is added using concatenation with 'this is another line'.
// The value of multiline is logged to the console using console.log(multiline).
// Template literal with line breaks:

// The literalMultiline variable is assigned a multiline string using a template literal.
// Line breaks are added within the template literal to create multiple lines of the string.
// The value of literalMultiline is logged to the console using console.log(literalMultiline).
// Both methods achieve the same result, which is a multiline string. However, the template literal approach provides a more concise and readable way to create multiline strings, as line breaks can be directly incorporated within the template without explicit concatenation or special characters. 

