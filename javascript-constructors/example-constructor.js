function ExampleConstructor() {

}

console.log('value of ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('value of ExampleConstructor typeof:', typeof ExampleConstructor);

var example = new ExampleConstructor();
console.log('value of example:', example);

var instanceExample = example instanceof ExampleConstructor;
console.log(instanceExample);
