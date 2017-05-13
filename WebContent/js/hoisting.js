/**
 * For more information, visit the below URLs
 * 
 * http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
 * 
 */

// Give the output of the below code
var foo = 1;

function bar() {
	if (!foo) {
		var foo = 10;
	}
	console.log('foo = ',foo);
}

bar();


// Give the output of the below code
var a = 1;
function b() {
	a = 10;
	return;
	
	function a() {}
}
b();
console.log('a = ',a);

// JavaScript has function-level scope. Judge the output of the below program
var x = 1;
console.log('x = '+x);

if (true) {
	var x = 2;
	console.log('x inside if = ',x);
}

console.log('x = ',x); // Value of x does not change here to 1 back because the if block does not create a new scope

/**
 * In Javascript, a name enters a scope in one of the following ways :
 * 1. Language-defined : All scopes are, by default, given the names this and arguments
 * 2. Formal Parameters : Functions can have named formal parameters which are scoped to the body of that function.
 * 3. Function Declarations : These are of the form function foo() {}
 * 4. Variable Declarations : These take the form : var foo;
 * 
 * Function declaration and variable declarations are always moved ("hoisted") invisibly to the top of their containing scope by the JS Interpreter.
 */

