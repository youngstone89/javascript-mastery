function outerFunction() {
    let outerVariable = 'I am from outerFunction';

    function print() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }
    function set(newVal) {
        outerVariable = newVal
    }

    return {
        print, set
    };
}

// Calling outerFunction returns innerFunction, which retains access to outerVariable
let { print, set } = outerFunction();

// Even though outerFunction has finished executing, closureFunction can still access outerVariable
print()
set('changed from outside')
print()
