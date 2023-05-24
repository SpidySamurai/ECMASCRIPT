const greeting = () => {
    console.log('Hello World!');
}

export default greeting;

/* Exports a function called greeting as the default export using ES modules syntax.

The greeting function is defined as an arrow function with no parameters. When invoked, it logs the message "Hello World!" to the console.

The export default greeting; statement exports the greeting function as the default export of the module. This allows other modules to import and use the greeting function using the import statement.

Overall, this code sets up a module that exports a single function. The function, when executed, prints a greeting message to the console. Other modules can import this function and use it as needed. */
